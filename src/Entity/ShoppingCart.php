<?php

namespace App\Entity;

use App\Repository\ShoppingCartRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ShoppingCartRepository::class)
 */
class ShoppingCart
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="shoppingCarts")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\ManyToMany(targetEntity=CaviarProduct::class, inversedBy="shoppingCarts")
     */
    private $caviarProduct;

    /**
     * @ORM\ManyToMany(targetEntity=BasketProduct::class, inversedBy="shoppingCarts")
     */
    private $basketProduct;

    /**
     * @ORM\ManyToMany(targetEntity=AccessoriesProduct::class, inversedBy="shoppingCarts")
     */
    private $accessoriesProduct;

    public function __construct()
    {
        $this->caviarProduct = new ArrayCollection();
        $this->basketProduct = new ArrayCollection();
        $this->accessoriesProduct = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection|CaviarProduct[]
     */
    public function getCaviarProduct(): Collection
    {
        return $this->caviarProduct;
    }

    public function addCaviarProduct(CaviarProduct $caviarProduct): self
    {
        if (!$this->caviarProduct->contains($caviarProduct)) {
            $this->caviarProduct[] = $caviarProduct;
        }

        return $this;
    }

    public function removeCaviarProduct(CaviarProduct $caviarProduct): self
    {
        $this->caviarProduct->removeElement($caviarProduct);

        return $this;
    }

    /**
     * @return Collection|BasketProduct[]
     */
    public function getBasketProduct(): Collection
    {
        return $this->basketProduct;
    }

    public function addBasketProduct(BasketProduct $basketProduct): self
    {
        if (!$this->basketProduct->contains($basketProduct)) {
            $this->basketProduct[] = $basketProduct;
        }

        return $this;
    }

    public function removeBasketProduct(BasketProduct $basketProduct): self
    {
        $this->basketProduct->removeElement($basketProduct);

        return $this;
    }

    /**
     * @return Collection|AccessoriesProduct[]
     */
    public function getAccessoriesProduct(): Collection
    {
        return $this->accessoriesProduct;
    }

    public function addAccessoriesProduct(AccessoriesProduct $accessoriesProduct): self
    {
        if (!$this->accessoriesProduct->contains($accessoriesProduct)) {
            $this->accessoriesProduct[] = $accessoriesProduct;
        }

        return $this;
    }

    public function removeAccessoriesProduct(AccessoriesProduct $accessoriesProduct): self
    {
        $this->accessoriesProduct->removeElement($accessoriesProduct);

        return $this;
    }
}
