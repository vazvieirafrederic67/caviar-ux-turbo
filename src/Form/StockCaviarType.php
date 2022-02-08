<?php

namespace App\Form;

use App\Entity\StockCaviar;
use App\Entity\CaviarProduct;
use Symfony\Component\Form\AbstractType;
use App\Repository\CaviarProductRepository;
use App\Repository\StockCaviarRepository;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class StockCaviarType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('quantity')
            ->add('quantityMin')
            ->add('quantityMax')
            ->add('caviar')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => StockCaviar::class,
        ]);
    }
}
