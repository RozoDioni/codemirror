<?php
namespace vendors\mostrarsolountipodearchivo;
use DirectoryIterator;
class mostrararchivoConExtencion{
	public $path;
	public $request;
	public $iterador;
	public $carpetas=[];

	public $archivosvalidados =[];

	public function validarArchivo($actual,$ext){
        $ext = <<<eot
        /{$ext}$/
eot;
    return preg_match($ext, $actual);
    }

	function __construct($path,$ext) {
		$this->path = $path;
		if($_REQUEST){
			$this->request=$_REQUEST;
		}
		$this->iterador = new DirectoryIterator($path);
		$iterador = $this->iterador;
		foreach ($iterador as $fileinfo) {
			$c = $fileinfo->getPathname();
   if(is_file($c)){
   			if($this->validarArchivo($c,$ext)){
			array_push($this->carpetas, $fileinfo->getfilename());
		}
	   }
	}
		
	}
}

 ?>