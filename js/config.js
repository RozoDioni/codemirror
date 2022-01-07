/*configuraicion general para iniciar todos los editores codemirror*/
var mixedMode = {
        name: "htmlmixed",
        scriptTypes: [{matches: /\/application\/x-httpd-php|\/x-mustache/i,
                       mode: 'application/x-httpd-php'},
                      {matches: /(text|application)\/(x-)?vb(a|script)/i,
                       mode: "javascript"}]
      };
config= {
    mode:"application/x-httpd-php",
    selectionPointer: true,
    keyMap: "sublime",
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    autoCloseBrackets: true,
    matchBrackets: true,
    showCursorWhenSelecting: true,
    autoCloseTags: true,
    indentUnit: 4,
    indentWithTabs: true,
    enterMode: "keep",
    tabMode: "shift",
     extraKeys: {
        "Ctrl-Space": "autocomplete",
        "Ctrl-S":function(cm){
        },
        "Alt-Q":function(cm){
        },
        "F11": function(cm) {
          cm.setOption("fullScreen", !cm.getOption("fullScreen"));
        },
        "Esc": function(cm) {
          if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
        }
      }
   }
   configphp = {
   		lineNumbers: true,
        matchBrackets: true,
        mode: "application/x-httpd-php",
        indentUnit: 4,
        indentWithTabs: true
   }
/*********end config*************************/
