<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Intl\Countries;

class ChangeUserInfoType extends AbstractType
{

    private $countries = [];

    public function __construct()
    {
        \Locale::setDefault('en');
        $dataCountries = Countries::getNames();
        
        foreach($dataCountries as $country){ 
            $this->countries[$country] = $country;
        }
       
    }




    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', TextType::class, [
                'label' => false
            ])
            ->add('lastname', TextType::class, [
                'label' => false
            ])
            ->add('firstname', TextType::class, [
                'label' => false
            ])
            ->add('adresseNumber', NumberType::class, [
                'label' => false
            ])
            ->add('streetName', TextType::class, [
                'label' => false
            ])
            ->add('postalCode', NumberType::class, [
                'label' => false
            ])
            ->add('city', TextType::class, [
                'label' => false
            ])
            ->add('country', ChoiceType::class, [
                'label' => false,
                'placeholder' => 'Choose your country',
                'choices'  => $this->countries,
            ])
            ->add('phoneNumber', NumberType::class, [
                'label' => false
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}