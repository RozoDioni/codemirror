<?php 
namespace vendors\classnotas;
class lecctordeNotas extends patronesNotas{

		public function cargarArchivo($file){
		$this->file = file($file);
	}
	
		public function regresarHTML($casos,$lineaactual){

		foreach ($casos as $key=>$value) {
			if(stristr($lineaactual,$value)){
				$lineaactual = str_ireplace($value, "", $lineaactual);
			switch ($value) {
				case 'p>':
					return $this->p($lineaactual);
					break;
				case 'img>':
					return $this->img($lineaactual);
					break;
				case 'a>':
					return $this->a($lineaactual);
					break;
				default:
					# code...
					break;
			}
				 
			}}
		}

			function __construct() {
				if (isset($_REQUEST['file'])){
				$this->cargarArchivo($_REQUEST['file']);

				foreach ($this->file as $linea => $lineaactual) {
						echo $this->regresarHTML($this->casos,$lineaactual);
				}
			}
			}
}
		

 ?>