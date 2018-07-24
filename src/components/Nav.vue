<template>
	<nav :class="{'is-open': isNavOpen}">
		<ul>
			<li v-for="(todoList, index) in todoLists" :key="index" :class="{'is-active' : currentListIndex === index}">
				<button v-on:click="updateValue(index)">
					{{todoList.title}}
					<span>
						{{totalTodosCompleted(index)}} / {{todoList.items.length}}
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
			this.$emit('openSidebar', 'createNewList');
		},
		totalTodosCompleted(i){
			let total = 0;
			for (let j = 0; j < this.todoLists[i].items.length; j++) {
				if(this.todoLists[i].items[j].isCompleted){
					total++;
				}
			}
			return total;
		}
	}
}
</script>

<style>
</style>
