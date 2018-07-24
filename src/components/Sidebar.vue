<template>
	<div class="sidebar" :class="{'is-open': isSidebarOpen}">
		<div class="sidebar-content">
			<!--createNewList-->
			<form v-if="sidebarContentToShow === 'createNewList'">
				<h3>Create a new list</h3>
				<label for="listTitle">Title:</label>
				<input id="listTitle" name="listTitle" type="text" placeholder="My amazing next trip to south america" v-model="tempNewList.title">
				<label for="listKeyword">Keyword:</label>
				<input id="listKeyword" name="listKeyword" type="text" placeholder="Colombia" v-model="tempNewList.keyword">
				<div class="buttons">
					<button type="button" class="is-confirm" @click="createList">Create List</button>
				</div>
			</form>
			<form v-if="sidebarContentToShow === 'editList' && todoList">
				<h3>Edit list</h3>
				<label for="listTitle">Title:</label>
				<input id="listTitle" name="listTitle" type="text" placeholder="My amazing next trip to south america" v-model="todoList.title">
				<label for="listKeyword">Keyword:</label>
				<input id="listKeyword" name="listKeyword" type="text" placeholder="Colombia" v-model="todoList.keyword">
				<div class="buttons">
					<button type="button" class="is-danger" @click="deleteList">Delete list</button>
					<button type="button" class="is-confirm" @click="closeSidebar">Done</button>
				</div>
			</form>
			<form v-if="sidebarContentToShow === 'createNewTodo'">
				<h3>Create a new todo</h3>
				<label for="todoName">Name:</label>
				<input id="todoName" name="todoName" type="text" placeholder="Do things..." v-model="tempNewTodo.name">
				<label for="todoCompleted"><input name="todoCompleted" id="todoCompleted" type="checkbox" :checked="tempNewTodo.isCompleted" v-model="tempNewTodo.isCompleted"> Is completed</label>
				<div class="buttons">
					<button type="button" class="is-confirm" @click="createTodo">Create todo</button>
				</div>
			</form>
			<form v-if="sidebarContentToShow === 'editTodo' && todo">
				<h3>Edit todo</h3>
				<label for="todoName">Todo:</label>
				<input id="todoName" name="todoName" type="text" placeholder="Do things..." v-model="todo.name">
				<label for="todoCompleted"><input name="todoCompleted" id="todoCompleted" type="checkbox" :checked="todo.isCompleted" v-model="todo.isCompleted"> Is completed</label>
				<div class="buttons">
					<button type="button" class="is-danger" @click="deleteTodo">Delete todo</button>
					<button type="button" class="is-confirm" @click="closeSidebar">Done</button>
				</div>
			</form>
			<button type="button" class="is-danger" @click="closeSidebar">Cancel</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['isSidebarOpen', 'sidebarContentToShow', 'todoList', 'todo'],
	data() {
		return {
			tempNewList: [{
				title: null,
				keyword: null
			}],
			tempNewTodo: [{
				name: null,
				isCompleted: false
			}],
		}
	},
	methods: {
		closeSidebar() {
			this.$emit('closeSidebar');
		},
		createList() {
			let listTitle = this.tempNewList.title;
			let listKeyword = this.tempNewList.keyword;

			if (listTitle == null) {
				listTitle = "🕵️‍ List with no name";
			}
			if (listKeyword == null) {
				listKeyword = "earth";
			}

			const list = {
				title: listTitle,
				keyword: listKeyword,
				items: []
			};

			this.$emit('createList', list);

			this.tempNewList.title = null;
			this.tempNewList.keyword = null;
		},
		deleteList() {
			this.$emit('deleteList');
		},
		createTodo() {
			let todoName= this.tempNewTodo.name;
			let todoCompleted = this.tempNewTodo.isCompleted;

			if (todoName == null) {
				todoName = "🕵️‍ unnamed todo";
			}
			const data = {
				name: todoName,
				isCompleted: todoCompleted
			};

			this.$emit('createTodo', data);

			this.tempNewTodo.name = null;
			this.tempNewTodo.isCompleted = false;
		},
		deleteTodo(){
			this.$emit('deleteTodo')
		}
	}
}
</script>

<style>
</style>
