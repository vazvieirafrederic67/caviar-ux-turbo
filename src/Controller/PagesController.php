<?php

namespace App\Controller;

use App\Entity\BasketProduct;
use App\Entity\CaviarProduct;
use App\Entity\AccessoriesProduct;
use App\Repository\BasketProductRepository;
use App\Repository\CaviarProductRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\AccessoriesProductRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PagesController extends AbstractController
{
    private $caviars;
    private $baskets;
    private $accessories;

    public function __construct(CaviarProductRepository $caviarProductRepository, BasketProductRepository $basketProductRepository, AccessoriesProductRepository $accessoriesProductRepository)
    {
        $this->caviars = $caviarProductRepository->findAll();
        $this->baskets = $basketProductRepository->findAll();
        $this->accessories = $accessoriesProductRepository->findAll();
        
    }

    #[Route('/home', name: 'app_home')]
    public function home(): Response
    {
        return $this->render('pages/home.html.twig',[
            'caviars' => $this->caviars
        ]);
    }

    #[Route('/about', name: 'app_about')]
    public function about(): Response
    {
        return $this->render('pages/about.html.twig');
    }

    #[Route('/shop', name: 'app_shop')]
    public function shop(): Response
    {
        return $this->render('pages/shop.html.twig',[
            'caviars' => $this->caviars
        ]);
    }

    #[Route('/shop-view/{id}', name: 'app_shop_view')]
    public function shopView(CaviarProduct $caviarProduct): Response
    {
        return new JsonResponse([
            'id' => $caviarProduct->getId(),
            'name' => $caviarProduct->getName(),
            'description' => $caviarProduct->getDescription(),
            'price' => $caviarProduct->getPrice(),
            'diameter' => $caviarProduct->getDiameter(),
            'color' => $caviarProduct->getColor(),
            'image' => $caviarProduct->getImage()
        ]);
    }

    #[Route('/shop-baskets-view/{id}', name: 'app_shop_baskets_view')]
    public function shopBasketView(BasketProduct $basketProduct): Response
    {
        return new JsonResponse([
            'id' => $basketProduct->getId(),
            'name' => $basketProduct->getName(),
            'description' => $basketProduct->getDescription(),
            'price' => $basketProduct->getPrice(),
            'image' => $basketProduct->getImage()
        ]);
    }

    #[Route('/shop-accessories-view/{id}', name: 'app_shop_accessories_view')]
    public function shopAccessoriesView(AccessoriesProduct $accessoriesProduct): Response
    {
        return new JsonResponse([
            'id' => $accessoriesProduct->getId(),
            'name' => $accessoriesProduct->getName(),
            'description' => $accessoriesProduct->getDescription(),
            'price' => $accessoriesProduct->getPrice(),
            'image' => $accessoriesProduct->getImage()
        ]);
    }

    #[Route('/shopping-cart-caviar/{id}', name: 'app_shop_cart_caviar')]
    public function shoppingCartCaviar($id, CaviarProduct $caviarProduct, SessionInterface $session): Response
    {
        $panier = $session->get('caviarProduct', []);

        if(!empty($panier[$caviarProduct->getName()]['quantity'])){
            $panier[$caviarProduct->getName()]['quantity']++;
            $panier[$caviarProduct->getName()]['id'] = $caviarProduct->getId();
            $panier[$caviarProduct->getName()]['name'] = $caviarProduct->getName();
            $panier[$caviarProduct->getName()]['image'] = $caviarProduct->getImage();
            $panier[$caviarProduct->getName()]['price'] = $caviarProduct->getPrice();


        }else{
            $panier[$caviarProduct->getName()]['quantity'] = 1;
            $panier[$caviarProduct->getName()]['id'] = $caviarProduct->getId();
            $panier[$caviarProduct->getName()]['name'] = $caviarProduct->getName();
            $panier[$caviarProduct->getName()]['image'] = $caviarProduct->getImage();
            $panier[$caviarProduct->getName()]['price'] = $caviarProduct->getPrice();
        }

        $session->set('caviarProduct', $panier);

        return $this->redirectToRoute('app_shop');
    }

    #[Route('/shopping-cart-caviar-min/{id}', name: 'app_shop_cart_caviar_min')]
    public function shoppingCartCaviarMin(CaviarProduct $caviarProduct, SessionInterface $session): Response
    {
        $panier = $session->get('caviarProduct', []);

        if(!empty($panier[$caviarProduct->getName()]['quantity']) && $panier[$caviarProduct->getName()]['quantity'] > 1){
            $panier[$caviarProduct->getName()]['quantity']--;
            $panier[$caviarProduct->getName()]['id'] = $caviarProduct->getId();
            $panier[$caviarProduct->getName()]['name'] = $caviarProduct->getName();
            $panier[$caviarProduct->getName()]['image'] = $caviarProduct->getImage();
            $panier[$caviarProduct->getName()]['price'] = $caviarProduct->getPrice();


        }elseif($panier[$caviarProduct->getName()]['quantity'] <= 1){
            $panier[$caviarProduct->getName()]['quantity'] = 1;
            $panier[$caviarProduct->getName()]['id'] = $caviarProduct->getId();
            $panier[$caviarProduct->getName()]['name'] = $caviarProduct->getName();
            $panier[$caviarProduct->getName()]['image'] = $caviarProduct->getImage();
            $panier[$caviarProduct->getName()]['price'] = $caviarProduct->getPrice();
        }
        else{
            $panier[$caviarProduct->getName()]['quantity'] = 1;
            $panier[$caviarProduct->getName()]['id'] = $caviarProduct->getId();
            $panier[$caviarProduct->getName()]['name'] = $caviarProduct->getName();
            $panier[$caviarProduct->getName()]['image'] = $caviarProduct->getImage();
            $panier[$caviarProduct->getName()]['price'] = $caviarProduct->getPrice();
        }

        $session->set('caviarProduct', $panier);

        return new JsonResponse([
            'id' => $caviarProduct->getId(),
            'name' => $caviarProduct->getName(),
            'description' => $caviarProduct->getDescription(),
            'price' => $caviarProduct->getPrice(),
            'diameter' => $caviarProduct->getDiameter(),
            'color' => $caviarProduct->getColor(),
            'image' => $caviarProduct->getImage(),
            'quantity' => $panier[$caviarProduct->getName()]['quantity']
        ]);
    }

    #[Route('/shopping-cart-caviar-max/{id}', name: 'app_shop_cart_caviar_max')]
    public function shoppingCartCaviarMax(CaviarProduct $caviarProduct, SessionInterface $session): Response
    {
        $panier = $session->get('caviarProduct', []);

        if(!empty($panier[$caviarProduct->getName()]['quantity'])){
            $panier[$caviarProduct->getName()]['quantity']++;
            $panier[$caviarProduct->getName()]['id'] = $caviarProduct->getId();
            $panier[$caviarProduct->getName()]['name'] = $caviarProduct->getName();
            $panier[$caviarProduct->getName()]['image'] = $caviarProduct->getImage();
            $panier[$caviarProduct->getName()]['price'] = $caviarProduct->getPrice();


        }else{
            $panier[$caviarProduct->getName()]['quantity'] = 1;
            $panier[$caviarProduct->getName()]['id'] = $caviarProduct->getId();
            $panier[$caviarProduct->getName()]['name'] = $caviarProduct->getName();
            $panier[$caviarProduct->getName()]['image'] = $caviarProduct->getImage();
            $panier[$caviarProduct->getName()]['price'] = $caviarProduct->getPrice();
        }

        $session->set('caviarProduct', $panier);

        return new JsonResponse([
            'id' => $caviarProduct->getId(),
            'name' => $caviarProduct->getName(),
            'description' => $caviarProduct->getDescription(),
            'price' => $caviarProduct->getPrice(),
            'diameter' => $caviarProduct->getDiameter(),
            'color' => $caviarProduct->getColor(),
            'image' => $caviarProduct->getImage(),
            'quantity' => $panier[$caviarProduct->getName()]['quantity'],
        ]);
    }

    #[Route('/shopping-cart-caviar-delete/{id}', name: 'app_shop_cart_caviar_delete')]
    public function shoppingCartCaviarDelete(CaviarProduct $caviarProduct, SessionInterface $session): Response
    {
        $panier = $session->get('caviarProduct', []);
        $session->remove('caviarProduct');
        unset($panier[$caviarProduct->getName()]);
        $session->set('caviarProduct', $panier );
        
        return new JsonResponse();
    }

    #[Route('/shopping-cart-basket-min/{id}', name: 'app_shop_cart_basket_min')]
    public function shoppingCartBasketMin(BasketProduct $basketProduct, SessionInterface $session): Response
    {
        $panier = $session->get('basketProduct', []);

        if(!empty($panier[$basketProduct->getName()]['quantity']) && $panier[$basketProduct->getName()]['quantity'] > 1){
            $panier[$basketProduct->getName()]['quantity']--;
            $panier[$basketProduct->getName()]['id'] = $basketProduct->getId();
            $panier[$basketProduct->getName()]['name'] = $basketProduct->getName();
            $panier[$basketProduct->getName()]['image'] = $basketProduct->getImage();
            $panier[$basketProduct->getName()]['price'] = $basketProduct->getPrice();


        }elseif($panier[$basketProduct->getName()]['quantity'] <= 1){
            $panier[$basketProduct->getName()]['quantity'] = 1;
            $panier[$basketProduct->getName()]['id'] = $basketProduct->getId();
            $panier[$basketProduct->getName()]['name'] = $basketProduct->getName();
            $panier[$basketProduct->getName()]['image'] = $basketProduct->getImage();
            $panier[$basketProduct->getName()]['price'] = $basketProduct->getPrice();
        }
        else{
            $panier[$basketProduct->getName()]['quantity'] = 1;
            $panier[$basketProduct->getName()]['id'] = $basketProduct->getId();
            $panier[$basketProduct->getName()]['name'] = $basketProduct->getName();
            $panier[$basketProduct->getName()]['image'] = $basketProduct->getImage();
            $panier[$basketProduct->getName()]['price'] = $basketProduct->getPrice();
        }

        $session->set('basketProduct', $panier);

        return new JsonResponse([
            'id' => $basketProduct->getId(),
            'name' => $basketProduct->getName(),
            'description' => $basketProduct->getDescription(),
            'price' => $basketProduct->getPrice(),
            'image' => $basketProduct->getImage(),
            'quantity' => $panier[$basketProduct->getName()]['quantity']
        ]);
    }

    #[Route('/shopping-cart-basket-max/{id}', name: 'app_shop_cart_basket_max')]
    public function shoppingCartBasketMax(BasketProduct $basketProduct, SessionInterface $session): Response
    {
        $panier = $session->get('basketProduct', []);

        if(!empty($panier[$basketProduct->getName()]['quantity'])){
            $panier[$basketProduct->getName()]['quantity']++;
            $panier[$basketProduct->getName()]['id'] = $basketProduct->getId();
            $panier[$basketProduct->getName()]['name'] = $basketProduct->getName();
            $panier[$basketProduct->getName()]['image'] = $basketProduct->getImage();
            $panier[$basketProduct->getName()]['price'] = $basketProduct->getPrice();


        }else{
            $panier[$basketProduct->getName()]['quantity'] = 1;
            $panier[$basketProduct->getName()]['id'] = $basketProduct->getId();
            $panier[$basketProduct->getName()]['name'] = $basketProduct->getName();
            $panier[$basketProduct->getName()]['image'] = $basketProduct->getImage();
            $panier[$basketProduct->getName()]['price'] = $basketProduct->getPrice();
        }

        $session->set('basketProduct', $panier);

        return new JsonResponse([
            'id' => $basketProduct->getId(),
            'name' => $basketProduct->getName(),
            'description' => $basketProduct->getDescription(),
            'price' => $basketProduct->getPrice(),
            'image' => $basketProduct->getImage(),
            'quantity' => $panier[$basketProduct->getName()]['quantity'],
        ]);
    }

    #[Route('/shopping-cart-basket-delete/{id}', name: 'app_shop_cart_basket_delete')]
    public function shoppingCartBasketDelete(BasketProduct $basketProduct, SessionInterface $session): Response
    {
        $panier = $session->get('basketProduct', []);
        $session->remove('basketProduct');
        unset($panier[$basketProduct->getName()]);
        $session->set('basketProduct', $panier );
        
        return new JsonResponse();
    }

    #[Route('/shopping-cart-accessories-min/{id}', name: 'app_shop_cart_accessories_min')]
    public function shoppingCartAccessoriesMin(AccessoriesProduct $accessoriesProduct, SessionInterface $session): Response
    {
        $panier = $session->get('accessoriesProduct', []);

        if(!empty($panier[$accessoriesProduct->getName()]['quantity']) && $panier[$accessoriesProduct->getName()]['quantity'] > 1){
            $panier[$accessoriesProduct->getName()]['quantity']--;
            $panier[$accessoriesProduct->getName()]['id'] = $accessoriesProduct->getId();
            $panier[$accessoriesProduct->getName()]['name'] = $accessoriesProduct->getName();
            $panier[$accessoriesProduct->getName()]['image'] = $accessoriesProduct->getImage();
            $panier[$accessoriesProduct->getName()]['price'] = $accessoriesProduct->getPrice();


        }elseif($panier[$accessoriesProduct->getName()]['quantity'] <= 1){
            $panier[$accessoriesProduct->getName()]['quantity'] = 1;
            $panier[$accessoriesProduct->getName()]['id'] = $accessoriesProduct->getId();
            $panier[$accessoriesProduct->getName()]['name'] = $accessoriesProduct->getName();
            $panier[$accessoriesProduct->getName()]['image'] = $accessoriesProduct->getImage();
            $panier[$accessoriesProduct->getName()]['price'] = $accessoriesProduct->getPrice();
        }
        else{
            $panier[$accessoriesProduct->getName()]['quantity'] = 1;
            $panier[$accessoriesProduct->getName()]['id'] = $accessoriesProduct->getId();
            $panier[$accessoriesProduct->getName()]['name'] = $accessoriesProduct->getName();
            $panier[$accessoriesProduct->getName()]['image'] = $accessoriesProduct->getImage();
            $panier[$accessoriesProduct->getName()]['price'] = $accessoriesProduct->getPrice();
        }

        $session->set('accessoriesProduct', $panier);

        return new JsonResponse([
            'id' => $accessoriesProduct->getId(),
            'name' => $accessoriesProduct->getName(),
            'description' => $accessoriesProduct->getDescription(),
            'price' => $accessoriesProduct->getPrice(),
            'image' => $accessoriesProduct->getImage(),
            'quantity' => $panier[$accessoriesProduct->getName()]['quantity']
        ]);
    }

    #[Route('/shopping-cart-accessories-max/{id}', name: 'app_shop_cart_accessories_max')]
    public function shoppingCartAccessoriesMax(AccessoriesProduct $accessoriesProduct, SessionInterface $session): Response
    {
        $panier = $session->get('accessoriesProduct', []);

        if(!empty($panier[$accessoriesProduct->getName()]['quantity'])){
            $panier[$accessoriesProduct->getName()]['quantity']++;
            $panier[$accessoriesProduct->getName()]['id'] = $accessoriesProduct->getId();
            $panier[$accessoriesProduct->getName()]['name'] = $accessoriesProduct->getName();
            $panier[$accessoriesProduct->getName()]['image'] = $accessoriesProduct->getImage();
            $panier[$accessoriesProduct->getName()]['price'] = $accessoriesProduct->getPrice();


        }else{
            $panier[$accessoriesProduct->getName()]['quantity'] = 1;
            $panier[$accessoriesProduct->getName()]['id'] = $accessoriesProduct->getId();
            $panier[$accessoriesProduct->getName()]['name'] = $accessoriesProduct->getName();
            $panier[$accessoriesProduct->getName()]['image'] = $accessoriesProduct->getImage();
            $panier[$accessoriesProduct->getName()]['price'] = $accessoriesProduct->getPrice();
        }

        $session->set('accessoriesProduct', $panier);

        return new JsonResponse([
            'id' => $accessoriesProduct->getId(),
            'name' => $accessoriesProduct->getName(),
            'description' => $accessoriesProduct->getDescription(),
            'price' => $accessoriesProduct->getPrice(),
            'image' => $accessoriesProduct->getImage(),
            'quantity' => $panier[$accessoriesProduct->getName()]['quantity'],
        ]);
    }

    #[Route('/shopping-cart-accessories-delete/{id}', name: 'app_shop_cart_accessories_delete')]
    public function shoppingCartAccessoriesDelete(AccessoriesProduct $accessoriesProduct, SessionInterface $session): Response
    {
        $panier = $session->get('accessoriesProduct', []);
        $session->remove('accessoriesProduct');
        unset($panier[$accessoriesProduct->getName()]);
        $session->set('accessoriesProduct', $panier );
        
        return new JsonResponse();
    }


    #[Route('/shopping-cart-basket/{id}', name: 'app_shop_cart_basket')]
    public function shoppingCartBasket($id, BasketProduct $basketProduct, SessionInterface $session): Response
    {
        $panier = $session->get('basketProduct', []);

        if(!empty($panier[$basketProduct->getName()]['quantity'])){
            $panier[$basketProduct->getName()]['quantity']++;
            $panier[$basketProduct->getName()]['id'] = $basketProduct->getId();
            $panier[$basketProduct->getName()]['name'] = $basketProduct->getName();
            $panier[$basketProduct->getName()]['image'] = $basketProduct->getImage();
            $panier[$basketProduct->getName()]['price'] = $basketProduct->getPrice();


        }else{
            $panier[$basketProduct->getName()]['quantity'] = 1;
            $panier[$basketProduct->getName()]['id'] = $basketProduct->getId();
            $panier[$basketProduct->getName()]['name'] = $basketProduct->getName();
            $panier[$basketProduct->getName()]['image'] = $basketProduct->getImage();
            $panier[$basketProduct->getName()]['price'] = $basketProduct->getPrice();
        }

        $session->set('basketProduct', $panier);

        return $this->redirectToRoute('app_shop_baskets');
    }

    #[Route('/shopping-cart-accessories/{id}', name: 'app_shop_cart_accessories')]
    public function shoppingCartAccessories($id, AccessoriesProduct $accessoriesProduct, SessionInterface $session): Response
    {
        $panier = $session->get('accessoriesProduct', []);

        if(!empty($panier[$accessoriesProduct->getName()]['quantity'])){
            $panier[$accessoriesProduct->getName()]['quantity']++;
            $panier[$accessoriesProduct->getName()]['id'] = $accessoriesProduct->getId();
            $panier[$accessoriesProduct->getName()]['name'] = $accessoriesProduct->getName();
            $panier[$accessoriesProduct->getName()]['image'] = $accessoriesProduct->getImage();
            $panier[$accessoriesProduct->getName()]['price'] = $accessoriesProduct->getPrice();


        }else{
            $panier[$accessoriesProduct->getName()]['quantity'] = 1;
            $panier[$accessoriesProduct->getName()]['id'] = $accessoriesProduct->getId();
            $panier[$accessoriesProduct->getName()]['name'] = $accessoriesProduct->getName();
            $panier[$accessoriesProduct->getName()]['image'] = $accessoriesProduct->getImage();
            $panier[$accessoriesProduct->getName()]['price'] = $accessoriesProduct->getPrice();
        }

        $session->set('accessoriesProduct', $panier);

        return $this->redirectToRoute('app_shop_accessories');
    }

    #[Route('/shop-caviar', name: 'app_shop_caviar')]
    public function shopCaviar(): Response
    {
        return $this->render('pages/shop.html.twig',[
            'caviars' => $this->caviars
        ]);
    }

    #[Route('/shop-accessories', name: 'app_shop_accessories')]
    public function shopAccessories(): Response
    {
        return $this->render('pages/shop_accessories.html.twig',[
            'accessories' => $this->accessories
        ]);
    }

    #[Route('/shop-baskets', name: 'app_shop_baskets')]
    public function shopBaskets(): Response
    {
        return $this->render('pages/shop_baskets.html.twig',[
            'baskets' => $this->baskets
        ]);
    }

    #[Route('/recipes', name: 'app_recipes')]
    public function recipes(): Response
    {
        return $this->render('pages/recipes.html.twig');
    }

    #[Route('/products', name: 'app_products')]
    public function products(): Response
    {
        return $this->render('pages/products.html.twig',[
            'caviars' => $this->caviars
        ]);
    }

    #[Route('/products-caviar', name: 'app_products_caviar')]
    public function productsCaviar(): Response
    {
        return $this->render('pages/products.html.twig',[
            'caviars' => $this->caviars
        ]);
    }

    #[Route('/products-accessories', name: 'app_products_accessories')]
    public function productsAccessories(): Response
    {
        return $this->render('pages/products_accessories.html.twig',[
            'accessories' => $this->accessories
        ]);
    }

    #[Route('/products-baskets', name: 'app_products_baskets')]
    public function productsBaskets(): Response
    {
        return $this->render('pages/products_baskets.html.twig',[
            'baskets' => $this->baskets
        ]);
    }

    #[Route('/contact', name: 'app_contact')]
    public function contact(): Response
    {
        return $this->render('pages/contact.html.twig');
    }
}
