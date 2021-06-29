<?php

namespace App\Controller;

use App\Entity\BasketProduct;
use App\Form\BasketProductType;
use App\Repository\BasketProductRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\Filesystem\Filesystem;

#[Route('admin/basket/product')]
class BasketProductController extends AbstractController
{
    #[Route('/', name: 'basket_product_index', methods: ['GET'])]
    public function index(BasketProductRepository $basketProductRepository): Response
    {
        return $this->render('basket_product/index.html.twig', [
            'basket_products' => $basketProductRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'basket_product_new', methods: ['GET', 'POST'])]
    public function new(Request $request, SluggerInterface $slugger): Response
    {
        $basketProduct = new BasketProduct();
        $form = $this->createForm(BasketProductType::class, $basketProduct);
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
                        $this->getParameter('images_baskets_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
                    // ... handle exception if something happens during file upload
                }

                // updates the 'brochureFilename' property to store the PDF file name
                // instead of its contents
                $basketProduct ->setImage($newFilename);
            }

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($basketProduct);
            $entityManager->flush();

            return $this->redirectToRoute('basket_product_index');
        }

        return $this->render('basket_product/new.html.twig', [
            'basket_product' => $basketProduct,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'basket_product_show', methods: ['GET'])]
    public function show(BasketProduct $basketProduct): Response
    {
        return $this->render('basket_product/show.html.twig', [
            'basket_product' => $basketProduct,
        ]);
    }

    #[Route('/{id}/edit', name: 'basket_product_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, BasketProduct $basketProduct, SluggerInterface $slugger): Response
    {
        $form = $this->createForm(BasketProductType::class, $basketProduct);
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

                if(file_exists ($this->getParameter('images_baskets_directory') . '/' . $basketProduct->getImage())){
                    $filesystem = new Filesystem();
                    $filesystem->rename($this->getParameter('images_baskets_directory') . '/' . $basketProduct->getImage() , $this->getParameter('images_baskets_directory') . '/' . $newFilename,true);
                }

                // Move the file to the directory where brochures are stored
                try {
                    $imageFile->move(
                        $this->getParameter('images_baskets_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
                    // ... handle exception if something happens during file upload
                }

                // updates the 'brochureFilename' property to store the PDF file name
                // instead of its contents
                $basketProduct->setImage($newFilename);
            }

            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('basket_product_index');
        };

        return $this->render('basket_product/edit.html.twig', [
            'basket_product' => $basketProduct,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'basket_product_delete', methods: ['POST'])]
    public function delete(Request $request, BasketProduct $basketProduct): Response
    {
        if ($this->isCsrfTokenValid('delete'.$basketProduct->getId(), $request->request->get('_token'))) {

            
            if(file_exists ($this->getParameter('images_baskets_directory') . '/' . $basketProduct->getImage())){
                unlink($this->getParameter('images_baskets_directory') . "/" .$basketProduct->getImage());
            }

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($basketProduct);
            $entityManager->flush();
        }

        return $this->redirectToRoute('basket_product_index');
    }
}
