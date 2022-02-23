<template>
	<section class="promo">
		<div class="promo-container">
				<div class="promo__text">
						<h3>Watch everywhere.</h3>
						<p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
				</div>
				<div class="promo__video-item">
					<img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="">
					<video loop="" autoplay="" muted="" >
						<source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"> 
					</video>
				</div>
		</div>
	</section>
</template>

<script>
export default {
data(){
	return{

	}
},

methods:{

}
}
</script>

<style lang="scss" scoped>
@import '@/styles/globals';
@import '@/styles/variables';
.promo{
	background: black;
	border-top: 10px  solid #222222;
	border-bottom: 10px  solid #222222;
	height: 65vh;
	display: flex;
	align-items: center;
	justify-content: center;
		.promo-container{
		max-width: 1100px;
		margin: 0 auto;
		display: flex;
	}
		&__text {
				width: 50%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				margin:  0 40px 0 0 ;
				h3{
					color: #fff;
					font-size: 45px;
					margin: .75em 0 .25em;
				}
				p{
					color: #fff;
					font-size: 26px;
				}

		}

		&__video-item {
			display: flex;
			position: relative;
			width: 50%;

			img{
				z-index: 2;
			}
			video{
				width: 65%;
				position: absolute;
				top: 40px;
				left: 90px;
				z-index: 1;
			}
		}
}





</style>