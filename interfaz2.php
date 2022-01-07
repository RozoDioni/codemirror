<?php /*
  el siguiente condicional me monta los archivos de dependencias si el contenedor no los proyecta para que asi quede como una libreria independiente
*/ ?>
<?php if(isset($interfazfile)): ?>
  <!-- los archivos de interfaz se cargan automaticamente desde maestrojs -->
<?php else: ?>
    <link rel="stylesheet" type="text/css" href="css/glyicons.css">
    <link rel="stylesheet" type="text/css" href="http://localhost:8000/utilitarios/bootstrap/dist/css/bootstrap.min.css">
    <script src="js/helpers.js"></script>
    <script src="js/draganddrop.js"></script>
    <script src="js/clickparatodos.js"></script>
<?php endif; ?>

    <div id="contenedor-de-interfaces">
      <div class="mueveme" onclick="draganddrop(this.parentNode,event)">mover</div>
    <ul id="cabeceras">
      <li onclick="mostrarinterfaz(0)">interfaz</li>
      <li onclick="mostrarinterfaz(1)">favoritos</li>
    </ul> 
    <?php include_once('js/formulas.php'); ?>
    <div class="interfaces" id="interfaz"><?php include 'interfaz.php'; ?></div>
    <div class="interfaces ocultar" ><?php include 'favoritos.php'; ?></div>
    
    </div>
<style>
   
     

     
      * {
    margin: 0;
    padding: 0px;
    top: 0;
    list-style: none;
}
.mueveme{
  cursor: grab;
  text-align: center;
}
.mueveme:active {
  cursor: grabbing;
}
.interfaz {
  padding-right: 10px;
  padding-left: 10px;
}
.interfaz ul{
  padding: 10px;
  }
 .ocultar{
      display:none;
    }
}

.dir-actual{
  background:#004bff4d;
  text-align: center;
  font-weight: bold;
}
.flechas .ico{
  width: 20px;
  height: 20px;
  float: right;
}
#boxfile > ul {
  padding-left: 10px;
}
#navegador>.ico{
  width: 20px;
  height: 20px;
  margin-left: 5px;
}
.favorito{
  display: inline-block;
  width: 100%;
}

  #contenedor-de-interfaces{
  width: 19%;
  display: inline-block;
  position: absolute;
  top: 0px;
  z-index: 5;
  resize: both;
  overflow: auto;
  padding-bottom: 17px;
  border: 1px solid #0000ff30;
}
#cabeceras{
  padding-left: 10px;
  padding-right: 10px;
}
#cabeceras>li{
  background: #1a8af8;
  float: left;
  width: 50%;
  text-align: center;
  outline: 1px solid white;
}
#cabeceras>li:hover{
  background: white;
  cursor: pointer;
}

#boxfile{
  height: 300px;
  background: #f7f7f7;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
}

#boxfile>ul>li{
  color: red;
}
#boxfile>ul>li:hover{
  color:blue;
  cursor: -moz-grab;
  background: aquamarine;
}

.carpeta{
  display: flow-root list-item;
}
.carpeta:hover{
  color:yellow;
}
.carpeta .ico{
  width: 24px;
  height: 24px;
  margin-top: -2%;
  display: inline-block;
}
.carpeta .file{
  display: inline-block;
}

</style>
