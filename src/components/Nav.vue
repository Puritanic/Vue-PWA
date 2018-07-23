<template>
	<nav :class="{'is-open': isNavOpen}">
		<ul>
			<li v-for="(todoList, index) in todoLists" :key="index" v-bind:class="{'is-active' : currentListIndex === index}">
				<button v-on:click="updateValue(index)">
					{{todoList.title}}
					<span>
						{{todoList.items.length}}
					</span>
				</button>
			</li>
			<li>
				<button class="is-add">Create a new list</button>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	props: ['isNavOpen', 'todoLists', 'currentListIndex'],
	computed: {},
	methods: {
    updateValue(value) {
	  this.$emit('changeListIndex', value);
    }
  }
}
</script>

<style>
</style>
