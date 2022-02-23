<template>
  <div class="layout">
<!-- HEADER  -->
	<Header/>
<!-- ROUTER TAG	 -->
	<router-view></router-view>
	<home-page/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import HomePage from './home-page.vue'
export default {
	components: {
		Header,
		HomePage
		
	},

}
</script>

<style lang="scss" scoped >

	.layout{
	position: relative;
	background: url('https://www.logitheque.com/en/wp-content/uploads/sites/6/2019/07/netflix-image.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	height: 100%;
	min-height: 100vh;
	z-index: 1;
		&::after{
			content: '';
			position: absolute;
			background: rgba(0, 0, 0, 0.815);
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: -1;
		}
	}
</style>