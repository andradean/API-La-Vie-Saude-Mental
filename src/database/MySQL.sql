-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema LaVieDataBase
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema LaVieDataBase
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `LaVieDataBase` DEFAULT CHARACTER SET utf8 ;
USE `LaVieDataBase` ;

-- -----------------------------------------------------
-- Table `LaVieDataBase`.`pacientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LaVieDataBase`.`pacientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(245) NOT NULL,
  `email` VARCHAR(245) NOT NULL,
  `idade` DATE NOT NULL,
  `createdAt` DATE NULL,
  `updatedAt` DATE NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email:_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `LaVieDataBase`.`psicologos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LaVieDataBase`.`psicologos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(245) NOT NULL,
  `email` VARCHAR(245) NOT NULL,
  `senha` VARCHAR(245) NOT NULL,
  `aprentacao` VARCHAR(2000) NOT NULL,
  `createdAt` DATE NULL,
  `updatedAt` DATE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `LaVieDataBase`.`atendimentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LaVieDataBase`.`atendimentos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data_atendimento` DATETIME NOT NULL,
  `observacao` VARCHAR(2000) NOT NULL,
  `createdAt` DATE NULL,
  `updatedAt` DATE NULL,
  `pacientes_id` INT NOT NULL,
  `psicologos_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_atendimentos_pacientes_idx` (`pacientes_id` ASC) VISIBLE,
  INDEX `fk_atendimentos_psicologos1_idx` (`psicologos_id` ASC) VISIBLE,
  CONSTRAINT `fk_atendimentos_pacientes`
    FOREIGN KEY (`pacientes_id`)
    REFERENCES `LaVieDataBase`.`pacientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_atendimentos_psicologos1`
    FOREIGN KEY (`psicologos_id`)
    REFERENCES `LaVieDataBase`.`psicologos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
