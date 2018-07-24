<template>
	<main v-if="currentTodo">
		<header :style="`background-image: url(https://source.unsplash.com/featured/?${currentTodo.keyword})`">
			<div class="header-content">
				<h1>{{ currentTodo.title }}</h1>
				<button class="is-primary" @click="editList">Edit list</button>
			</div>
		</header>
		<ul>
			<li v-for="(todo, index) in currentTodo.items" :key="index" :class="{'is-completed': todo.isCompleted}">
				<label :for="`todo${index}`">
					<input type="checkbox" :name="`todo${index}`" :id="`todo${index}`" :checked="todo.isCompleted" v-model="todo.isCompleted"> {{todo.name}}
				</label>
				<button class="is-danger" @click="onEditTodo(index)">Edit todo</button>
			</li>
			<li>
				<button class="is-add" @click="onAddNewTodo">New Todo</button>
			</li>
		</ul>
	</main>
	<main v-else>
		<header style="background-image: url(https://source.unsplash.com/featured/?cat">
			<div class="header-content">
				<h1>Please create a new list</h1>
				<button class="is-add" @click="createList">Create a new list</button>
			</div>
		</header>
	</main>
</template>

<script>
export default {
	props: ['currentTodo'],
	methods: {
		editList(){
			this.$emit('editList', 'editList');
		},
		createList(){
			this.$emit('openSidebar', 'createNewList');
		},
		onAddNewTodo(){
			this.$emit('openSidebar', 'createNewTodo');
		},
		onEditTodo(index){
			this.$emit('editTodo', index);
			this.$emit('openSidebar', 'editTodo');
		}
	}
}
</script>

<style>
</style>
