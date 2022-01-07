<?php 
	$j = json_decode($_REQUEST['j']);
	$file= file_get_contents($j->pathservidor);
	$file = json_encode($j);
	echo $file;
	
 ?>