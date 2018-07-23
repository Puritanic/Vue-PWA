<template>
	<div class="page-container">
		<app-nav :isNavOpen="isNavOpen"></app-nav>
		<app-main></app-main>
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
  data(){
	  return {
		isNavOpen: false
	  }
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
