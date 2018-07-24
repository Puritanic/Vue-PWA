<template>
	<div class="sidebar" :class="{'is-open': isSidebarOpen}">
		<div class="sidebar-content">
			<!--createNewList-->
			<form>
				<h3>Create a new list</h3>
				<label for="listTitle">Title:</label>
				<input id="listTitle" name="listTitle" placeholder="My amazing next trip to south america" type="text">
				<label for="listKeyword">Keyword:</label>
				<input id="listKeyword" name="listKeyword" placeholder="Colombia" type="text">
				<div class="buttons">
					<button type="button" class="is-danger">Cancel</button>
					<button type="button" class="is-confirm">Create List</button>
				</div>
			</form>
			<!--editList-->
			<!-- <form>
                    <h3>Edit list</h3>
                    <label for="listTitle">Title:</label>
                    <input id="listTitle" name="listTitle" placeholder="My amazing next trip to south america"
                        type="text">
                    <label for="listKeyword">Keyword:</label>
                    <input id="listKeyword" name="listKeyword" placeholder="Colombia" type="text">
                    <div class="buttons">
                        <button type="button" class="is-danger">Delete list</button>
                        <button type="button" class="is-confirm">Done</button>
                    </div>
                </form> -->
			<!--createNewTodo-->
			<!-- <form>
                    <h3>Create a new todo</h3>
                    <label for="todoName">Todo:</label>
                    <input id="todoName" name="todoName" placeholder="Do things..." type="text">
                    <label for="todoCompleted">
                        <input name="todoCompleted" id="todoCompleted" type="checkbox"> Is completed</label>
                    <div class="buttons">
                        <button type="button" class="is-danger">Cancel</button>
                        <button type="button" class="is-confirm">Create todo</button>
                    </div>
                </form> -->
			<!--editTodo-->
			<!-- <form>
                    <h3>Edit todo</h3>
                    <label for="todoName">Todo:</label>
                    <input id="todoName" name="todoName" placeholder="Do things..." type="text">
                    <label for="todoCompleted">
                        <input name="todoCompleted" id="todoCompleted" type="checkbox"> Is completed</label>
                    <div class="buttons">
                        <button type="button" class="is-danger">Delete todo</button>
                        <button type="button" class="is-confirm">Done</button>
                    </div>
                </form> -->
		</div>
	</div>
</template>

<script>
export default {
	props: ['isSidebarOpen']
}
</script>

<style>
</style>
