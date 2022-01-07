ajax = (function(){


		function get(url,json=""){
			if(json!="" && typeof json=='object'){
			 json=encodeURIComponent(JSON.stringify(json)); 
			 	url = `${url}?j=${json}`;
			}
			if( typeof axios =='function'){
			return axios.get(url);
		}else{
			alert('se requiere libreria axios http://localhost:8000/utilitarios/axios/axios.js');
		}
		}

		function post(url,json=""){
			if(json!="" && typeof json=='object') json=encodeURIComponent(JSON.stringify(json));
			if(typeof axios == 'function'){
			return axios.post(`${url}?j=${json}`)
		}else{
			alert('se requiere libreria axios http://localhost:8000/utilitarios/axios/axios.js')
		}

		}
		function POST(url,json=""){
			if(json!="" && typeof json == 'object') json=encodeURIComponent(JSON.stringify(json));
			console.log(json);
			return new Promise(function (resolve,reject){
				http = new XMLHttpRequest();
				http.open('post',url,false);
				http.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				http.onload = function(){
					 if(this.status==200){
        		resolve(JSON.parse(this.responseText))
     	 }
				}
				http.send(`j=${json}`);
			})
		}
		
			return {get,post,POST}
		})();