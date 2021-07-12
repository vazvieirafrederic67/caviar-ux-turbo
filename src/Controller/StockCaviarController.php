<?php

namespace App\Controller;

use App\Entity\StockCaviar;
use App\Form\StockCaviarType;
use App\Repository\StockCaviarRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/stock/caviar')]
class StockCaviarController extends AbstractController
{
    #[Route('/', name: 'stock_caviar_index', methods: ['GET'])]
    public function index(StockCaviarRepository $stockCaviarRepository): Response
    {
        return $this->render('stock_caviar/index.html.twig', [
            'stock_caviars' => $stockCaviarRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'stock_caviar_new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $stockCaviar = new StockCaviar();
        $form = $this->createForm(StockCaviarType::class, $stockCaviar);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $stockCaviar->setNameCaviar($form->getData()->getCaviar()->getName());

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($stockCaviar);
            $entityManager->flush();

            return $this->redirectToRoute('stock_caviar_index');
        }

        return $this->render('stock_caviar/new.html.twig', [
            'stock_caviar' => $stockCaviar,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'stock_caviar_show', methods: ['GET'])]
    public function show(StockCaviar $stockCaviar): Response
    {
        return $this->render('stock_caviar/show.html.twig', [
            'stock_caviar' => $stockCaviar,
        ]);
    }

    #[Route('/{id}/edit', name: 'stock_caviar_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, StockCaviar $stockCaviar): Response
    {
        $form = $this->createForm(StockCaviarType::class, $stockCaviar);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('stock_caviar_index');
        }

        return $this->render('stock_caviar/edit.html.twig', [
            'stock_caviar' => $stockCaviar,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'stock_caviar_delete', methods: ['POST'])]
    public function delete(Request $request, StockCaviar $stockCaviar): Response
    {
        if ($this->isCsrfTokenValid('delete'.$stockCaviar->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($stockCaviar);
            $entityManager->flush();
        }

        return $this->redirectToRoute('stock_caviar_index');
    }
}
