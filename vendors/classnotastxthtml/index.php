<!DOCTYPE html>
	<html lang="es">
	<head>
			<meta charset="utf-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">	
			<title></title>
			<link rel="stylesheet" href="">
	</head>
	<body>
		 <form action="index.php" method="POST" accept-charset="utf-8">
 	<input type="text" name="file" value="" placeholder="">
 	<input type="submit" name="" value="enviar">
 </form>
 <?php 
spl_autoload_register();
use requestclass\request;
use txthtml\txtHtml;
$palabra=new request();
$interprete = new txtHtml();
$interprete->mostrar($palabra);

 ?>

	</body>
</html>