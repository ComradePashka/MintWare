-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `authority` VARCHAR(64) NOT NULL,
    `name` VARCHAR(64) NOT NULL,
    `description` VARCHAR(128) NOT NULL,
    `token_mint` VARCHAR(64) NOT NULL,
    `reward_percent` TINYINT NOT NULL DEFAULT 5,
    `tx` VARCHAR(128) NOT NULL,
    `tx_confirmed_at` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Referal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `authority` VARCHAR(64) NOT NULL DEFAULT '',
    `project_id` INTEGER NOT NULL,
    `url` VARCHAR(128) NOT NULL,

    INDEX `Referal_project_id_fkey`(`project_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Referal` ADD CONSTRAINT `Referal_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

