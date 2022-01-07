	<nav id="navegar" class='navegar visibletrue'>
	<ul>
	<li>theme: 
		<select onchange="selectTheme(this)" id="select">
	    	<option selected>eclipse</option>
	    	<option>erlang-dark</option>
	    	<option>night</option>
	    	<option>rubyblue</option>
	    	<option>the-matrix</option>
		</select>
		</li>
		<li>
		<div id="menueditor">
			
				</div>
		</li>
		<!-- <li><?php  #include './vendors/componentesjs/clock.html'; ?></li> -->
	</ul>

	</nav>
		<div id="config" class="config visibletrue">
				<ul id="menucodemirror" class="menucodemirror">
		 	<abbr title="guardar"><li class="btn" onclick="guardar()"><span class="ico guardar"></span></li></abbr>
			<abbr title="viewindow"><li class="btn" onclick="viewindow()"><span class="ico flebd"></span></li></abbr>
			<abbr title="viewindownew"><li class="btn" onclick="viewindownew(this,event)"><span class="ico flend"></span></li></abbr>
			<abbr title="interactivo"><li class="btn" onclick="interactivo()"><span class="ico construir"></span></li></abbr>
			<abbr title="ventanaNueva"><li class="btn" onclick="ventanaNueva()"><span class="ico construirv"></span></li></abbr>
			<abbr title="abrirensublime"><li class="btn" onclick="abrirensublime()"><span class='ico sublime'></span></li></abbr>
			<abbr title="abrirruta2"><li class="btn" onclick="abrirruta2()"><span class='ico carhor'></span></li></abbr>
			<abbr title="consola"><li class="btn" onclick="consola(event)"><span class='ico consola'></span></li></abbr>
			<abbr title="cargarcodemirroranimada"><li class="btn" onclick="cargarcodemirroranimada()"><span class='ico masterpc'></span></li></abbr>
			<abbr title="componente"><li class="btn" onclick="componente('http://localhost:8000/servicios/notas/todoparatodos.php','todoparatodos')"><span class='ico masterpc'></span></li></abbr>
				</ul>
		</div>