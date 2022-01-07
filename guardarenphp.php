<?php

	function validarArchivo($actual){
        $expresion='/.html$|.js$|.css$|.php$|.txt$|.svg$/';
    return preg_match($expresion, $actual);
    }

	$objeto=$_REQUEST['objeto'];
	
	$objeto = json_decode($objeto);
	if(validarArchivo($objeto->pestanactual)){
	file_put_contents($objeto->pestanactual, $objeto->valoreditor);
	}

		if(preg_match('/.html$|.php$/', $objeto->pestanactual)){
		echo $objeto->pestanactual;
	}
		if(preg_match('/notashtml.txt$/', $objeto->pestanaprincipal)){
			if($objeto->pestanaprincipal==$objeto->pestanactual)
		echo 'interpretarnotas.php?file='.$objeto->pestanaprincipal;
	}else{
		if(preg_match('/.txt$/', $objeto->pestanaprincipal)){
			
		echo $objeto->pestanaprincipal;
	}
}




 ?>