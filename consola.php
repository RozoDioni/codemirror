<?php 
	include 'vendors/autoload.php';
	use vendors\consola\consola;
//consolaphp=true activo ya me toca ejecutar consola php y enviarle por defecto true para que la clase me ejecuta el codigo para abrir
	//consola php o consola solo en el directorio que le pido
	if(array_key_exists('path', $_REQUEST) && array_key_exists("consolaphp", $_REQUEST)){
		$path = $_REQUEST['path'];
		$consolaphp = $_REQUEST['consolaphp'];
	$consola = new consola($path,$consolaphp);
	}else{
		echo 'la consola no habre sin path';
	}
 ?>
