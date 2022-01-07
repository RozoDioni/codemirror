function cargarcodemirroranimada(){
	if(codemirroractual.getValue()==""){
    codemirroractual.setValue('codemirror esta vacio');
  }
  else{
		let quitar=r(`
			<li class="btn" ><span class='ico masterpc'></span></li>
		`)
			quitar.addEventListener('click',quitarf)
	    menucodemirror.append(quitar)
	
		let imagenes=r(`<div id='imagenes'>
		<img class="imgdisenos escalera" src="imagenes/escalera frente.png" alt="">
		<img class="imgdisenos cliente" src="imagenes/cliente.png" alt="">
		<img class="imgdisenos pc" src="imagenes/pc.png" alt="">
		
		</div>
		`
	);
		document.body.append(imagenes);
	
	resultadovista =document.querySelector('#resultadovista');
	editortodo = document.querySelector('#editores-todo');
	editortodo.setAttribute('class','editortodo');
	resultadovista.setAttribute('class','interpretecliente');
var $t;
$jf = codemirroractual.getValue().split('')
$i = 0;
$l = $jf.length-1;
codemirroractual.setValue("")
function insertar(){
     c = codemirroractual,
      cv = codemirroractual.getValue(),
     c.replaceRange($jf[$i],c.getCursor())
      c.setCursor(c.lineAtHeight())
       if($i==$l){
  clearInterval($t)
         $i = 0;
}
$i++;
uP();
}
}
$t = setInterval(insertar,1);

  function quitarf(){
  	resultadovista.removeAttribute('class');
  	editortodo.removeAttribute('class');
  	this.remove();
  	imagenes.remove();
  }
  function uP() {
  		if($i%50==0){
        var previewFrame = document.getElementById('frame');

        var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;

        preview.open();

        preview.write(codemirroractual.getValue());

        preview.close();

      }
  }


}
function codemirroranimada(){
let 
$jf = codemirroractual.getValue().split(''),
$i = 0,
$l = $jf.length-1;
codemirroractual.setValue("")
function insertar(){
     c = codemirroractual,
      cv = codemirroractual.getValue(),
     c.replaceRange($jf[$i],c.getCursor())
      c.setCursor(c.lineAtHeight())
       if($i==$l){
  clearInterval($t)
         $i = 0;
}
$i++;
}
$t = setInterval(insertar,1);
}
