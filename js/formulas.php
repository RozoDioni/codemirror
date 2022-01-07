<script>
function cargardirectorio(path,anterior){
    return new Promise(function(resolve,reject){
      
       conexion = new XMLHttpRequest()
       conexion.open('post','interfaz.php');
       conexion.setRequestHeader("Content-type","application/x-www-form-urlencoded");
       conexion.onload = function(){
         if(this.status==200){
           resolve(this.response);
         }
        }
       conexion.send(`path=${path}&anterior=${anterior}`);
    })
}

function recargardirectorio(path){
  anterior = document.querySelector('#directorio').value
  cargardirectorio(path,anterior).then((data)=>{
  boxfile = document.querySelector('#interfaz')||document.querySelector('body');
  boxfile.innerHTML = data;
})
}
function mostrarinterfaz(este){
  interfaces=document.querySelectorAll('.interfaces');
  for(let i=0;i<2;i++){
    interfaces[i].classList.add('ocultar');
  }
  interfaces[este].classList.remove('ocultar');

}
function mostrarrutacompleta(){
  //esta funcion solo trabaja bajo el contexto de this con addEventListener
      console.log(this)
  let path=this.getAttribute('path');
      path=path.split('\\');
      path.shift();
      path = path.join('/');
      path = document.location+path;
      c(path);
      return path;
}
/*estas funciones son solo para codemirror la interfaz independiente no las nececita*/
function cargarplantillas(file){
return new Promise(function(resolve,reject){
    
    http = new XMLHttpRequest()   
    
     http.open('GET','cargararchivo.php?nombrearchivo='+file,false);
     http.onload = function(){
      if(this.status==200){
        resolve(this.response)
      }
     }
    http.send();
   
 })
}


</script>