<template>
	<main>
		<header :style="`background-image: url(https://source.unsplash.com/featured/?${currentTodo.keyword})`">
			<div class="header-content">
				<h1>{{ currentTodo.title }}</h1>
				<button class="is-primary">Edit list</button>
			</div>
		</header>
		<ul>
			<li v-for="(todo, index) in currentTodo.items" :key="index" :class="{'is-completed': todo.isCompleted}">
				<label v-bind:for="`todo${index}`">
					<input type="checkbox" v-bind:name="`todo${index}`" v-bind:id="`todo${index}`" v-bind:checked="todo.isCompleted" v-model="todo.isCompleted"> {{todo.name}}
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
	props: ['currentTodo']
}
</script>

<style>
</style>
