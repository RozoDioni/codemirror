CREATE TABLE `notas` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(50) NULL DEFAULT NULL,
	`nota` TEXT NULL,
	`top` CHAR(50) NULL DEFAULT NULL,
	`left` CHAR(50) NULL DEFAULT NULL,
	`fecha` TEXT NULL,
	PRIMARY KEY (`id`)
)
COMMENT='tabla para guardar las notas'
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
AUTO_INCREMENT=0
;
