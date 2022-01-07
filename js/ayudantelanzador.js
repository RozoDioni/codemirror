//function para un helpers ayudante parecido al lanzador de ubuntu muestra los atajos de teclado proceso en construcion

function primero(){
	return r(`
		<div class="visible" id="lanzador1">
			<form>
			<abbr title="activar"><input checked="true" type="checkbox" name="ocultarme" class="checkbox"/></abbr>
			<abbr title="explorador"><input checked="true" type="checkbox" name="mostrarinter" class="mostrarinter"/></abbr>
			<abbr title="resultadovista"><input checked="true" type="checkbox" name="resultadovistabtn" class="resultadovistabtn"/></abbr>
			<abbr title="codemirrorconsola"><input checked="true" type="checkbox" name="codemirrorconsolabtn" class="codemirrorconsolabtn"/></abbr>
			<abbr title="barra de navegacion"><input checked="true" type="checkbox" name="navmenpes" class="navmenpes"/></abbr>
			<abbr title="maestrojs o librerias separadas"><input checked="true" type="checkbox" name="maestrojs" class="maestrojs"/></abbr>
			</form>
			<div>
				<h1>metodos que uso para esta app</h1>
				<ul>
					<li>draganddrop</li>
					<li>editor interactivo</li>
					<li>insertarimamovible</li>
					<li onclick="fnnota()">lanzar una nota</li>
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
			#lanzador1{
				right: 25%;
				width: 50%;
				height: 40%;
				background: #a4585882;
				position: absolute;
				top: 0;
				z-index: 999;
				color: white;
				text-shadow: 2px 3px 4px black;
			}
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
				stroke-width:6.63944;
				  }
			imagenesmovibles.fil0 {
				fill:none
				  }
		</style>
		</div>
		`)

}
window.ayudantes = {uno:0,contador:0};
function retornarvi(vi){
	return vi=='visible'?'oculto':'visible';
}
document.onkeydown = function(e){
	if(e.keyCode == 49){
			if(ayudantes.uno==0){
		ayudantes.primero = primero();
		/****form tiene todos los input dentro de el*****/
		ayudantes.form = ayudantes.primero.querySelector('form').elements;
		ayudantes.number = ayudantes.primero.querySelector('.number');
		let checkbox = ayudantes.checkbox = ayudantes.form.ocultarme;
		let mostrarinter = ayudantes.form.mostrarinter;
		let codemirrorconsolabtn = ayudantes.form.codemirrorconsolabtn;
		let navmenpes = ayudantes.form.navmenpes;
			checkbox.checked = true;
			checkbox.addEventListener('change',function(){
				let vi= this.checked==true ? 'visible':'oculto';
				
					ayudantes.primero.setAttribute('class',vi);
				
			})
			mostrarinter.addEventListener('change',function(){
				let vi= this.checked==true ? 'visible':'oculto';
					document.querySelector('#contenedor-de-interfaces').setAttribute('class',vi)
			})
		ayudantes.form.resultadovistabtn.addEventListener('click',function(){
				let vi= this.checked==true ? 'visible':'oculto';
					document.querySelector('#resultadovista').setAttribute('class',vi);
		});
		ayudantes.form.codemirrorconsolabtn.addEventListener('change',function(){
			let vi= this.checked==true ? false:true;
			let checked = this.checked;
			let ele = document.querySelector('#codemirrorconsola');
				ele.classList.remove('visible'+vi);
				ele.classList.add('visible'+checked);
				ele.classList.add('formvisible');
		});
		ayudantes.form.navmenpes.addEventListener('change',function(){
			let editorestodo = document.querySelector('#editores-todo');
			let vi= this.checked==true ? false:true;
			let checked = this.checked;
			let arr = ['.navegar','.config','.pestanas'];
				arr.forEach(function(a){
					console.log(editorestodo.querySelector(a))
					let b=editorestodo.querySelector(a)
						b.classList.remove('visible'+vi);
						b.classList.add('visible'+checked);
				})
				
		});
		ayudantes.form.maestrojs.addEventListener('change',function(){
			let maestro = this.checked;
				maestro = {maestro};
				j=JSON.stringify(maestro);
			axios.post('maestrojs.php',`j=${j}`).then(function(response){
				console.log(response.data)
			})
		})

		ayudantes.number.addEventListener('change',function(){
			document.styleSheets[5].rules[0].style.zIndex= this.value;
		})
		document.body.append(ayudantes.primero);
	}else{
		let vi = retornarvi(ayudantes.primero.getAttribute('class'));
	}
	if(typeof ayudantes.primero=='object'){
		if(e.ctrlKey && e.keyCode==49){
			let vi = retornarvi(ayudantes.primero.getAttribute('class'));
				ayudantes.checkbox.checked=ayudantes.checkbox.checked == true ? false :true;
			console.log(vi)
			ayudantes.primero.setAttribute('class',vi);
		}
	if(e.ctrlKey && e.keyCode==50){
		animaciontotal()
	}
	if(e.ctrlKey && e.keyCode==51){
		alert('borrame linea 163 de ayudantelanzador');
		fnnota();
	}
	}
	ayudantes.uno++;
	}

}

function insertarimamovibleinput(este,event){
		if(event.keyCode==13){
		ruta=este.value;
		insertarimagenmovible(ruta);
	}
	}
	function animarimagen(){
	if(imagenesinsertadas.img.firstChild.nodeName=='svg'){
		new Vivus(imagenesinsertadas.img.firstChild,{type:'oneByOne',duration:500})
	}
}
function animaciontotal(){
	animarimagen();
	codemirroranimada();
	ayudantes.form[3].click();
}