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
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="shoppingCarts",cascade={"persist"})
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

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $caviarQuantity;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $basketQuantity;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $accessoriesQuantity;

    /**
     * @ORM\ManyToOne(targetEntity=UserAnonymous::class, inversedBy="shoppingCartsAnonymous",cascade={"persist"})
     */
    private $userAnonyme;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $caviarName;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $basketName;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $accessoriesName;

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

    public function getCaviarQuantity(): ?int
    {
        return $this->caviarQuantity;
    }

    public function setCaviarQuantity(int $caviarQuantity): self
    {
        $this->caviarQuantity = $caviarQuantity;

        return $this;
    }

    public function getBasketQuantity(): ?int
    {
        return $this->basketQuantity;
    }

    public function setBasketQuantity(int $basketQuantity): self
    {
        $this->basketQuantity = $basketQuantity;

        return $this;
    }

    public function getAccessoriesQuantity(): ?int
    {
        return $this->accessoriesQuantity;
    }

    public function setAccessoriesQuantity(?int $accessoriesQuantity): self
    {
        $this->accessoriesQuantity = $accessoriesQuantity;

        return $this;
    }

    public function getUserAnonyme(): ?UserAnonymous
    {
        return $this->userAnonyme;
    }

    public function setUserAnonyme(?UserAnonymous $userAnonyme): self
    {
        $this->userAnonyme = $userAnonyme;

        return $this;
    }

    public function getCaviarName(): ?string
    {
        return $this->caviarName;
    }

    public function setCaviarName(string $caviarName): self
    {
        $this->caviarName = $caviarName;

        return $this;
    }

    public function getBasketName(): ?string
    {
        return $this->basketName;
    }

    public function setBasketName(string $basketName): self
    {
        $this->basketName = $basketName;

        return $this;
    }

    public function getAccessoriesName(): ?string
    {
        return $this->accessoriesName;
    }

    public function setAccessoriesName(string $accessoriesName): self
    {
        $this->accessoriesName = $accessoriesName;

        return $this;
    }
}
