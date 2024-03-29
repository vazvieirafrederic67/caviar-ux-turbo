<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Intl\Countries;
use Symfony\Component\Intl\Languages;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\BirthdayType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;



class RegistrationFormType extends AbstractType
{

    private $countries = [];

    public function __construct()
    {
        \Locale::setDefault('en');
        $dataCountries = Countries::getNames();
        
        foreach($dataCountries as $key => $country){
            $this->countries[$country] = $key;
        }
       
    }


    public function buildForm(FormBuilderInterface $builder, array $options)
    {

        $builder
            ->add('lastname', TextType::class, [
                'label' => false,
            ])
            ->add('firstname', TextType::class, [
                'label' => false,
            ])
            ->add('dateOfBirth', DateType::class, [
                'label' => false,
                'widget' => 'single_text',
                'html5' => false,
                'format' => 'dd-MM-yyyy',
                'attr' => ['autocomplete' => 'off']
            ])
            ->add('phoneNumber', IntegerType::class, [
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
                'choices'  => $this->countries,
            ])
            ->add('email', EmailType::class, [
                'label' => false,
            ])
            ->add('plainPassword', PasswordType::class, [
                'label' => false,
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                'mapped' => false,
                'attr' => ['autocomplete' => 'new-password'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Veuillez insérer votre mot de passe',
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Votre mot de passe doit avoir au moins {{ limit }} caractères',
                        // max length allowed by Symfony for security reasons
                        'max' => 4096,
                    ]),
                ],
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
