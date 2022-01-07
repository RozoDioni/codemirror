<?php 
namespace vendors\classnotas;

class patronesNotas{
		public $casos = ['p>','img>','li>','a>'];

		public function li($linea){
		$li =	<<<eot
			<li>$linea</li>
eot;
	return $li;
}
		public function p($linea) { 	
			echo $linea;
		$p=<<<eot
				<p>$linea</p>
eot;
	return $p;
}
		public function img($linea){
		 $img = <<<eot
		 		<img src="{$linea}"><img>
eot;
	return $img;
}

		public function a($linea){
			$linea = explode("=",$linea);
		 	$a=<<<eot
		 	<a href="$linea[0]">$linea[1]</a>
eot;
	return $a;
}
		public function encabezados($linea){
		 $encabezado = ['h1','h2','h3','h4','h5','h6'];
}
}

 ?>