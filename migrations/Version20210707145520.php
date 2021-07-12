<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210707145520 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE stock_caviar (id INT AUTO_INCREMENT NOT NULL, caviar_id INT DEFAULT NULL, quantity INT NOT NULL, quantity_min INT NOT NULL, quantity_max INT NOT NULL, UNIQUE INDEX UNIQ_9A691525C38198A1 (caviar_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE stock_caviar ADD CONSTRAINT FK_9A691525C38198A1 FOREIGN KEY (caviar_id) REFERENCES caviar_product (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE stock_caviar');
    }
}
