function componente(componente){
	window.cp = null;
	ajax.POST(componente).then(function(response){
		if(cp=document.querySelector('#cuadropadre')){
			cambiar.append(r(response.data));

		}
		else{
			document.body.append(cp=r(
			   `<div id="cuadropadre" style="resize:both;overflow:auto;">
				<div style="background: red;
							height: 10px;
							border: 2px solid;
							width: 100%;
							cursor: all-scroll;
							position:sticky;
							top:0;"
					 onmousedown="draganddrop(this.parentNode)" 
					 class="mueveme"></div>
				<div style="float:right;position:sticky;top:0;" onclick="this.parentElement.remove()"><span class="ico cerrar"></span></div>
				<div style="float:right;position:sticky;top:0;" onclick="maximizar(this)"><span class="ico maximizar"></span></div>
				<div style="float:right;position:sticky;top:0;" onclick="minimizar(this)"><span class="ico minimizar"></span></div>
				<div id="cambiar">${response.data}</div>
				</div>`
			))
		}
		if(script=cp.querySelector('script')){
				script.remove();
				let script2=document.createElement('script');
				script2.text = script.text;
				cp.append(script2);
				}
	})	
	
}

function maximizar(este){
	este.parentElement.style.width = '100%';
	este.parentElement.style.height = '100%';
}
function minimizar(este){
	este.parentElement.style.width = '';
	este.parentElement.style.height = '';
}
