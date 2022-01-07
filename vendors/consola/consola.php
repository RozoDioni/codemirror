<?php
namespace vendors\consola;
class consola{
	public $path = "";
	function __construct($path = './',$consolaphp) {
		chdir($path);
		if($consolaphp=='true'){
		exec('start phpmode');
		exec('phpmode');
		

		echo 'phpmode';
	}else{
		exec('start');
		echo 'cmdmode';
	}
	}
	
}


 ?>