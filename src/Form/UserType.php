<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Intl\Countries;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class UserType extends AbstractType
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
            ->add('email', EmailType::class)
            ->add('roles', ChoiceType::class, [
                'choices' => [
                    'Utilisateur' => 'ROLE_USER',
                    'Professionnel' => 'ROLE_PRO',
                    'Administrateur' => 'ROLE_ADMIN'
                ],
                'expanded' => true,
                'multiple' => true,
                'label' => 'Rôles',
            ])
            ->add('lastname', TextType::class)
            ->add('firstname', TextType::class)
            ->add('adresseNumber',IntegerType::class)
            ->add('streetName', TextType::class)
            ->add('postalCode',IntegerType::class)
            ->add('city', TextType::class)
            ->add('country', ChoiceType::class, [
                'label' => false,
                'placeholder' => 'Choisir votre pays',
                'choices' => $this->countries,
            ])
            ->add('phoneNumber',IntegerType::class)
            ->add('dateOfBirth', DateType::class, [
                'widget' => 'choice',
                 'years' => range(date('Y'), date('Y')-100),
                 'label' => true
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
