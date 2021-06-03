<?php

namespace App\Controller;

use App\Repository\AccessoriesProductRepository;
use App\Repository\BasketProductRepository;
use App\Repository\CaviarProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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



    #[Route('/', name: 'app_home')]
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
        return $this->render('pages/shop.html.twig');
    }

    #[Route('/shop-caviar', name: 'app_shop_caviar')]
    public function shopCaviar(): Response
    {
        return $this->render('pages/shop.html.twig');
    }

    #[Route('/shop-accessories', name: 'app_shop_accessories')]
    public function shopAccessories(): Response
    {
        return $this->render('pages/shop_accessories.html.twig');
    }

    #[Route('/shop-baskets', name: 'app_shop_baskets')]
    public function shopBaskets(): Response
    {
        return $this->render('pages/shop_baskets.html.twig');
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
