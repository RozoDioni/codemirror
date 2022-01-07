/***********************helpers.js ayudante de codigo para paginas web dinamicas********************/
/*******************************creador Dioni Rozo****************************/
/***************************************version 1.0 date:29-03-2020*/
(function(exports){

let 
  r = retornarPlantilla,
  rs = retornarScriptPlantilla,
  s=retornarobj,
  ss=retornarobjall,
  ifoh=insertarfuncionesaobjetohtml,
  c=copiar,
  version=1.0,
  mensajeoculto='yo estoy oculto',//ojo mensaje oculto esto es solo para ver el alcance
  m=mimensaje,
  co=inscomponente,
  helpers = {c,co,ifoh,s,ss,r,rs}
  helpersexpors = {c,co,ifoh,m,r,rs,s,ss,version}

function retornarPlantilla(template){
  let box = document.createElement('box');
      box.innerHTML = template;
      if(box.children.length == 1)
      { return box.children[0];}
      if(box.children.length > 1){
        return box;
      }
      
}
function retornarScriptPlantilla(dom){
  let script2;
  if(script = dom.querySelector('script')){
        script.remove();
        script2 = window.document.createElement('script');
        if(script.text!="")script2.text = script.text;
        if(script.src!="")script2.src = script.s
        
        }
        dom.append(script2);
}
function retornarobj(selector){return document.querySelector(selector)}
function retornarobjall(selector){return document.querySelectorAll(selector)}

function insertarfuncionesaobjetohtml(obj,elehtml){
        for(i in obj){
          elehtml.addEventListener(i,obj[i])
        }
      }
function copiar(content){
  // Crea un campo de texto "oculto"
  var aux= document.createElement("textarea");
  // asigna el contenido del elemento especificado al valor del campo
  aux.value = content;
  
  document.body.appendChild(aux);
  // Selecciona el contenido del campo 
  aux.select();
  
  //Copia el texto seleccionado 
  document.execCommand("copy");
  
  //Elimina el campo de la pagina
  
  document.body.removeChild(aux);
}

function inscomponente(componente){

  let cp = null;

  ajax.get(componente).then(function(response){

    if(cp=document.querySelector('#cuadropadre')){

      cambiar.append(r(response.data));



    }

    else{

      document.body.append(cp=r(

        `<div id=\"cuadropadre\" style=\"resize:both;overflow:auto;\">

        <div style=\"background: red;

              height: 10px;

              border: 2px solid;

              width: 100%;

              cursor: all-scroll;

              position:sticky;

              top:0;\"

           onmousedown=\"draganddrop(this.parentNode)\" 

           class=\"mueveme\"></div>

        <div style=\"float:right;position:sticky;top:0;\" onclick=\"this.parentElement.remove()\"><span class=\"ico cerrar\"></span></div>

        <div style=\"float:right;position:sticky;top:0;\" onclick=\"maximizar(this)\"><span class=\"ico maximizar\"></span></div>

        <div style=\"float:right;position:sticky;top:0;\" onclick=\"minimizar(this)\"><span class=\"ico minimizar\"></span></div>

        <div id=\"cambiar\">${response.data}</div>

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


function mimensaje(mensaje = 'hola mundo'){return mensaje + ' mi nombre es dioni '+mensajeoculto }
for(i in helpers){
  exports[i]=helpers[i];
}
  exports.helpers = helpersexpors;

Object.prototype.properties = function() {
  var result = [];
  for (var property in this)
    if (this.hasOwnProperty(property))
        result.push(property);
  return result;
}

 var d = Object.prototype;

Object.defineProperty(d, "propiedades", {

get: function() {return this.properties() }

});

})(window)

  