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
			<form v-if="sidebarContentToShow === 'editList'">
				<h3>Edit list</h3>
				<label for="listTitle">Title:</label>
				<input id="listTitle" name="listTitle" placeholder="My amazing next trip to south america" type="text">
				<label for="listKeyword">Keyword:</label>
				<input id="listKeyword" name="listKeyword" placeholder="Colombia" type="text">
				<div class="buttons">
					<button type="button" class="is-danger" @click="deleteList">Delete list</button>
					<button type="button" class="is-confirm">Done</button>
				</div>
			</form>
			<form v-if="sidebarContentToShow === 'createNewTodo'">
				<h3>Create a new todo</h3>
				<label for="todoName">Todo:</label>
				<input id="todoName" name="todoName" placeholder="Do things..." type="text">
				<label for="todoCompleted">
					<input name="todoCompleted" id="todoCompleted" type="checkbox"> Is completed</label>
				<div class="buttons">
					<button type="button" class="is-danger">Cancel</button>
					<button type="button" class="is-confirm">Create todo</button>
				</div>
			</form>
			<form v-if="sidebarContentToShow === 'editTodo'">
				<h3>Edit todo</h3>
				<label for="todoName">Todo:</label>
				<input id="todoName" name="todoName" placeholder="Do things..." type="text">
				<label for="todoCompleted">
					<input name="todoCompleted" id="todoCompleted" type="checkbox"> Is completed</label>
				<div class="buttons">
					<button type="button" class="is-danger">Delete todo</button>
					<button type="button" class="is-confirm">Done</button>
				</div>
			</form>
			<button type="button" class="is-danger" @click="closeSidebar">Cancel</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['isSidebarOpen', 'sidebarContentToShow'],
	data() {
		return {
			tempNewList: [{
				title: null,
				keyword: null
			}]
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
		deleteList(){
			this.$emit('deleteList');
		}
	}
}
</script>

<style>
</style>
