<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210531092310 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE shopping_cart (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, INDEX IDX_72AAD4F6A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE shopping_cart_caviar_product (shopping_cart_id INT NOT NULL, caviar_product_id INT NOT NULL, INDEX IDX_DA6AFD4245F80CD (shopping_cart_id), INDEX IDX_DA6AFD422EC8A468 (caviar_product_id), PRIMARY KEY(shopping_cart_id, caviar_product_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE shopping_cart_basket_product (shopping_cart_id INT NOT NULL, basket_product_id INT NOT NULL, INDEX IDX_FD5B0B1545F80CD (shopping_cart_id), INDEX IDX_FD5B0B155403DA7B (basket_product_id), PRIMARY KEY(shopping_cart_id, basket_product_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE shopping_cart_accessories_product (shopping_cart_id INT NOT NULL, accessories_product_id INT NOT NULL, INDEX IDX_5FB7666245F80CD (shopping_cart_id), INDEX IDX_5FB766621236140C (accessories_product_id), PRIMARY KEY(shopping_cart_id, accessories_product_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE shopping_cart ADD CONSTRAINT FK_72AAD4F6A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE shopping_cart_caviar_product ADD CONSTRAINT FK_DA6AFD4245F80CD FOREIGN KEY (shopping_cart_id) REFERENCES shopping_cart (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE shopping_cart_caviar_product ADD CONSTRAINT FK_DA6AFD422EC8A468 FOREIGN KEY (caviar_product_id) REFERENCES caviar_product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE shopping_cart_basket_product ADD CONSTRAINT FK_FD5B0B1545F80CD FOREIGN KEY (shopping_cart_id) REFERENCES shopping_cart (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE shopping_cart_basket_product ADD CONSTRAINT FK_FD5B0B155403DA7B FOREIGN KEY (basket_product_id) REFERENCES basket_product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE shopping_cart_accessories_product ADD CONSTRAINT FK_5FB7666245F80CD FOREIGN KEY (shopping_cart_id) REFERENCES shopping_cart (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE shopping_cart_accessories_product ADD CONSTRAINT FK_5FB766621236140C FOREIGN KEY (accessories_product_id) REFERENCES accessories_product (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE shopping_cart_caviar_product DROP FOREIGN KEY FK_DA6AFD4245F80CD');
        $this->addSql('ALTER TABLE shopping_cart_basket_product DROP FOREIGN KEY FK_FD5B0B1545F80CD');
        $this->addSql('ALTER TABLE shopping_cart_accessories_product DROP FOREIGN KEY FK_5FB7666245F80CD');
        $this->addSql('DROP TABLE shopping_cart');
        $this->addSql('DROP TABLE shopping_cart_caviar_product');
        $this->addSql('DROP TABLE shopping_cart_basket_product');
        $this->addSql('DROP TABLE shopping_cart_accessories_product');
    }
}
