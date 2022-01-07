<style>img{width: 10%;}</style>
<h1>este es el archivo enruteador y el directorios es aparte</h1>
<p>subir archivos al servidor</p>
<form action="./" method="post" enctype="multipart/form-data">
<p>Imágenes:
<input type="file" name="imágenes[]" />
<input type="submit" value="Enviar" />
</p>
</form>
<?php
//extenciones validas para leer y redirigir 
if($_FILES){
foreach ($_FILES["imágenes"]["error"] as $clave => $error) {
    if ($error == UPLOAD_ERR_OK) {
        $nombre_tmp = $_FILES["imágenes"]["tmp_name"][$clave];
        // basename() puede evitar ataques de de negació del sistema de ficheros;
        // podría ser apropiado más validación/saneamiento del nombre de fichero
        $nombre = basename($_FILES["imágenes"]["name"][$clave]);
        move_uploaded_file($nombre_tmp, "$nombre");
    }
}
}
?>
<?php 

function txt($file){
    return "<p>".
        file_get_contents($file)."
        <a href=\"$file\">$file</a>
                </p>";
}

$condiciones = ['.mp3','.jpg','.txt'];
function retornarHTML($extencion,$file){
switch ($extencion) {
    case '.jpg':
     echo $file.'<br><hr>';
        return "<img src=\"$file\"></img>";
        break;
        
    case '.txt':
         echo $file.'<br><hr>';
        return txt($file);
        break;

    case '.mp3':
    echo $file.'<br><hr>';
    return "<audio controls>
  <source src=\"$file\" type=\"audio/mpeg\">
Your browser does not support the audio element.
</audio>";
    break;

    default:
        return "esta extencion aun no tiene un proposito";
        break;
}
}


function mostrar_archivos_segun_su_extencion_en_html($condiciones,$file){
foreach ($condiciones as $key => $value) {
        if(substr_count($file,$value)==1){
        echo retornarHTML($value,$file);
        }
    }
}


?>
<?php 
$d = dir(getcwd());
while (($file = $d->read()) !== false){

    //la siguiente funcion debe comparar la extencion de $file he interpretar que hacer con cada tipo de archivo
    //devo hacer una funcion interprete de archivo para saber que hacer con cada extencion si lo coloco como link de descarga o como nombre de archivo
    //recuerde que la app compartir solo esta funcionando para enviar archivos al servidor y todavia no funciona para el cliente lea y modifique los archivos
    //validar_extenciones($condiciones,$file);
    echo mostrar_archivos_segun_su_extencion_en_html($condiciones,$file)."<br>";
  //echo "<li><a href='$file'>$file</a></li>";
}
$d->close();    


 ?>
