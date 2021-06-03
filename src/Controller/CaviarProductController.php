<?php

namespace App\Controller;

use App\Entity\CaviarProduct;
use App\Form\CaviarProductType;
use App\Repository\CaviarProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\String\Slugger\SluggerInterface;

#[Route('admin/caviar/product')]
class CaviarProductController extends AbstractController
{
    #[Route('/', name: 'caviar_product_index', methods: ['GET'])]
    public function index(CaviarProductRepository $caviarProductRepository): Response
    {
        return $this->render('caviar_product/index.html.twig', [
            'caviar_products' => $caviarProductRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'caviar_product_new', methods: ['GET', 'POST'])]
    public function new(Request $request, SluggerInterface $slugger): Response
    {
        $caviarProduct = new CaviarProduct();
        $form = $this->createForm(CaviarProductType::class, $caviarProduct);
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
                        $this->getParameter('images_caviars_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
                    // ... handle exception if something happens during file upload
                }

                // updates the 'brochureFilename' property to store the PDF file name
                // instead of its contents
                $caviarProduct ->setImage($newFilename);
            }

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($caviarProduct);
            $entityManager->flush();

            return $this->redirectToRoute('caviar_product_index');
        }

        return $this->render('caviar_product/new.html.twig', [
            'caviar_product' => $caviarProduct,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'caviar_product_show', methods: ['GET'])]
    public function show(CaviarProduct $caviarProduct): Response
    {
        return $this->render('caviar_product/show.html.twig', [
            'caviar_product' => $caviarProduct,
        ]);
    }

    #[Route('/{id}/edit', name: 'caviar_product_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, CaviarProduct $caviarProduct, SluggerInterface $slugger): Response
    {
        $form = $this->createForm(CaviarProductType::class, $caviarProduct);
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

                if(file_exists ($this->getParameter('images_caviars_directory') . '/' . $caviarProduct->getImage())){
                    $filesystem = new Filesystem();
                    $filesystem->rename($this->getParameter('images_caviars_directory') . '/' . $caviarProduct->getImage() , $this->getParameter('images_caviars_directory') . '/' . $newFilename,true);
                }

                // Move the file to the directory where brochures are stored
                try {
                    $imageFile->move(
                        $this->getParameter('images_caviars_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
                    // ... handle exception if something happens during file upload
                }

                // updates the 'brochureFilename' property to store the PDF file name
                // instead of its contents
                $caviarProduct->setImage($newFilename);
            }

            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('caviar_product_index');
        }

        return $this->render('caviar_product/edit.html.twig', [
            'caviar_product' => $caviarProduct,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'caviar_product_delete', methods: ['POST'])]
    public function delete(Request $request, CaviarProduct $caviarProduct): Response
    {
        if ($this->isCsrfTokenValid('delete'.$caviarProduct->getId(), $request->request->get('_token'))) {

            if(file_exists ($this->getParameter('images_caviars_directory') . '/' . $caviarProduct->getImage())){
                unlink($this->getParameter('images_caviars_directory') . "/" .$caviarProduct->getImage());
            }
            
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($caviarProduct);
            $entityManager->flush();
        }

        return $this->redirectToRoute('caviar_product_index');
    }
}
