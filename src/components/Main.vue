<template>
	<main>
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
				<button class="is-danger">Edit todo</button>
			</li>
			<li>
				<button class="is-add">New Todo</button>
			</li>
		</ul>
	</main>
</template>

<script>
export default {
	props: ['currentTodo'],
	methods: {
		editList(){
			this.$emit('editList', 'editList');
		}
	}
}
</script>

<style>
</style>
