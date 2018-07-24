<template>
	<div class="page-container">
		<app-nav :isNavOpen="isNavOpen" :todoLists="todoLists" :currentListIndex="currentListIndex" @changeListIndex="updateCurrentIndex" @openSidebar="onOpenSidebar"></app-nav>
		<app-main :currentTodo="todoLists[currentListIndex]" @editList="onOpenSidebar" @openSidebar="onOpenSidebar" @editTodo="onEditTodo"></app-main>
		<app-sidebar :sidebarContentToShow="sidebarContentToShow" :todoList="todoLists[currentListIndex]" :todo="todoLists[currentListIndex].items[currentTodoIndex]" :isSidebarOpen="isSidebarOpen" @closeSidebar="onCloseSidebar" @createList="onListCreated" @deleteList="onListDelete" @createTodo="onCreateTodo" @deleteTodo="onDeleteTodo"></app-sidebar>
		<button class="menu" @click="isNavOpen = !isNavOpen">Menu</button>
	</div>
</template>

<script>
require('./css/main.css');
import Nav from './components/Nav.vue';
import Main from './components/Main.vue';
import Sidebar from './components/Sidebar.vue';

import todoLists from './fixtures.js';

export default {
	name: 'app',
	components: {
		appNav: Nav,
		appMain: Main,
		appSidebar: Sidebar
	},
	methods: {
		updateCurrentIndex(value) {
			this.currentListIndex = value;
			if (this.isNavOpen) this.isNavOpen = false;
		},
		onOpenSidebar(content) {
			this.isSidebarOpen = true;
			this.isNavOpen = false;
			this.sidebarContentToShow = content;
		},
		onCloseSidebar() {
			this.isSidebarOpen = false;
		},
		onListCreated(data) {
			this.todoLists.push(data);
			this.currentListIndex = this.todoLists.length - 1;
			this.isSidebarOpen = false;
		},
		onListEdit(content) {
			this.isSidebarOpen = true;
			this.isNavOpen = false;
			this.sidebarContentToShow = content;
		},
		onListDelete() {
			this.todoLists.splice(this.currentListIndex, 1);
			this.currentListIndex = 0;
			this.isSidebarOpen = false;
		},
		onCreateTodo(data) {
			this.todoLists[this.currentListIndex].items.push({
				name: data.name,
				isCompleted: data.isCompleted
			});

			this.isSidebarOpen = false;
		},
		onDeleteTodo() {
			this.todoLists[this.currentListIndex].items.splice(this.currentTodoIndex, 1);
			this.isSidebarOpen = false;
			this.currentTodoIndex = 0;
		},
		onEditTodo(index) {
			this.currentTodoIndex = index;
		},
		updateTodoLocalStorage() {
			localStorage.setItem('todoLocalStorage', JSON.stringify(this.todoLists));
		}
	},
	// Every time we have a change in our todoLists, we will call our updateTodoLocalStorage method.
	//  As our object has nested values, we want to detect changes inside this values. We can pass deep: true to do so.
	watch: {
		todoLists: {
			handler() {
				this.updateTodoLocalStorage();
			},
			deep: true
		}
	},
	created() {
		this.todoLists = JSON.parse(
		localStorage.getItem("todoLocalStorage") || "[]"
		);
	},
	data() {
		return {
			isNavOpen: false,
			isSidebarOpen: false,
			currentListIndex: 0,
			currentTodoIndex: 0,
			sidebarContentToShow: null,
			todoLists: []
		};
	}
}
</script> 

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
