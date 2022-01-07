/*******************modulo consola interactiva******************************/
(function(exports){
let History = [""],cl = History.length,clr=0;
function comparar(val){
	 let cl = History.length-1;
if(History[cl]==val){

	}else{
		History.push(val)
	}
}
function evaluar(este,e){
	console.log(e);
	let c = codemirroractual;
	cl = History.length;

	if(e.keyCode==38){
		console.log(this)
		if(este.value==""){
			clr=0;
		}
			este.value = History[cl-clr];
			clr++;
	}

	if(e.keyCode==13){
		if(este.value=="")return;
		comparar(este.value);
		c.replaceRange(eval(este.value).toString()+'\n',c.getCursor());

		este.value =""

	}
	if(e.ctrlKey){
		if(este.value=="")return;
		comparar(este.value);
		let val = este.value;
		let valc=evaluarPatron(val)
		evaluar.fnexec[valc.accion](valc.val,c,este,val)

		}
	if(e.altKey){
			e.preventDefault()
		if(e.key=='q'){
			codemirroractual.focus();
		}

		
	}

		function evaluarPatron(val){
	let j=0;
	//los patrones acontinuacon si se ejecutan como verdaderos trabajan como indices para el condicional switch que va a realizar
	//las acciones y retornar el valor de las funciones a ejecutar por modulo fnexec
	let patrones = [/.jpg?/,/.JPG?/,/.png?/,/^cls/,/\w$/,/\(\)?/,/^t\s/];
	let valc;
	patrones.forEach(function(i){
		if(i.test(val)){
			switch (j){
				case 0:
					valc= {accion:'img',val}
					break;
				case 1:
					valc= {accion:'img',val}
					break;
				case 2:
					valc= {accion:'img',val}
					break;
				case 3:
					if(val=='cls'){
						
					valc= {accion:'vaciarc',val}
					}
					break;
				case 4:
					if(typeof window[val] == 'function')valc= {accion:'fnm',val}
					
					break;
				case 5:
					let fnv = val.split('');
						fnv.pop();
						fnv.pop();
						fnv = fnv.join('');
					if(typeof window[fnv] == 'function')valc= {accion:'execfn',val}
					
					break;
				case 6:

					let vl = val.split(' ')[1];
						if(vl=='actualizar'){
							valc= {accion:'actualizar',val}
							break;
						}
						if(vl=='guardar'){
							valc= {accion:'guardar',val}
							break;
						}
					else{
						valc = {accion:'template',val}
						break;
						}
			}
		}

		j++;
	})
	return valc;
}

}
evaluar.__proto__.fnexec = {
			img:function (val,c,este){
				 let img= `<img src="${val}"></img>`
				 c.replaceRange(img,c.getCursor())
				 este.value = "";
			},
			template:function(valor,c,este,val){
				let vl = val.split(' ')[1];
				c.replaceRange(script[vl].toString(),c.getCursor())
				este.value = "";
			},
			fnm:function(val,c,este){
				c.replaceRange(eval(val).toString(),c.getCursor())
				este.value =""
			},
			execfn:function(val){
				//eval(val)
				window[val]();
				este.value = ""
			},
			actualizar:function(valor,c,este,val){//si hay que pasar los 4 parametros porque el valor de este hay que enviarlo
				ajax.get('resource/snipets.php').then((response)=>{if(script = response){este.value='se actualizo'}})
			},
			guardar:function(valor,c,este,val){
				let valoreditor = codemirroractual.getValue();
				let name = val.split(' ');
					name = name[2];
				let j = {name,valoreditor}
				ajax.post('resource/guardar-snipets.php',j).then((response)=>este.value=response);
				console.log('se guardo');
			},
			selecteditor:function(){
				document.querySelector('.CodeMirror-scroll').click();
			},
			vaciarc:function(val,c,este){
				c.setValue('');
				este.value = ""
			}

		}
		exports.evaluar = evaluar
})(window);
