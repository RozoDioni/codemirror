click=(function(){
	let configclick = {uno:{"#boxfile .lista>span":cambiarfondo,"#boxfile .lista":cambiarfondo},
					   cambiarconfigclick(configclick){
						this.uno = configclick
					   }};

function cambiarfondo(){
	alert('hello word desde click');
}

function click(e){
	let func;
	for(i in configclick.uno){
		if(configclick.uno.hasOwnProperty(i)){
			ss(i).forEach(function(j){
				if(j==e.target){
			e.preventDefault();
			func= configclick.uno[i].bind(e.target);
			func();
			}
		})
		}
	}
	
}
document.addEventListener('click',click);
return configclick;


})()