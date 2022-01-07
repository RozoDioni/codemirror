<?php 
$abrir = $_GET['ruta'] ? $_GET['ruta'] : '%cd%';
exec('explorer '.$abrir);//si sistem is windows
exec('nautilus '.$abrir);//si sitem es es ubuntu linux
echo $abrir;
 ?>
