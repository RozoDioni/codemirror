			<?php 

$uri = $_SERVER['REQUEST_URI'];

$peticiones = array('sublime','abrir','consola');
$j=json_decode($_REQUEST['j']);

foreach ($peticiones as $peticion) {
		if( strpos($uri, $peticion) == true ) {
			$event = $peticion;
		}
	}

	switch($event) {
		case 'sublime':
			$realfile = realpath($j->file) . PHP_EOL;
// 			$realfile = <<<EOT
// 			"$realfile"
// EOT;
// 			$realfile = trim($realfile);
			exec('cd /opt/sublime_text_3 && ./sublime_text '.$realfile);
			break;
		case 'abrir':
			$carpeta=$j->carpeta;
			exec('explorer '."\'$carpeta\'");//si sistem is windows
			exec('nautilus '.$carpeta);//si sitem es es ubuntu linux
			echo $carpeta;
			break;
		case 'consola':
			
			var_dump($_REQUEST);
			break;

		default:
			
	}
	
 ?>