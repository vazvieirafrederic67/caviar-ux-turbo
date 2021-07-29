<?php

namespace App\Form;

use App\Entity\Contact;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('pseudo', TextType::class,[
                'label' => false,
                'attr' => ['style' => 'visibility:hidden'],
                'required' => false,
            ])
            ->add('firstname', TextType::class,[
                'label' => false,
            ])
            ->add('lastname', TextType::class,[
                'label' => false,
            ])
            ->add('email', TextType::class, [
                'label' => false,
            ])
            ->add('subject', TextType::class, [
                'label' => false,
            ])
            ->add('message', TextareaType::class, [
                'label' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
        ]);
    }
}
