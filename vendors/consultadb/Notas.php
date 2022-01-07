<?php 
namespace vendors\consultadb;

class Notas extends DBAbstractModel {
	##############propiedades##################
	public $nombre;
	public $resultado;
	public $apellido;
	public $email;
	private $clave;
	public $id;
	
	public function get($id=1){
		$this->query = "
				SELECT * from ingles where id=$id;
				";
				$this->get_results_from_query();
				$this->resultado = $this->rows;
	}
	#Crear un nuevo usuario
	public function set($title="",$nota="",$top="",$left="") {
		$this->query = "
					INSERT INTO `ingles` (`title`, `nota`, `top`, `left`) VALUES ('$title', '$nota', '$top', '$left');
 					";
					$this->execute_single_query();
	}
	#modificar usuario
	public function edit($id="",$title="",$nota="",$top="",$left="") {
			$this->query= "
			UPDATE `ingles` SET `title`='$title', `nota`='$nota', `top`='$top', `left`='$left' WHERE `id`=$id;
				";
			$this->id=$id;
			$this->execute_single_query();

	}
	#Eliminar un usuario
	Public function delete() {
		
	}
}
 ?>