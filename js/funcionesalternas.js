document.onkeydown = function(e){
	if(e.ctrlKey==true && e.key=='l'){
		e.preventDefault()
		cargarcssdelnavegador()
	}
}
	function cargarcssdelnavegador(){
		let re = "",
		st=document.body.querySelector('style'),
		reglas = document.styleSheets[0].cssRules,
		arr=[];
		for(i=0;i<reglas.length;i++){
		arr.push(reglas[i]);
		}
		arr.forEach(function(i){
		  re += i.cssText + '\n' ;
		})
		st.textContent = re;
		console.log(re)
		opener.window.codemirroractual.setValue( document.children[0].outerHTML)
	}