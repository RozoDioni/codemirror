<?php 
namespace vendors\NOTAS;

class Notas extends DBAbstractModel {
	##############propiedades##################
	public $nombre;
	public $resultado;
	public $apellido;
	public $email;
	private $clave;
	public $id;
	
	public function create(){
		$this->query = file_get_contents('vendors\NOTAS\notas.sql');
$this->execute_single_query();
	}

	public function get($id=1){
		$this->query = "
				SELECT * from notas where id=$id;
				";
				$this->get_results_from_query();
				$this->resultado = $this->rows;
	}
	#Crear un nuevo usuario
	public function set($title="",$nota="",$top="",$left="",$fecha="",$etiqueta="agenda") {
		$this->query = "
					INSERT INTO `notas` ( `title`, `nota`, `top`, `left`, `fecha`,`etiqueta`) VALUES ( '$title', '$nota', '$top', '$left', '$fecha','$etiqueta')
 					";
					$this->execute_single_query();
	}
	#modificar usuario
	public function edit($id="",$title="",$nota="",$top="",$left="",$fecha="") {
			$this->query= "
			UPDATE `notas` SET `title`='$title', `nota`='$nota', `top`='$top', `left`='$left', `fecha`='$fecha' WHERE  `id`=$id;
				";
			$this->id=$id;
			$this->execute_single_query();

	}
	#Eliminar un usuario
	Public function delete() {
		
	}
	Public function etiquetas() {
		$this->query = "
		SELECT etiqueta from etiquetas;
		";
		$this->get_results_from_query();
		$this->resultado = $this->rows;
	}
}
 ?>