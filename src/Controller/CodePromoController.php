<?php

namespace App\Controller;

use DateTime;
use App\Entity\CodePromo;
use App\Form\CodePromoType;
use App\Repository\CodePromoRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('admin/code_promo')]
class CodePromoController extends AbstractController
{
    #[Route('/', name: 'code_promo_index', methods: ['GET'])]
    public function index(CodePromoRepository $codePromoRepository): Response
    {
        return $this->render('code_promo/index.html.twig', [
            'code_promos' => $codePromoRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'code_promo_new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $codePromo = new CodePromo();
        $form = $this->createForm(CodePromoType::class, $codePromo);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $codePromo->setCode(strtoupper($codePromo->getCode()));

            $origin = $form->getData()->getStartedAt();
            $target = $form->getData()->getEndedAt();
            $now = new DateTime('now');

            if ($now > $origin && $now < $target) {
                $codePromo->setActive(true);
            }else{
                $codePromo->setActive(false);
            }

            $alwaysActive = $form->getData()->getAlwaysActive();

            if($alwaysActive){
                $codePromo->setActive(true);
            }

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($codePromo);
            $entityManager->flush();

            return $this->redirectToRoute('code_promo_index');
        }

        return $this->render('code_promo/new.html.twig', [
            'code_promo' => $codePromo,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'code_promo_show', methods: ['GET'])]
    public function show(CodePromo $codePromo): Response
    {
        return $this->render('code_promo/show.html.twig', [
            'code_promo' => $codePromo,
        ]);
    }

    #[Route('/{id}/edit', name: 'code_promo_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, CodePromo $codePromo): Response
    {
        $form = $this->createForm(CodePromoType::class, $codePromo);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $codePromo->setCode(strtoupper($codePromo->getCode()));

            $origin = $form->getData()->getStartedAt();
            $target = $form->getData()->getEndedAt();
            $now = new DateTime('now');

            if ($now > $origin && $now < $target) {
                $codePromo->setActive(true);
            }else{
                $codePromo->setActive(false);
            }

            $alwaysActive = $form->getData()->getAlwaysActive();

            if($alwaysActive){
                $codePromo->setActive(true);
            }


            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('code_promo_index');
        }

        return $this->render('code_promo/edit.html.twig', [
            'code_promo' => $codePromo,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}/delete', name: 'code_promo_delete', methods: ['POST'])]
    public function delete(Request $request, CodePromo $codePromo): Response
    {
        if ($this->isCsrfTokenValid('delete'.$codePromo->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($codePromo);
            $entityManager->flush();
        }

        return $this->redirectToRoute('code_promo_index');
    }

    #[Route('/check_code', name: 'app_check_code')]
    public function checkCode(Request $request, CodePromoRepository $codePromoRepository, SessionInterface $session): Response
    {
        $total = 0;
        $code = strtoupper($request->get('name'));
        $livraisonAlreadyExist = $request->get('livraison');

        $codePromo = $codePromoRepository->findOneBy(['code' => $code]);
        $panierCaviar = $session->get('caviarProduct', []);
        $panierBasket = $session->get('basketProduct', []);
        $panierAccessories = $session->get('accessoriesProduct', []);
        $livraison = $session->get('livraison', []);
        $reduction = $session->get('reduction', []);
        

        if(null === $codePromo) {
            $codePromo = "Pas de code!";
            $code = "Pas de code!";

            return new JsonResponse([
                'code' => $code,
                'codePromo' => $codePromo
            ]);

        }else{

            if([] !== $panierCaviar){
                foreach($panierCaviar as $caviar){
                    $total = $total + ($caviar['quantity'] * $caviar['price']);
                    $panierCaviar[$caviar['name']]['reduction'] = $codePromo->getPourcentageReduction();
                    $session->set('reduction', $codePromo->getPourcentageReduction() );
                }

                $session->set('caviarProduct', $panierCaviar);
            }

            if([] !== $panierBasket){
                foreach($panierBasket as $basket){
                    $total = $total + ($basket['quantity'] * $basket['price']);
                    $panierBasket[$basket['name']]['reduction'] = $codePromo->getPourcentageReduction();
                    $session->set('reduction', $codePromo->getPourcentageReduction() );
                }

                $session->set('caviarBasket', $panierBasket);
            }

            if([] !== $panierAccessories){
                foreach($panierAccessories as $accessorie){
                    $total = $total + ($accessorie['quantity'] * $accessorie['price']);
                    $panierAccessories[$accessorie['name']]['reduction'] = $codePromo->getPourcentageReduction();
                    $session->set('reduction', $codePromo->getPourcentageReduction() );
                }

                $session->set('caviarAccessories', $panierAccessories);
            }

            $tempReduction = $total * ($codePromo->getPourcentageReduction() / 100);
            $total = $total - $tempReduction;
            $session->set('reduction', $tempReduction);

            if( isset($livraison['amount']) && null !== $livraison['amount'] && "" !== $livraisonAlreadyExist ) {
                $total = $total + $livraison['amount'];
            }

            $total = round((float)$total, 2);

            return new JsonResponse([
                'id' => $codePromo->getId(),
                'code' => $codePromo->getCode(),
                'reduction' => $codePromo->getPourcentageReduction(),
                'active'=> $codePromo->getActive(),
                'panierCaviar' => $panierCaviar,
                'panierBasket' => $panierBasket,
                'panierAccessories' => $panierAccessories,
                'total' => $total,
                'livraison' => $livraisonAlreadyExist
            ]);
        }
    }
}
