<?php

namespace App\Entity;

use App\Repository\StockCaviarRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=StockCaviarRepository::class)
 */
class StockCaviar
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity=CaviarProduct::class)
     */
    private $caviar;

    /**
     * @ORM\Column(type="integer")
     */
    private $quantity;

    /**
     * @ORM\Column(type="integer")
     */
    private $quantityMin;

    /**
     * @ORM\Column(type="integer")
     */
    private $quantityMax;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nameCaviar;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCaviar(): ?CaviarProduct
    {
        return $this->caviar;
    }

    public function setCaviar(?CaviarProduct $caviar): self
    {
        $this->caviar = $caviar;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getQuantityMin(): ?int
    {
        return $this->quantityMin;
    }

    public function setQuantityMin(int $quantityMin): self
    {
        $this->quantityMin = $quantityMin;

        return $this;
    }

    public function getQuantityMax(): ?int
    {
        return $this->quantityMax;
    }

    public function setQuantityMax(int $quantityMax): self
    {
        $this->quantityMax = $quantityMax;

        return $this;
    }

    public function getNameCaviar(): ?string
    {
        return $this->nameCaviar;
    }

    public function setNameCaviar(string $nameCaviar): self
    {
        $this->nameCaviar = $nameCaviar;

        return $this;
    }
}
