<template>
	<nav :class="{'is-open': isNavOpen}">
		<ul>
			<li v-for="(todoList, index) in todoLists" :key="index" :class="{'is-active' : currentListIndex === index}">
				<button v-on:click="updateValue(index)">
					{{todoList.title}}
					<span>
						{{todoList.items.length}}
					</span>
				</button>
			</li>
			<li>
				<button class="is-add" @click="openSidebar">Create a new list</button>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	props: ['isNavOpen', 'todoLists', 'currentListIndex'],
	methods: {
		updateValue(value) {
			this.$emit('changeListIndex', value);
		},
		openSidebar(){
			this.$emit('openSidebar');
		}
	}
}
</script>

<style>
</style>
