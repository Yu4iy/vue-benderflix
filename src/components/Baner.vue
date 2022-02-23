<template>
  <div >
    <swiper
      :slides-per-view="1"
      :space-between="1"
      :loop="true"
      :pagination="false"
      :navigation="false"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
		:autoplay="{
      delay: 4000,
      disableOnInteraction: false,
		pauseOnMouseEnter:true
    }"
    >
      <swiper-slide>
			<div class="baner-img-wraper">
				<img src="https://m.media-amazon.com/images/S/sonata-images-prod/IT_UCL_Launch_Atletico_Manchester_Match/f6e25bac-15d5-4dad-a809-b2e19f13dd7f._UR3000,600_SX1500_FMwebp_.jpeg" alt="">
			</div>

      </swiper-slide  >
		<swiper-slide>
			<div class="baner-img-wraper">
				<img src="https://m.media-amazon.com/images/G/01/digital/video/sonata/IT_3P_Superhero_STARZPLAY_Castle_Rock_S2/83847afe-3c18-4708-9d1b-7ce6fed34761._UR3000,600_SX1500_FMwebp_.jpg" alt="">
			</div>
      </swiper-slide>
				<swiper-slide>
			<div class="baner-img-wraper">
				<img src="https://m.media-amazon.com/images/S/sonata-images-prod/IT_TVOD_GO_TheMatrixResurrections_PVOD/cce900f9-228c-4a31-b656-be12bd132766._UR3000,600_SX1500_FMwebp_.jpeg" alt="">
			</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Navigation, Pagination, Autoplay} from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Autoplay])

export default {
  components: {
    Swiper,
    SwiperSlide
  },

  methods: {
    getImageUrl (imageId) {
      return `https://picsum.photos/600/400/?image=${imageId}`
    },
    onSwiper (swiper) {
      console.log(swiper)
    },
    onSlideChange () {
      console.log('slide change')
    }
  }
}
</script>

<style lang="scss" >
	.baner-img-wraper{
		// width: 100%;
		// background: red;
		// margin:  0 25px;

		img{
			height: 100%;
			width: 100%;
			padding: 90px 0 0  0;
			object-fit: cover;
		}
	}
</style>