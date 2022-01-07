<?php 
if(isset($_REQUEST['nombrearchivo'])){
	$nombre_archivo = $_REQUEST['nombrearchivo'];
	echo file_get_contents($nombre_archivo);
}else{
	echo 'no se pudo cargar el archivo';
}

 ?>