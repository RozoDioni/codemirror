<?php 
$config=file_get_contents('config.json');//configuracion que el cliente guardo con un checbox si es true carga solamente maestro.js
//el archivo maestro.js es construido con las dependencias de dep.json y ejecutadas con un include en la consola interactiva uniondep.php
$config=json_decode($config);
if($config->maestro==true){
	echo '<script src="js/maestro.js"></script>';
}else{
//dependencias cargadas del archivo dep.json para cargar las librerias de manera individual
$dep = json_decode(file_get_contents('dep.json'));
foreach ($dep->js as $key => $value) {
	echo "<script src=\"$value\"></script>";
}
}
 ?>