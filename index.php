<!DOCTYPE html>
	<html lang="es">
	<head>
			<meta charset="utf-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">	
			<title>editor codemirrornuevo</title>
			<!-- <script src="resource/script.js"></script> -->
			<link rel="stylesheet" href="css/maestro.css">
			<!-- maestro.js tiene todos los archivos; las dependencias estan en dep.json en documen root ejecutar uniondep.php desde la consola interactiva de php y las ejecutar unionjs() unioncss() -->
			<!-- <script src="js/maestro.js"></script> -->
			<?php include_once 'getconfigjs.php'; ?>
	</head>
	<body>
							<!-- /****************el editor**************************/ -->
		<div id="editores-todo">
			<?php include './plantillas/tema.php'; ?>
		
			<ul class="pestanas visibletrue">
				<!-- pesta;a principal del editor codemirror para separar los editores -->
				<li id='principal' 
					class='selecte' 
					path="./" 
					contentEditable="false" 
					valor="0" 
					onclick="mostrar(this)" 
					ondblclick="editar(event,this)" 
					onkeyup="pestanaGuardar(event,this,this.textContent)">principal
				</li>
				<!-- etiqueta +mas para crear mas pesta;as con sus respectivo editor -->
			<li id="mas" onclick="mas(this)"><span class="ico plus"></span></li>
			</ul>
				<!-- contenedor de los editores  -->
		<div class="anchura" id='editores'>
				<!-- primer editor vendria siendo la etiqueta que almacena el primer editor -->
			<div valor="0" id="editor0" class='editor mostrar'></div>
		</div>
				<!-- consola interactiva que interactua con el editor que este actual -->
				
		<div>
			<input id="codemirrorconsola" 
					class='form-control visibletrue' 
					type="text" 
					name="" 
					value="" 
					onkeypress="evaluar(this,event)" 
					placeholder="escribe un comando aqui" 
					ondrop="console.log(this.value)"
			>
			<script src="js/consola.js"></script>
		</div>
			<!-- appconsola que muestra la lista de funciones variables del objeto trozos en consola vue
				 e interactua con codemirror mostrando el codigo -->
		<div id="appconsola">
			<input  placeholder="escribe un comando" 
					id="question" 
					v-model="question" 
					class='form-control' 
					type="text" name="consola" 
					onkeypress="inscomando(this,event)"
    				placeholder="escribe un comando aqui"
    		>
    		<div class="listadecomandospadre">
    		<div class="listadecomandos" v-show="mostrar">
				<li  onclick="inscomando2(this,event)" v-for="i in res">{{i}}</li>
    		</div>
    		</div>
		</div>
		<script src="js/consolavue.js"></script>
				<!-- resultado vista este es un frame que se usa para mostrar el resultado de la vista en el editor -->
		<div class="anchura" id='resultadovista'>
			<iframe id='frame' src=""></iframe>
		</div>
		</div>
				<!-- /****************el editor end**************************/ -->
			<!-- interfaz2.php es un explorador de archivos que va actuar con el editor codemirror -->
			<?php $interfazfile=true;include('./interfaz2.php'); ?>
		<script src="js/editores.js"></script>
		
		<script>
		//configuarar objeto que se utiliza en el menu contextual para aplicar la funcion a los selectores descritos en el script menucontextual que esta en maestro js
		configurar = {".pestanas>.selecte":[del,cargarmodojs],
					  ".pestanas>.noselecte":[del],
					  "li.lista":[abrirensublime,abrirruta,mostrarrutacompleta],
					  "li.carpeta":[abrirruta],
					  ".imagenesmovibles":[borrarnodo],
					  '#resultadovista':[inidrag],
					  '.escalera':[inidrag]
					 }
		//configclick para ayudante de click en el dom con la libreria clickparatodos.js
		configclick = {"#boxfile .lista>span":cargarencodemirror,"#boxfile .lista":cargarencodemirror};
		click.cambiarconfigclick(configclick);
		//funcion que se usa para cargar los archivos via ajax en el editor codemirror actual
		function cargarencodemirror(){
  			file = this.getAttribute('path')||this.parentElement.getAttribute('path');
  			directorioarchivo = file;
  			arrpath = file.split('\\');
  			nombredearchivo = arrpath.pop();
  			directorio = arrpath.join('\\');
  			pestanactual.textContent = this.textContent;
 			pestanactual.setAttribute('path',file);
  			cargarplantillas(file).then(function(data){
  			codemirroractual.setValue(data);
  			  viewindow()
			
  			})
			}
		</script>
		
	</body>
</html>
