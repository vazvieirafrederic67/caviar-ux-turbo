<?php

namespace App\Controller;

use App\Entity\AccessoriesProduct;
use App\Form\AccessoriesProductType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\AccessoriesProductRepository;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\Filesystem\Filesystem;

#[Route('admin/accessories/product')]
class AccessoriesProductController extends AbstractController
{
    #[Route('/', name: 'accessories_product_index', methods: ['GET'])]
    public function index(AccessoriesProductRepository $accessoriesProductRepository): Response
    {
        return $this->render('accessories_product/index.html.twig', [
            'accessories_products' => $accessoriesProductRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'accessories_product_new', methods: ['GET', 'POST'])]
    public function new(Request $request, SluggerInterface $slugger): Response
    {
        $accessoriesProduct = new AccessoriesProduct();
        $form = $this->createForm(AccessoriesProductType::class, $accessoriesProduct);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            /** @var UploadedFile $imageFile */
            $imageFile = $form->get('image')->getData();

            // this condition is needed because the 'brochure' field is not required
            // so the PDF file must be processed only when a file is uploaded
            if ($imageFile) {
                $originalFilename = pathinfo($imageFile->getClientOriginalName(), PATHINFO_FILENAME);
                // this is needed to safely include the file name as part of the URL
                $safeFilename = $slugger->slug($originalFilename);
                $newFilename = $safeFilename.'-'.uniqid().'.'.$imageFile->guessExtension();

                // Move the file to the directory where brochures are stored
                try {
                    $imageFile->move(
                        $this->getParameter('images_accessories_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
                    // ... handle exception if something happens during file upload
                }

                // updates the 'brochureFilename' property to store the PDF file name
                // instead of its contents
                $accessoriesProduct ->setImage($newFilename);
            }


            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($accessoriesProduct);
            $entityManager->flush();

            return $this->redirectToRoute('accessories_product_index');
        }

        return $this->render('accessories_product/new.html.twig', [
            'accessories_product' => $accessoriesProduct,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'accessories_product_show', methods: ['GET'])]
    public function show(AccessoriesProduct $accessoriesProduct): Response
    {
        return $this->render('accessories_product/show.html.twig', [
            'accessories_product' => $accessoriesProduct,
        ]);
    }

    #[Route('/{id}/edit', name: 'accessories_product_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, AccessoriesProduct $accessoriesProduct, SluggerInterface $slugger): Response
    {
        $form = $this->createForm(AccessoriesProductType::class, $accessoriesProduct);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            
            /** @var UploadedFile $imageFile */
            $imageFile = $form->get('image')->getData();

            // this condition is needed because the 'brochure' field is not required
            // so the PDF file must be processed only when a file is uploaded
            if ($imageFile) {
                $originalFilename = pathinfo($imageFile->getClientOriginalName(), PATHINFO_FILENAME);
                // this is needed to safely include the file name as part of the URL
                $safeFilename = $slugger->slug($originalFilename);
                $newFilename = $safeFilename.'-'.uniqid().'.'.$imageFile->guessExtension();

                if(file_exists ($this->getParameter('images_accessories_directory') . '/' . $accessoriesProduct->getImage())){
                    $filesystem = new Filesystem();
                    $filesystem->rename($this->getParameter('images_accessories_directory') . '/' . $accessoriesProduct->getImage() , $this->getParameter('images_accessories_directory') . '/' . $newFilename,true);
                }

                // Move the file to the directory where brochures are stored
                try {
                    $imageFile->move(
                        $this->getParameter('images_accessories_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
                    // ... handle exception if something happens during file upload
                }

                // updates the 'brochureFilename' property to store the PDF file name
                // instead of its contents
                $accessoriesProduct->setImage($newFilename);
            }

            $this->getDoctrine()->getManager()->flush();
            return $this->redirectToRoute('accessories_product_index');
        }

        return $this->render('accessories_product/edit.html.twig', [
            'accessories_product' => $accessoriesProduct,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'accessories_product_delete', methods: ['POST'])]
    public function delete(Request $request, AccessoriesProduct $accessoriesProduct): Response
    {
        if ($this->isCsrfTokenValid('delete'.$accessoriesProduct->getId(), $request->request->get('_token'))) {

            if(file_exists ($this->getParameter('images_accessories_directory') . '/' . $accessoriesProduct->getImage())){
                unlink($this->getParameter('images_accessories_directory') . "/" .$accessoriesProduct->getImage());
            }

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($accessoriesProduct);
            $entityManager->flush();
        }

        return $this->redirectToRoute('accessories_product_index');
    }
}
