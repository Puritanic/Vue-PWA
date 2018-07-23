<template>
	<div class="page-container">
		<app-nav :isNavOpen="isNavOpen" :todoLists="todoLists" :currentListIndex="currentListIndex"></app-nav>
		<app-main :currentTodo="todoLists[currentListIndex]"></app-main>
		<app-sidebar></app-sidebar>
		<button class="menu" @click="isNavOpen = !isNavOpen">Menu</button>
	</div>
</template>

<script>
require('./css/main.css');
import Nav from './components/Nav.vue';
import Main from './components/Main.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'app',
  components: {
	appNav: Nav,
	appMain: Main,
	appSidebar: Sidebar
  },
  methods: {
	  updateCurrentIndex(value){
		  this.currentListIndex = value;
	  }
  },
  created() {
	this.$on('changeListIndex', (index) => {
		this.updateCurrentIndex(index);
		if(this.isNavOpen) this.isNavOpen = false;
	});
  },
   data() {
	return {
		isNavOpen: false,
		currentListIndex: 0,
		todoLists: [
			{
				title: '✈️ Trip to japan',
				keyword: 'japan',
				items: [
					{ name: 'Eat ramen', isCompleted: true },
					{ name: 'Visit mt Fuji', isCompleted: false },
					{ name: 'Learn japanese', isCompleted: false },
				],
			},
			{
				title: '🏂 Ski trip to the Alps',
				keyword: 'Alps',
				items: [
					{ name: 'Find a chalet', isCompleted: true },
					{ name: 'Learn how to ski', isCompleted: false },
				],
			},
			{
				title: '🍉 Groceries',
				keyword: 'Food',
				items: [
					{ name: 'Apples', isCompleted: false },
					{ name: 'Banana', isCompleted: true },
					{ name: 'Tomatoes', isCompleted: false },
					{ name: 'Bread', isCompleted: true },
				],
			},
		],
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
