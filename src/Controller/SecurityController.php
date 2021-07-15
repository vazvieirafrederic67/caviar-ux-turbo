<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="app_login")
     */
    public function login(AuthenticationUtils $authenticationUtils, SessionInterface $session): Response
    {


        $caviarPanier = $session->get('caviarProduct', []);
        $basketPanier = $session->get('basketProduct', []);
        $accessoriesPanier = $session->get('accessoriesProduct', []);

        if(!empty($caviarPanier)){
            foreach($caviarPanier as $panier) {

                if(isset($panier['reduction'])){
                    $panier['reduction'] = [];
                }
            }
        }   

        if(!empty($basketPanier)){
            foreach($basketPanier as $panier) {

                if(isset($panier['reduction'])){
                    $panier['reduction'] = [];
                }
            }
        }        

        if(!empty($accessoriesPanier)){
            foreach($accessoriesPanier as $panier) {

                if(isset($panier['reduction'])){
                    $panier['reduction'] = [];
                }
            }
        } 


        if ($this->getUser()) {
             return $this->redirectToRoute('app_home');
        }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout(SessionInterface $session)
    {
        $caviarPanier = $session->get('caviarProduct', []);
        $basketPanier = $session->get('basketProduct', []);
        $accessoriesPanier = $session->get('accessoriesProduct', []);

        if(!empty($caviarPanier)){
            foreach($caviarPanier as $panier) {

                if(isset($panier['reduction'])){
                    $panier['reduction'] = [];
                }
            }
        }   

        if(!empty($basketPanier)){
            foreach($basketPanier as $panier) {

                if(isset($panier['reduction'])){
                    $panier['reduction'] = [];
                }
            }
        }        

        if(!empty($accessoriesPanier)){
            foreach($accessoriesPanier as $panier) {

                if(isset($panier['reduction'])){
                    $panier['reduction'] = [];
                }
            }
        } 




        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
