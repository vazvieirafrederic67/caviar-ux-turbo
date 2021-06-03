<?php

namespace App\Repository;

use App\Entity\CaviarProduct;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CaviarProduct|null find($id, $lockMode = null, $lockVersion = null)
 * @method CaviarProduct|null findOneBy(array $criteria, array $orderBy = null)
 * @method CaviarProduct[]    findAll()
 * @method CaviarProduct[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CaviarProductRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CaviarProduct::class);
    }

    // /**
    //  * @return CaviarProduct[] Returns an array of CaviarProduct objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CaviarProduct
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
