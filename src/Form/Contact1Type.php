<?php

namespace App\Form;

use App\Entity\Contact;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class Contact1Type extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('firstname', TextType::class, [
                'label_attr' => ['class' => 'col-3'],
                'row_attr' => ['class' => 'col-12']
            ])
            ->add('lastname', TextType::class, [
                'label_attr' => ['class' => 'col-3'],
                'row_attr' => ['class' => 'col-12']
            ])
            ->add('email', TextType::class, [
                'label_attr' => ['class' => 'col-3'],
                'row_attr' => ['class' => 'col-12']
            ])
            ->add('subject', TextType::class, [
                'label_attr' => ['class' => 'col-3'],
                'row_attr' => ['class' => 'col-12']
            ])
            ->add('message', TextType::class, [
                'label_attr' => ['class' => 'col-3'],
                'row_attr' => ['class' => 'col-12']
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
