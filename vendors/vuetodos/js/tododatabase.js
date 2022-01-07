(function(exports){
	axios.get('vendors/vuetodos/storeapptodos.php').then(function(response){
		exports.database = response.data;
	})
})(window);

function cargar(){
	app.todos = database;
}
setTimeout(cargar,1000);