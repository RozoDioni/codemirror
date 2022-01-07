			var ventana;
			var script;
			editores = document.querySelector('#editores');//selector del contenedor de editores
			cantidadeditores = "0"; //para enumerar de manera global los editores ejem editor1,editor2 y asi
			editorescodemirror = [];//contenedor de el objeto editor segun su contenedor
			editorescodemirror.push(CodeMirror(editores.children[0],config));//inicializacion del primer editor codemirror
			codemirroractual=editorescodemirror[0];
			pestanactual = pestanaprincipal = document.querySelector('#principal');
			pestanaprincipal.__proto__.path = directorio.value;
			
			
		function mas(este){//crea solo 4 editores ahi que colocar que se configure externamente
				if(cantidadeditores <=2){
				crearotro(este).then(function(data){
				editorescodemirror.push(CodeMirror(data,config));
			})
			}
		}

		function crearotro(este){
			directorio = s('#directorio');
			cantidadeditores++;
			li = `<li path="${directorio.value}" 
			class='noselecte' ondblclick="editar(event,this)" 
			valor="${cantidadeditores}" onclick="mostrar(this)" 
			onkeyup="pestanaGuardar(event,this,this.textContent)" 
			contentEditable="false">name</li>`;
			template=`
			<div valor="${cantidadeditores}" id='editor${cantidadeditores}' class='editor ocultar'></div>`;
			editor = r(template);
			li = r(li);
			li.__proto__.path=directorio.value;
			editores.append(editor);
			este.parentElement.insertBefore(li,este);

			return new Promise(function(resolve,reject){
				mostrar(este.previousSibling);
				resolve(editor);
			});

		}
		function del(){//function para eliminar pestana,editor,y codemirror generado aplicada con menu contextual a la pestana del editor
			let editores=document.querySelectorAll('.editor');
			console.log(this)
			this.previousSibling.className = 'selecte';
			cod = this.getAttribute('valor');
			this.remove();
			editores[cod].remove();
			editores[cod-1].className = 'editor mostrar selecte';
			delete editorescodemirror[cod];
		}
		function mostrar(este){
				console.log(arguments)
			let editores=document.querySelectorAll('.editor');
				window.pestanactual = este;
				este.parentNode.childNodes.forEach(function(ed){ed.className = 'noselecte'});
				este.className = 'selecte';
				este = este.getAttribute('valor');//aqui esta la posicion de la pesta;a con el editor que esta visible
  				editores.forEach(function(ed){ed.className = 'editor ocultar noselecte'});
  				editores[este].className = 'editor mostrar selecte';
  				codemirroractual = editorescodemirror[este];
		}

		/****************editar pestañas***************/
		/*esta funcion es la que va a cambiar el nombre de las pesta;as y guardar el contenido del editor con el nombre de la pesta;a*/
			function pestanaGuardar(event,este,principal=""){

		if(event.keyCode==13){
			este.__proto__.nombre = este.textContent.trim();
			este.textContent = este.textContent.trim();
			arrpath=este.path.split('/');
			arrpath.push(este.nombre);
			path = arrpath.join('/');
			este.setAttribute('contenteditable','false');
			este.setAttribute('path',path);
			//if(principal!=""){pestanaprincipal = principal;}
				
			
		}
	}
	function editar(event,este){
   					este.setAttribute('contenteditable','true');
   					este.click();
   					


			}
		/**************************************************************/

		
		/*function para seleccionar el thema del editor actual*/
		function selectTheme(input) {
          var theme = input.options[input.selectedIndex].innerHTML;
          codemirroractual.setOption("theme", theme);
        }
        
// mejorando guardarenphp con axios para reducir codigo
function guardarenphp(){
	let valoreditor  = codemirroractual.getValue();
	let	pestanactual = window.pestanactual.getAttribute('path').trim();
	let pestanaprincipal = window.pestanaprincipal.getAttribute('path').trim();
	let objeto = {valoreditor,pestanactual,pestanaprincipal};
	objeto=JSON.stringify(objeto);
	objeto=encodeURIComponent(objeto);
	axios.post('guardarenphp.php',`objeto=${objeto}`).then(function(response){
		let frame = document.querySelector('#frame');
            	frame.src=response.data;
	})
}

function viewindow(){
        	frame.src = pestanactual.getAttribute('path')
        }
        function viewindownew(event){
        	//if(event.ctrlKey==true){
		ventananueva = open("", "ventana nueva", "scrollbars=yes, resizable=yes, top=100, left=500, width=400, height=400");
		ventananueva.document.location.href = pestanactual.getAttribute('path')
		// }else{
		// 	ventananueva = open();
		// 	ventananueva.document.location.href = pestanactual.getAttribute('path')
		// }
	}

/*encabezado editor encima de las pesta;as*/
function abrirruta(ruta){
  let dir = s('#directorio').value;
  http = new XMLHttpRequest();

  http.open('get','abrir.php?ruta='+dir,false);
  http.send();
  console.log(http.response);
}

