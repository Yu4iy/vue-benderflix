<template>

<div class="container">
	<div v-if="topRated != null">

		
		<h2 class="slider-title">I film più popolari </h2>
		<swiper
			:slides-per-view="6"
			:space-between="0"
			:loop="false"
			:pagination="false"
			:navigation="true"
			@swiper="onSwiper"
			@slideChange="onSlideChange"
			

		>
			<swiper-slide
			v-for="(serial, index) in topRated" :key="index"
			class="test"
			:class="{test_2: true}"
			>
			<!-- <div>{{ 34+n }}</div> -->


					<div class="card">
						<div class="card__vote">75</div>

						<img 
						:src="`https://image.tmdb.org/t/p/original/${serial.poster_path}`" 
						alt=""
						v-if=" serial.poster_path !== null"
						>
						<div v-else>
							<img src="../assets/img-not-found.png" alt="">
						</div>
						
						<div class="card__info" >
							<h2 class="card__title">{{serial.original_title}}</h2>
						</div>	
						<h2 class="card__more">Scopri di più</h2>
					</div>


			</swiper-slide>
		</swiper>
	</div>
	<div v-else class="else">
	<h2 class="slider-title">LOAD</h2>
	</div>	 
</div>
</template>

<script>
import { Navigation, Pagination, Autoplay} from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

// Import Swiper styles
import 'swiper/swiper-bundle.css'
import axios from 'axios'

SwiperCore.use([Navigation, Pagination, Autoplay])

export default {
	data(){
		return{
			topRated:null
		}
	},
  components: {
    Swiper,
    SwiperSlide
  },
	beforeMount(){
	this.getTopRated() 
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
    },
	getTopRated() {
		axios
		.get('https://api.themoviedb.org/3/movie/top_rated?api_key=bcb47ae21b247fb462aab053c0af2cb3&language=en-US&page=1')
		.then(list => { 
		console.log(list.data.results	);
		this.topRated = list.data.results
		});
	}
  }
}
</script>

<style lang="scss"  scoped>

	.slider-title{
		color: rgba(255, 255, 255, 0.877);
		margin: 15px 15px;
	}
	.card{
		flex: 1 0 calc(20% - 30px);
		max-width: 250px;
		height: 365px;
		position: relative;
		background: rgba(88, 16, 16, 0.377);
		display: flex;
		justify-content: center;
		align-items: center;
		border: 3px dotted rgba(194, 25, 25, 0.589);
		transition: linear 0.2s;
		position: relative;
		overflow: hidden;
		img{
		width: 100%;
		}
		.card__vote{
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 20px;
			background: rgba(153, 51, 51, 0.13);
			max-width: 40px;
			max-height: 40px;
			width: 100%;
			height: 100%;
			color: rgb(248, 248, 0);
			position: absolute;
			top: -50px;
			right: -50px;
			border-radius:0px 0px 0px 10px;
			border-left: 3px dotted rgb(143, 22, 22);
			border-bottom: 3px dotted rgb(102, 16, 16);
			z-index: 35;
			transition: linear 0.2s;
			
		}
		
		&::after{
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 2;
			background: rgba(0, 0, 0, 0);
			transition: linear 0.2s;
			
		}
		
		&:hover::after{
			background: rgba(0, 0, 0, 0.822);

			
		}
	

		&:hover .card__vote{
				top: 0px;
				right: 0px;
			}
		&:hover .card__more{
				transform: scale(1);
			}
		&:hover .card__info{
				transform: scale(1);
				top: 80px;
			}	
		.card__info{
			position: absolute;
			top: -80px;
			z-index: 6;
			font: 700;
			text-align: center;
			padding: 0 5px;
			transform: scale(0);
			transition: top linear 0.2s;

			.card__title{
				color: #fff;
				font-size: 25;
				text-transform: uppercase;
			}


		}
		
		.card__more{
			z-index: 3;
			position: absolute;
			bottom: 10px;
			width: 90%;
			text-align: center;
			background: rgba(0, 0, 0, 0);
			padding: 5px;
			color: red;
			text-transform: uppercase;
			border: 4px solid rgba(255, 0, 0, 0);
			border-radius: 2px;
			transform: scale(0);
			transition: cubic-bezier(0.895, 0.03, 0.685, 0.22) 0.2s;
			cursor: pointer;
			transition: linear 0.2s;
			&:hover{
				border: 4px solid rgb(255, 0, 0);
				background: rgba(0, 0, 0, 0.308);
				color: rgb(255, 0, 0);
				
			}

		}
	}
</style>