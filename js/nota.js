(function(exports){
let servidor = 'http://localhost:8000/servicios/notas/';
let objnota,limove,btncerrar,btnguardar,tittle,nota,res,url,id=false,editar=false;
let etiquetasTemplate;
setTimeout(function(){
  ajax.POST(servidor+'notas.php/etiquetas').then((data)=>{
    etiquetasTemplate=r(`<select class="etiqueta" id="etiqueta" name="users" onchange="cargarleccionviaajax(this)"></select>`);
    data.forEach((obj)=>etiquetasTemplate.append(r(`<option value="${obj.etiqueta}">${obj.etiqueta}</option>`)))    
  })
},1000)
  
function fnnota(){

  objnota=r(`
  <div style="" class="appnota">
    <li class="appnotali" style="">${etiquetasTemplate.outerHTML}
    <span style="" class="ico cerrar appnotalicerrar"></span>
    <span id="guardar" style="" class="ico guardar appnotaliguardar"></span>
    <span id="id" style="" class="ico id appnotaliid">
              <input class="appnotalientrada" style=""type='text' value='0'/>
    </span>
    </li>
    <h4 class="appnotalih4" style="">vacia</h4>
    <h5 class="appnotalih5">${retornarFecha()}</h5>
    <textarea class="appnotatextarea form-control"  style="" id="notas"></textarea>
  </div>
`)  
    etiqueta = objnota.querySelector('.etiqueta');
    limove = objnota.querySelector('li');
    btncerrar = objnota.querySelector('.cerrar');
    btnguardar = objnota.querySelector('.guardar');
    tittle = objnota.querySelector('h4');
    fecha = objnota.querySelector('h5');
    nota = objnota.querySelector('textarea');
    id = objnota.querySelector('.id>input');
    id.addEventListener('keydown',cambiarnota);
    btnguardar.addEventListener('click',fnguardar);
    btncerrar.addEventListener('click',function(){this.parentNode.parentNode.remove();});
    limove.addEventListener('mousedown',function(){
      draganddrop(this.parentNode);
    });
    tittle.addEventListener('dblclick',editartittle);
   document.body.append(objnota);

   nota.select();
}

function retornarFecha(){
        function retornarHora(n){
  intervalos0 = [1,2,3,4,5,6,7,8,9,10,11,12]
  intervalos=[13,14,15,16,17,18,19,20,21,22,23,0];
  horas =  ['01','02','03','04','05','06','07','08','09',10,11,12];
  
  if(intervalos.indexOf(n)!=-1){
    return horas[intervalos.indexOf(n)]
  }else{
    return horas[intervalos0.indexOf(n)]
  }  
}
  let meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
  let date = new Date(),
      y=date.getFullYear(),
      m=date.getMonth(),
      d=date.getDate(),
      h=date.getHours(),
      t= (h<=11 ? 'am':'pm'),
      M=date.getMinutes(),
      MM = (M<=9 ? '0'+9 :M),
      s=date.getSeconds(),
      ss = (s<=9 ? '0'+9 :s),
  template = `<span>${retornarHora(h)}:${MM}:${ss} ${t} </span><span class="fecha">${d} de ${meses[m]} del ${y}</span>`
  return template;
}
cambiarnota = function(){
  function cargarnota(valor){
     ajax.POST(servidor+'notas.php/get',{id:valor}).then(function(response){
        res = response;
           if(res.editar=='true'){
      editar = res.editar;
      tittle.textContent = res.title;
      objnota.style.left =  res.left;
      objnota.style.top =  res.top;
      nota.value = res.nota;
      objnota.style.background = 'green';
      id.value = res.id;
      fecha.innerHTML = res.fecha;
    }
      })
  }
    let key=arguments[0].keyCode

   if(key == 38 || key == 40 || key == 13){
    switch(key){
      case 38:
      this.value++
      cargarnota(this.value);
      break;
      case 40:
      this.value--
      cargarnota(this.value);
      break;
      case 13:
      cargarnota(this.value);
      break;
    }
   }
}

fnguardar = function(){
  console.log(etiqueta.value)
    let left=objnota.style.left,
    top = objnota.style.top,
    vnota = nota.value,
    vid = id.value,
    title = tittle.textContent,
    fechad = fecha.innerHTML,
    etiqueta1 = etiqueta.value
    if(title=='vacia'){
      
      return alert('debe ponerle un nombre a la nota');
    }
    
  j={editar,vid,title,fechad,vnota,top,left,etiqueta1};
  condicion = vid!=0;
  url = condicion ? servidor+'notas.php/edit' : servidor+'notas.php/set'
  ajax.POST(url,j).then((response)=>{
    
    res = response
    window.res =res;
    if(res.editar=='true'){
      editar = res.editar;
      tittle.textContent = res.title;
      objnota.style.left =  res.left;
      objnota.style.top =  res.top;
      nota.value = res.nota;
      objnota.style.background = 'green';
      id.value = res.id;
      fecha.innerHTML = res.fecha;
    }

   
  })
}
editartittle = function(){
  this.contentEditable ='true';
  this.textContent="";
  this.focus();
  this.addEventListener('keyup',enter)
  function enter(){
    console.log(arguments[0])
    if(arguments[0].keyCode==13)
      {
         this.contentEditable ='false';
         this.removeEventListener('keyup',enter);
         nota.select();
        
      }
  }
}
document.onkeydown = function(e){
  if(e.keyCode==84 || e.keyCode==18 || e.keyCode==16 ||e.keyCode==17){
    if(e.altKey==true){
      if(e.keyCode==84){
        e.preventDefault();
        fnnota();
      }
    
  }
  if(e.altKey==true && e.key=='t'){
    e.preventDefault();
    fnnota();
  }
}
}

  exports.res = res;
  exports.fnnota = fnnota;

//insertando estilos en el documento
  document.head.append(r(`<style>
          .appnota{min-width:300px;height:200px;background:red;position:absolute;top:0;left:0;z-index:5;}
          .appnotali{width: 100%;height: 10%;display: inline-block;cursor: move;}
          .appnotalicerrar{float:right;cursor:pointer;}
          .appnotaliguardar{float:right;cursor:pointer;}
          .appnotaliid{float: left;display: inline-block;background: green;border: 1px solid;border-radius: 50%;width: 40px;height: 40px;font-size: 1.5em;color: yellow;}
          .appnotalientrada{width:18px;background:none;border:0;display: block;margin:auto;text-align: center;}
          .appnotalientrada:focus{border-color: white;}
          .appnotalih4{margin: 0;padding: 0;background: yellow;text-align: center;height:20px;line-height:19.8px;}
          .appnotatextarea{min-width: 300px;height: 148px;background: white;}
        </style>`));
})(window)

    