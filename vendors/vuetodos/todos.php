	<div class="todosimo">
		<link rel="stylesheet" href="vendors/vuetodos/node_modules/todomvc-common/base.css">
		<link rel="stylesheet" href="vendors/vuetodos/node_modules/todomvc-app-css/index.css">
		<style> [v-cloak] { display: none; } </style>
		<section class="todoapp">
			<header class="header">
				<input class="new-todo" autofocus autocomplete="off" placeholder="escribe algo aquí?" v-model="newTodo" @keyup.enter="addTodo">
			</header>
			<section class="main" v-show="todos.length" v-cloak>
				<input class="toggle-all" type="checkbox" v-model="allDone">
				<ul class="todo-list">
					<li class="todo" v-for="todo in filteredTodos" :class="{completed: todo.completed, editing: todo == editedTodo}">
						<div class="view">
							<input class="toggle" type="checkbox" v-model="todo.completed">
							<label @dblclick="editTodo(todo)">{{todo.title}}</label>
							<button class="destroy" @click="removeTodo(todo)"></button>
						</div>
						<input class="edit" type="text" v-model="todo.title" v-todo-focus="todo == editedTodo" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)">
					</li>
				</ul>
			</section>
			<footer class="footer" v-show="todos.length" v-cloak>
				<span class="todo-count">
					<strong v-text="remaining"></strong> {{remaining | pluralize 'item'}} left
				</span>
				<ul class="filters">
					<li><a href="#/all" :class="{selected: visibility == 'all'}">All</a></li>
					<li><a href="#/active" :class="{selected: visibility == 'active'}">Active</a></li>
					<li><a href="#/completed" :class="{selected: visibility == 'completed'}">Completed</a></li>
				</ul>
				<button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
					Clear completed
				</button>
			</footer>
		</section>
	
		<script src="vendors/vuetodos/js/tododatabase.js"></script>
		<script src="vendors/vuetodos/node_modules/director/build/director.js"></script>
		<script src="vendors/vuetodos/node_modules/vue/dist/vue.js"></script>
		<script src="vendors/vuetodos/js/store.js"></script>
		<script src="vendors/vuetodos/js/app.js"></script>
		<script src="vendors/vuetodos/js/routes.js"></script>
	</div>
