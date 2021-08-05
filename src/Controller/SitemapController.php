<?php

namespace App\Controller;



use App\Entity\User;
use App\Entity\CodePromo;
use App\Entity\StockCaviar;
use App\Entity\BasketProduct;
use App\Entity\CaviarProduct;
use App\Entity\AccessoriesProduct;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SitemapController extends AbstractController
{


    /**
     * @Route("/sitemap.xml", name="app_sitemap", defaults={"_format":"xml"})
     */
    public function index(Request $request): Response
    {
        $hostname = $request->getSchemeAndHttpHost();

        //Urls statiques
        $urls = [];                    
                    
        $urls[] = ['loc' => $this->generateUrl('accessories_product_index')];
        $urls[] = ['loc' => $this->generateUrl('accessories_product_new')];
        $urls[] = ['loc' => $this->generateUrl('basket_product_index')];
        $urls[] = ['loc' => $this->generateUrl('basket_product_new')];
        $urls[] = ['loc' => $this->generateUrl('caviar_product_index')];
        $urls[] = ['loc' => $this->generateUrl('caviar_product_new')];
        $urls[] = ['loc' => $this->generateUrl('app_home')];
        $urls[] = ['loc' => $this->generateUrl('app_about')];
        $urls[] = ['loc' => $this->generateUrl('app_shop')];
        $urls[] = ['loc' => $this->generateUrl('app_shop_caviar')];
        $urls[] = ['loc' => $this->generateUrl('app_shop_accessories')];
        $urls[] = ['loc' => $this->generateUrl('app_shop_baskets')];
        $urls[] = ['loc' => $this->generateUrl('app_recipes')];
        $urls[] = ['loc' => $this->generateUrl('app_products')];
        $urls[] = ['loc' => $this->generateUrl('app_products_caviar')];
        $urls[] = ['loc' => $this->generateUrl('app_products_accessories')];
        $urls[] = ['loc' => $this->generateUrl('app_products_baskets')];
        $urls[] = ['loc' => $this->generateUrl('app_contact')];
        $urls[] = ['loc' => $this->generateUrl('app_register_distributor')];
        $urls[] = ['loc' => $this->generateUrl('app_login')];
        $urls[] = ['loc' => $this->generateUrl('app_logout')];
        $urls[] = ['loc' => $this->generateUrl('user_index')];
        $urls[] = ['loc' => $this->generateUrl('user_new')];
        $urls[] = ['loc' => $this->generateUrl('app_checkout')];
        $urls[] = ['loc' => $this->generateUrl('app_checkout_anonymous')];
        $urls[] = ['loc' => $this->generateUrl('app_paiement')];
        $urls[] = ['loc' => $this->generateUrl('app_paiement_anonymous')];
        $urls[] = ['loc' => $this->generateUrl('app_paiement_bancontact')];
        $urls[] = ['loc' => $this->generateUrl('app_paiement_bancontact_anonymous')];
        $urls[] = ['loc' => $this->generateUrl('app_validation_shopping')];
        $urls[] = ['loc' => $this->generateUrl('app_contact_index')];
        $urls[] = ['loc' => $this->generateUrl('code_promo_index')];
        $urls[] = ['loc' => $this->generateUrl('code_promo_new')];
        $urls[] = ['loc' => $this->generateUrl('app_code_promo')];
        $urls[] = ['loc' => $this->generateUrl('app_check_code')];
        $urls[] = ['loc' => $this->generateUrl('stock_caviar_index')];
        $urls[] = ['loc' => $this->generateUrl('stock_caviar_new')];
        $urls[] = ['loc' => $this->generateUrl('app_dhl_raterequest')];
        

        //Urls dynamiques
        foreach($this->getDoctrine()->getRepository(AccessoriesProduct::class)->findAll() as $data){
            $urls[] = ['loc' => $this->generateUrl( 'accessories_product_show' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'accessories_product_edit' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'accessories_product_delete' , [ 'id' => $data->getId()])];
        }

        foreach($this->getDoctrine()->getRepository(BasketProduct::class)->findAll() as $data){
            $urls[] = ['loc' => $this->generateUrl( 'basket_product_show' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'basket_product_edit' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'basket_product_delete' , [ 'id' => $data->getId()])];
        }

        foreach($this->getDoctrine()->getRepository(CaviarProduct::class)->findAll() as $data){
            $urls[] = ['loc' => $this->generateUrl( 'caviar_product_show' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'caviar_product_edit' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'caviar_product_delete' , [ 'id' => $data->getId()])];
        }

        foreach($this->getDoctrine()->getRepository(CaviarProduct::class)->findAll() as $data){
            $urls[] = ['loc' => $this->generateUrl( 'app_shop_view' , [ 'id' => $data->getId()])];
        }

        foreach($this->getDoctrine()->getRepository(BasketProduct::class)->findAll() as $data){
            $urls[] = ['loc' => $this->generateUrl( 'app_shop_baskets_view' , [ 'id' => $data->getId()])];
        }

        foreach($this->getDoctrine()->getRepository(AccessoriesProduct::class)->findAll() as $data){
            $urls[] = ['loc' => $this->generateUrl( 'app_shop_accessories_view' , [ 'id' => $data->getId()])];
        }
 
        foreach($this->getDoctrine()->getRepository(CaviarProduct::class)->findAll() as $data){
            $urls[] = ['loc' => $this->generateUrl( 'app_shop_cart_caviar' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'app_shop_cart_caviar_min' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'app_shop_cart_caviar_max' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'app_shop_cart_caviar_delete' , [ 'id' => $data->getId()])];
        }

        foreach($this->getDoctrine()->getRepository(BasketProduct::class)->findAll() as $data){
            $urls[] = ['loc' => $this->generateUrl( 'app_shop_cart_basket' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'app_shop_cart_basket_min' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'app_shop_cart_basket_max' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'app_shop_cart_basket_delete' , [ 'id' => $data->getId()])];
        }

        foreach($this->getDoctrine()->getRepository(AccessoriesProduct::class)->findAll() as $data){
            $urls[] = ['loc' => $this->generateUrl( 'app_shop_cart_accessories' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'app_shop_cart_accessories_min' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'app_shop_cart_accessories_max' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'app_shop_cart_accessories_delete' , [ 'id' => $data->getId()])];
        }

        foreach($this->getDoctrine()->getRepository(User::class)->findAll() as $data){
            $urls[] = ['loc' => $this->generateUrl( 'user_show' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'user_edit' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'user_delete' , [ 'id' => $data->getId()])];
        }

        foreach($this->getDoctrine()->getRepository(CodePromo::class)->findAll() as $data){
            $urls[] = ['loc' => $this->generateUrl( 'code_promo_show' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'code_promo_edit' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'code_promo_delete' , [ 'id' => $data->getId()])];
        }

        foreach($this->getDoctrine()->getRepository(StockCaviar::class)->findAll() as $data){
            $urls[] = ['loc' => $this->generateUrl( 'stock_caviar_show' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'stock_caviar_edit' , [ 'id' => $data->getId()])];
            $urls[] = ['loc' => $this->generateUrl( 'stock_caviar_delete' , [ 'id' => $data->getId()])];
        }
        
        $response = new Response(
            $this->renderView('sitemap/index.html.twig',[
                'urls' => $urls,
                'hostname' => $hostname
            ]),
            200
        );

        $response->headers->set( 'Content-type' , 'text/xml' );

        return $response;
    }
}
