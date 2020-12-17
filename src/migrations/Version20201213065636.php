<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20201213065636 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('
            CREATE TABLE user (
                id INT AUTO_INCREMENT NOT NULL, 
                email VARCHAR(180) NOT NULL, 
                roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', 
                password VARCHAR(255) NOT NULL, 
                verified TINYINT(1) NOT NULL, 
                google_verified TINYINT(1) NOT NULL, 
                created_on DATETIME NOT NULL, 
                is_verified TINYINT(1) NOT NULL, 
                UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), 
                PRIMARY KEY(id)
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
            '
        );
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE user');
    }
}
