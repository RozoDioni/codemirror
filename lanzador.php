<div class="visible" 
				style="
					right: 25%;
					width: 50%;
					height:40%;
					background: red;
					position: absolute;
					top: 0;
					z-index: 999;"
		>
			<form>
			<abbr title="activar"><input checked="true" type="checkbox" name="ocultarme" class="checkbox"/></abbr>
			<abbr title="explorador"><input checked="true" type="checkbox" name="mostrarinter" class="mostrarinter"/></abbr>
			<abbr title="resultadovista"><input checked="true" type="checkbox" name="resultadovistabtn" class="resultadovistabtn"/></abbr>
			<abbr title="codemirrorconsola"><input checked="true" type="checkbox" name="codemirrorconsolabtn" class="codemirrorconsolabtn"/></abbr>
			<abbr title="barra de navegacion"><input checked="true" type="checkbox" name="navmenpes" class="navmenpes"/></abbr>
			</form>
			form
			<div>
				<h1>lista de todos los metodos que uso para esta app</h1>
				<ul>
					<li>draganddrop</li>
					<li>editor interactivo</li>
					<li>insertarimamovible</li>
					<input type="text" name="insertarimamovible" 
					onkeydown="insertarimamovibleinput(this,event)">
					<input class="number"
						   type="number" 
						   value="8" 
						   min="4" 
						   max="10" 
						   style="width:50px;border:none;"
					>
				</ul>
			</div>
		<style>
			.imagenesmovibles{
					z-index:8;
					resize: both;
					overflow: auto;
				}
			.imagenesmovibles>img{
				width:100%;
			}
			.imagenesmovibles>svg{
				width:100%;
			}
			.visible{
				visibility: visible;
				}

			.oculto{
  			 	visibility: hidden;
				}
			.visibletrue{
				visibility: visible;
				}

			.visiblefalse{
  			 	visibility: hidden;
				}
			.formvisible{
				position: sticky;
				z-index: 10;
			}

			.imagenesmovibles.str0 {
				stroke:#373435;
				stroke-width:6.63944
				  }
			imagenesmovibles.fil0 {
				fill:none
				  }
		</style>
		</div>