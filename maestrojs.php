<?php 
$j=$_REQUEST['j'];

file_put_contents('config.json', $j);
$checked= json_decode($j);
echo $j;

 ?>