<?php

namespace App\Repository;

use App\Entity\StockCaviar;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method StockCaviar|null find($id, $lockMode = null, $lockVersion = null)
 * @method StockCaviar|null findOneBy(array $criteria, array $orderBy = null)
 * @method StockCaviar[]    findAll()
 * @method StockCaviar[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StockCaviarRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, StockCaviar::class);
    }

    // /**
    //  * @return StockCaviar[] Returns an array of StockCaviar objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?StockCaviar
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
