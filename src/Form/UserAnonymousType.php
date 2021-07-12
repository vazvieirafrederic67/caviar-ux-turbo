<?php

namespace App\Form;

use App\Entity\UserAnonymous;
use Symfony\Component\Intl\Countries;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

class UserAnonymousType extends AbstractType
{
    private $countries = [];

    public function __construct()
    {
        \Locale::setDefault('fr');
        $dataCountries = Countries::getNames();
        
        foreach($dataCountries as $key => $country){
            $this->countries[$country] = $key;
        }
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', EmailType::class, [
                'label' => false,
            ])
            ->add('lastname', TextType::class, [
                'label' => false,
            ])
            ->add('firstname', TextType::class, [
                'label' => false,
            ])
            ->add('adresseNumber', IntegerType::class, [
                'label' => false,
            ])
            ->add('streetName', TextType::class, [
                'label' => false,
            ])
            ->add('postalCode', IntegerType::class, [
                'label' => false,
            ])
            ->add('city', TextType::class, [
                'label' => false,
            ])
            ->add('country', ChoiceType::class, [
                'label' => false,
                'placeholder' => 'Choisir votre pays',
                'choices' => $this->countries,
            ])
            ->add('phoneNumber', IntegerType::class, [
                'label' => false,
            ])
            ->add('dateOfBirth', DateType::class, [
                'label' => false,
                'widget' => 'single_text',
                'html5' => false,
                'format' => 'dd-MM-yyyy',
                'attr' => ['autocomplete' => 'off']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => UserAnonymous::class,
        ]);
    }
}