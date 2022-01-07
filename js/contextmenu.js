(function(exportar){
	configurar = {"SPAN":[cambiarfondo,cambiarcolor,drag],"LI":[cambiarcolor,drag]}
	//use dependencias helpers function r()
	var fnsArr;
	let menu,insertmenu;
/*******************function para el uso del teclado*********/
	function ctrole(e){
	if(e.ctrlKey==true && e.key=='l'){
		e.preventDefault()
		
	}
}
	function menucontextual(e){
		if(menu!="" && typeof(menu) == 'object' && menu.nodeName == 'DIV') menu.remove();
		//fnsArr=fns(nodeName,e);
		fnsArr = retornarfnsArr(configurar,e);	
		menu= r(`
			<div onmouseleave="this.remove()" style="position: fixed;z-index:999;background:green;"
				 class="menu">
				 <ul>
				 </ul>
			</div>`);
		
		fnsArr.forEach(function(fn){
			let cC = fn.bind(e.target);
			ele=r(`
					<li>${fn.name}</li>
				`);
			
			ele.addEventListener('click',cC);
			menu.querySelector('ul').append(ele);
		});
		lista =	menu.querySelectorAll('li');
		lista.forEach(function(li){li.addEventListener('click',remover);});

		menu.style.left = e.clientX + 'px';
		menu.style.top =  e.clientY + 'px';
		if(insertmenu==true) document.body.append(menu);

	function remover(){
		this.parentNode.parentNode.remove();
	}

	}
	
function cambiarcolor(){
	this.style.color = 'red';
}
function cambiarfondo(){
	this.style.background = 'yellow';
}
function drag(){
	this.style.position = 'relative';
	draganddrop(this);
}
function agreagarafavoritos(){
	id=this.id;
	j={id}
	ajax.post('agregarf.php',j).then(function(response){
		app.favoritos = response.data;
	});
}


function retornarfnsArr(configurar,e){
	let valor;
	for(i in configurar){
		if(configurar.hasOwnProperty(i)){
			ss(i).forEach(function(j){
				if(j==e.target){
			e.preventDefault();
			insertmenu = true;
			valor=configurar[i];
			}
		})
		}
	}return valor;
}


document.addEventListener('contextmenu',menucontextual);
document.addEventListener('keydown',ctrole);

	return exportar.configurar = configurar;

})(window);