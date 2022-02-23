<template>
  <div class="home-page">
	<Baner/>
	<Slider/>
	<Slider/>
	<Promo/>
	<Footer/>
  </div>
</template>

<script>
import Baner from '../components/Baner.vue'
import Slider from '../components/Slider.vue'
import Promo from '../components/Promo.vue'
import Footer from '../components/Footer.vue'
export default {
	components: {
		Baner,
		Slider,
		Promo,
		Footer
	},

}
</script>

<style lang="scss" scoped >

</style>