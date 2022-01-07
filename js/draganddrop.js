function draganddrop(obj,e){
  //obj.style.position=='absolute';
  obj=obj||this;
  e=e||event;
  if(obj.style.left=="")obj.style.left='0px';
  if(obj.style.top=="")obj.style.top='0px';
  if(obj.style.position!="")obj.style.position=='absolute';
  Recuadro(obj)
}


function Recuadro(div)
{
    tX=0;
    tY=0;
    difX=0;
    difY=0;
    div.addEventListener('mousedown',inicioDrag,false)


    function coordenadaX(e)
    {
        return e.clientX+document.body.scrollTop;
    }

    function coordenadaY(e)
    {
        return e.clientY+document.body.scrollTop;
    }

    function inicioDrag(e) 
    {
      var eX=coordenadaX(e);
      var eY=coordenadaY(e);
      var oX=parseInt(div.style.left);
      var oY=parseInt(div.style.top);
      difX=oX-eX;
      difY=oY-eY;
      document.addEventListener('mousemove',drag,false)
      document.addEventListener('mouseup',drop,false)

    }

    function drag(e) 
    { 
      tX=coordenadaY(e)+difY+'px';
      tY=coordenadaX(e)+difX+'px'
      div.style.top=tX; 
      div.style.left=tY; 
    }
  

    function drop(e)
    { 
        let cor = {tX,tY,difX,difY}
        document.removeEventListener('mousemove',drag,false);
        document.removeEventListener('mouseup',drop,false);
        div.removeEventListener('mousedown',inicioDrag,false)
        console.log(e);

    }
}