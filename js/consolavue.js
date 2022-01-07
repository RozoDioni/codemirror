trozos = { 
           "link": "<link rel=\"stylesheet\" type=\"text/css\" href=\"\">", 
           "script": "<script src=\"\" type=\"text/javascript\"><\/script>", 
           "img": "<img src=\"\" >", 
           "ul": "<ul>\n<li></li>\n<li></li>\n</ul>", 
           "ol": "<ol>\n<li></li>\n<li></li>\n</ol>",
           "alert":"este es una propiedad no un metodo esta en trozos"
                 }
      
      function mostrarcoincidencias(arr,pat){
        patt = new RegExp(`^${pat}\w{0,}`)
arr2 = []
arr.forEach(function(a){
  b=a.toString();
b.match(patt) !=null ? arr2.push(b.toString()) : '';
})

return arr2;
      }

      function inscomando(este,e){
        if(e.keyCode==13){
          valor = trozos[este.value] ? trozos[este.value] : window[este.value].toString();
          let c = codemirroractual;
          c.replaceRange(valor+'\n',c.getCursor());
          v.res = [];    
        }
        
      }
      function inscomando2(este,e){
        let valor = este.textContent;
        let ele=s('#question')
            promesadeins(valor).then(function(data){
              v.res = [];
            })
            
      }
      function promesadeins(valor){
        return new Promise(function(resolve,rejet){
          resolve(v.question = valor)
        })
      }
      
      //app vue
    const resultadosconsola = {
  data() {
    return {
    mostrar:false,
    answer: 'I cannot give you an answer until you ask a question!',
    question: '',
    res:[]
    }
  },
   watch: {
    // whenever question changes, this function will run
    question: function (newQuestion, oldQuestion) {
      this.answer = 'esperando que te detengas de teclear...'
      this.getAnswer()
    }
  },
    methods: {
    // _.debounce is a function provided by lodash to limit how
    // often a particularly expensive operation can be run.
    // In this case, we want to limit how often we access
    // yesno.wtf/api, waiting until the user has completely
    // finished typing before making the ajax request. To learn
    // more about the _.debounce function (and its cousin
    // _.throttle), visit: https://lodash.com/docs#debounce
    getAnswer: _.debounce(
      function () {
        var vm = this;
            vm.mostrar = true;
        
        
          this.answer ='tinking';
          vm.res=mostrarcoincidencias(this.retornarres(),vm.question);
        
      },
      // This is the number of milliseconds we wait for the
      // user to stop typing.
      500
    ),
   retornarres(){
    tro = op(trozos);
    pro = op(window);
    return tro.concat(pro);
   }
  }
}
document.body.append(r(`
  <style>

.listadecomandospadre {
  height: 0;
}
  .listadecomandos {
  max-height: 100px;
  overflow-y: scroll;
  width: min-content;
}

.listadecomandos li {
  background: red;
  display: table-row-group;
  color:blue;
  position: sticky;
}
.listadecomandos>li:hover {
  background: green;
  cursor: pointer;
}
  </style>
  `))


  
         
  v = Vue.createApp(resultadosconsola).mount('#appconsola')