function abrirruta2(){
  let carpeta = s('#directorio').value;
  let j =JSON.stringify({carpeta});

	axios.post('explorer.php/abrir',`j=${j}`).then(function(response){
		console.log(response.data);
	})
}

function abrirensublime(){
	let file = pestanactual.getAttribute('path');
	let j =JSON.stringify({file});

	axios.post('explorer.php/sublime',`j=${j}`).then(function(response){
		console.log(response.data);
	})
}

  function crearDirectorio(){
    let plusdir=prompt('nombre del directorio');
    
    let dir = s('#directorio').value;
    console.log(dir,plusdir);
    cargardirectorio(dir,dir,plusdir).then((data)=>{
  boxfile = document.querySelector('#interfaz')||document.querySelector('body');
  boxfile.innerHTML = data;
  })
}

function cargardirectorio(path,anterior="",plusdir=""){
    return new Promise(function(resolve,reject){
      
       conexion = new XMLHttpRequest()
       conexion.open('post','interfaz.php');
       conexion.setRequestHeader("Content-type","application/x-www-form-urlencoded");
       conexion.onload = function(){
         if(this.status==200){
           resolve(this.response);
         }
        }
       conexion.send(`path=${path}&anterior=${anterior}&plusdir=${plusdir}`);
    })
}

/**************************************************************************************************
**********************************funciones para la consola*/

function consola(event){

  ruta = document.querySelector('#directorio');
  ruta = ruta.value;
  http = new XMLHttpRequest();  
  if(event.ctrlKey){
    http.open('get','consola.php?path='+ruta+'&consolaphp=true',false);
  }else{
  http.open('get','consola.php?path='+ruta+'&consolaphp=false',false);
} 
  http.send();
  console.log(http.response);
}
//funcion para colocar el codemirror actual de manera interactiva para que todo lo que se escriba en el editor se renderize al mismo tiempo
function ventanaNueva(){
       //if(ventana)ventana.close();
   
        ventana = window.open("vacio.html", "ventana nueva", "scrollbars=yes, resizable=yes, top=100, left=500, width=400, height=400");
        ventana.document.write(codemirroractual.getValue());
        setTimeout(function(){ventana.stop()},200)
        script = ventana.document.createElement('script');
        script.innerHTML = fnalt;
    }
function interactivo(){
    let delay;
    codemirroractual.on("change", function(cm) {
      
      clearTimeout(delay);
          delay = setTimeout(updatePreview, 300);
    
  });



    function updatePreview() {
        var previewFrame = document.getElementById('frame');
        var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
        preview.open();
        preview.write(codemirroractual.getValue());
        preview.close();
      }
      setTimeout(updatePreview, 300);
}

var fnalt = "document.onkeydown = function(e){\r\n\tif(e.ctrlKey==true && e.key=='l'){\r\n\t\te.preventDefault()\r\n\t\tcargarcssdelnavegador()\r\n\t}\r\n}\r\n\tfunction cargarcssdelnavegador(){\r\n\t\tlet re = \"\",\r\n\t\tst=document.body.querySelector('style'),\r\n\t\treglas = document.styleSheets[0].cssRules,\r\n\t\tarr=[];\r\n\t\tfor(i=0;i<reglas.length;i++){\r\n\t\tarr.push(reglas[i]);\r\n\t\t}\r\n\t\tarr.forEach(function(i){\r\n\t\t  re += i.cssText + '\\n' ;\r\n\t\t})\r\n\t\tst.textContent = re;\r\n\t\tconsole.log(re)\r\n\t\topener.window.codemirroractual.setValue( document.children[0].outerHTML)\r\n\t}";


/*************************************************************/
/*******para colocar en los helpers despues en este momento solo lo uso en estos script*************/
/**********para encontrar si existe una regla css en una hoja de estilos****************************/
/*esta si funciona*/
function encontrarRuler(hoja,selector){
  reglaslength=hoja.rules.length
  hojaarr = hoja.rules
    for(i=0;i<=reglaslength;i++){
    	if(hojaarr.item(i)!=null){
        if(hojaarr.item(i).selectorText==selector){
        	return i;
        }
    }else{
     	return 'no existe el selector'
    }
}
}
/************para encontrar el selector en las diferentes hojas aun no funciona pero voy bien*/

function encontrarReglaenhojas(regla){
	t=document.styleSheets.length
	for(j=0;j<t;j++){
		regla = encontrarRuler(document.styleSheets[j],regla)
		if(typeof regla=='number'){
			return {"hoja":j,"number":regla}
		}else{
			return {"hoja":j,"number":regla}
		}
	}
}

/*cargar modojs para el menu contextual*/
function cargarmodojs(){
codemirroractual.setOption('mode','application/javascript')
}