<?php 
namespace vendors\consultadb;

class Usuario extends DBAbstractModel {
	##############propiedades##################
	public $nombre;
	public $apellido;
	public $email;
	private $clave;
	protected $id;
	
	public function get($email='ice34l'){
		if($email != '') {
			$this->query = "
				SELECT  id, nombre, apellido, email, clave
				FROM 	usuarios
				WHERE 	email = '$email'
				";
				$this->get_results_from_query();
		}

		if(count($this->rows) == 1){
			foreach ($this->rows[0] as $propiedad=>$valor) {
				$this->$propiedad = $valor;
			}
			$this->mensaje = 'Usuario encontrado';
		} else {
			$This->mensaje = 'Usuario no encontrado';
		}
	}
	#Crear un nuevo usuario
	public function set($user_data=array()) {
		if(array_key_exists('email',$user_data)) {
			$this->get($user_data['email']);
			if($user_data['email'] != $this->email) {
				foreach ($user_data as $campo=>$valor) {
					$$campo = $valor;
				}
				$this->query= "
					INSERT INTO usuarios
					(nombre, apellido, email, clave)
					VALUES
					('$NOMBRE', '$apellido', '$email', '$clave')
					";
					$this->execute_single_query();
					$this->mensaje = 'Usuario agregado exitosamente';

			} else {
				$this->mensaje = 'El usuario ya existe';
			}
		} else {
			$this->mensaje = "No se ha agregado al usuario";
		}
	}
	#modificar usuario
	public function edit($user_data=array()) {
		foreach ($user_data as $campo=>$valor) {
			$$campo = $valor;
		}
		$this->query = "
				UPDATE 	usuarios
				SET 	nombre='$nombre',
						apellido='$apellido'
				WHERE 	email = '$email'
				";
		$this->execute_single_query();
		$this->mensaje = 'Usuario modificado';

	}
	#Eliminar un usuario
	Public function delete($user_email="") {
		$this->query = "
		DELETE FROM usuarios
		WHERE 	email = '$user_email'
		";
		$this->execute_single_query();
		$this->mensaje = 'Usuario eliminado';
	}
}
 ?>