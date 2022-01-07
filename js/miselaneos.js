/*******************funcion para insertar imagen movible********************/
function insertarimagenmovible(rutaimg){
	document.styleSheets[0].cssRules.item(106).style.background="#fff0";
	document.styleSheets[0].cssRules.item(235).style.border ='';
	document.querySelector('#editor0>div').style.background=''
		
		if(rutaimg.match(/.svg$/)){
		ajax.post(rutaimg).then((data)=>{
		let img=r(`<div onclick="draganddrop(this,event)"
							class="imagenesmovibles">${data.data}
				  </div>`);
			document.body.append(img);
			img.draggable = false
			img.style.position = 'absolute'
			img.setAttribute('class','imagenesmovibles');
			img.setAttribute('onclick','draganddrop(this,event)');
		window.imagenesinsertadas={img}
		
		})
		}else{
		let img = r(`<div onclick="draganddrop(this,event)"
							class="imagenesmovibles">
						<img draggable='false' src="${rutaimg}" >
					</div>`)
			document.body.append(img)
			img.style.position = 'absolute'
	}
		
}

	function borrarnodo(){
			this.remove();
		}
	function inidrag(){
		draganddrop(this,event)
	}