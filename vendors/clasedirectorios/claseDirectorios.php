<?php 
namespace vendors\clasedirectorios;
use DirectoryIterator;

class claseDirectorios{
	public $path;

	public $iterador;

	public $carpetas = [];

	public $archivos = [];

	function __construct($path = './') {
        $this->path = $path;
		$this->iterador = new DirectoryIterator($path);
		$iterador = $this->iterador;
		foreach ($iterador as $fileinfo) {
			$c = $fileinfo->getPathname();
   if(is_dir($c)){
   			$carpeta = [];
   			array_push($carpeta, $c);
   			array_push($carpeta, $fileinfo->getfilename());
			array_push($this->carpetas, $carpeta);

	   }else{
	   		$file = [];
	   		array_push($file, $c);
	   		array_push($file, $fileinfo->getfilename());
	   		array_push($this->archivos, $file);
	   }

	}

	}
	

	public function showFiles(){
		asort($this->carpetas);
		asort($this->archivos);
	foreach ($this->carpetas as $value) {
		$template = <<<eot
            <li 
            class="carpeta" 
            onclick="recargardirectorio(getAttribute('path'))" 
            path="{$value[0]}">
            <span class="ico carver"></span>
            <span class='file'>{$value[1]}</span>
            </li>\n 
eot;
echo $template;
	}
	//onclick="cargarencodemirror(this)" para colocar en la linea vacia de abajo
	foreach ($this->archivos as $value) {
		$template = <<<eot
            <li 
            path="{$value[0]}"
            class="lista"
            style="color:black;"
            
            ><span>{$value[1]}</span>
            </li>\n 	
eot;
echo $template;
	}
   }

}

 ?>