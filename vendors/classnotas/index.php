<?php spl_autoload_register(); ?>
<!DOCTYPE html>
<html>
<head>
	<title>Interprete de notas</title>
	<style>
	body{
		margin:0;padding: 0;
	}
	.notas{
		margin: auto;
		width: 700px;
		border:2px solid;
	}
	</style>
</head>
<body>
<div class="notas">
	<?php 
	echo "<h1>app notas</h1>";
	/*version 0.0.1*/
	//despues de combertir las notas a un array hay que dividir el array en otros array para
	//poder comparar el contenido con la linea y asi combertirlo en HTML
	$casos = ['h1>'=>['<h1>','</h1>'],
			  'h2>'=>['<h2>','</h2>'],
			  'h3>'=>['<h3>','</h3>'],
			  'p>'=>['<p>','</p>'],
			  'img>'=>['<img>','</img>'],
			  'li>'=>['<li>','</li>']];

	function regresarHTML($casos,$linea){
		foreach ($casos as $key => $value) {
			if(stristr($linea,$key)){
				return 
					$value[0].
					trim($linea,$key).
					$value[1];
				 
			}}}

	$file2 = file('1.txt');
	foreach ($file2 as $key => $value) {
		//str_ireplace("\\","-",$value);
		echo regresarHTML($casos,$value);
	}
	
	 ?>
	<?php $a = new lecctordeNotas();?>
</div>

</body>
</html>