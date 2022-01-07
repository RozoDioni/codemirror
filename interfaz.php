<div class="interfaz">
<?php 
include './vendors/autoload.php';
use vendors\clasedirectorios\claseDirectorios as b;
			$anterior = array_key_exists('anterior', $_REQUEST) ? $_REQUEST['anterior'] : "./	";
			$url = array_key_exists('url', $_REQUEST) ? $_REQUEST['url'] : "";

		if(array_key_exists('path',$_REQUEST))
			{	
				$path= $_REQUEST['path'] == "" ? "./" : $_REQUEST['path'];
			}
		else{
			$path = './';
		}
		if(array_key_exists('plusdir',$_REQUEST)){
			if($_REQUEST['plusdir']!=""){
				$plusdir = $_REQUEST['plusdir'];
				chdir($path);
				mkdir($plusdir);

			}
		}
		
 ?>
			<li class="dir-actual">Directorio Actual</li>
		<div id='navegador'>
		<input class="form-control" type="text" id="directorio" name="directorio" onkeyup="ir(this,event)" value="<?php echo $path; ?>" placeholder="eje c:\">
		<span onclick="recargardirectorio(this.previousElementSibling.value)" class="ico flevd"></span>
		<span onclick="crearDirectorio()" class="ico plus"></span>
		<span onclick="abrirruta()" class="ico carhor"></span>
		</div>
		<div class="flechas">
		<div
		url="<?php echo $url;?>"
		onclick="recargardirectorio(this.getAttribute('url'))">
		<span class="ico flebd"></span>
		</div>
		
		<div
		url="<?php echo $anterior;?>"
		onclick="recargardirectorio(this.getAttribute('url'))">
		<span class="ico flebi"></span>
		</div>
		</div>
		
		<div id="boxfile">
		<ul>
			<?php 
			 	$b = new b($path);
				$b->showFiles(); 
			 ?>
		</ul>
		</div>
</div>		
		<?php if(isset($interfazfile)): ?>
  <!-- los archivos de interfaz se cargan automaticamente desde maestrojs -->

<?php else: ?>
    <script>
		function nada(){
			alert('yo soy la func nada y cargo dos elementos');
			console.log(this)
		}
		configclick = {"#boxfile .lista>span":nada,"#boxfile .lista":nada,".carpeta":nada};
		click.cambiarconfigclick(configclick);
		
	</script>
<?php endif; ?>
	
