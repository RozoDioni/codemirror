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
    
        <?php 
namespace vendors\unirarchivos;
        function showFiles($path){
    $dir = opendir($path);
    $acumulado = "";
    while ($current = readdir($dir)){
        if(validarArchivo($current)){
            $actual=file_get_contents('./css/'.$current);
            $acumulado.=$actual;
       }
       
    }
    $maestro = file_put_contents('./maestro.css', $acumulado);
    }
    
    function validarArchivo($actual){
        $expresion='/.css$/';
    return preg_match($expresion, $actual);
    }
showFiles('./css');
         ?>
    </body>
</html>
