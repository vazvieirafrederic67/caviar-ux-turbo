<?php

namespace App\Repository;

use App\Entity\AccessoriesProduct;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method AccessoriesProduct|null find($id, $lockMode = null, $lockVersion = null)
 * @method AccessoriesProduct|null findOneBy(array $criteria, array $orderBy = null)
 * @method AccessoriesProduct[]    findAll()
 * @method AccessoriesProduct[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AccessoriesProductRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AccessoriesProduct::class);
    }

    // /**
    //  * @return AccessoriesProduct[] Returns an array of AccessoriesProduct objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?AccessoriesProduct
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
