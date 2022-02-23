<template>
	<footer class="footer">
		<h5 class="footer__title">Questions? Call 800-130-365</h5>
		<div class="footer__links">
			<ul>
				<li><a href="">FAQ</a></li>
				<li><a href="">Investor Relations</a></li>
				<li><a href="">Ways to Watch</a></li>
				<li><a href="">Corporate Information</a></li>
				<li><a href="">Only on Netflix</a></li>
			</ul>
			<ul>
				<li><a href="">Help Center</a></li>
				<li><a href="">Jobs</a></li>
				<li><a href="">Terms of Use</a></li>
				<li><a href="">Contact Us</a></li>
			</ul>
			<ul>
				<li><a href="">Account</a></li>
				<li><a href="">Redeem Gift Cards</a></li>
				<li><a href="">Privacy</a></li>
				<li><a href="">Speed Test</a></li>
			</ul>
			<ul>
				<li><a href="">Media Center</a></li>
				<li><a href="">Buy Gift Cards</a></li>
				<li><a href="">Cookie Preferences</a></li>
				<li><a href="">Legal Notices</a></li>
			</ul>
		</div>
	</footer>
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
.footer {
		max-width: 1000px;
		margin: 0 auto;
		padding: 100px 0;

		&__title {
			color: #757575;
			font-size: 25px;
			margin: 15px 0;
			
		}

		&__links {
			display: flex;
			justify-content: space-between;
			li{
				margin-bottom: 10px;
			}
			a{
				color: #757575;
				font-size: 18px;
				transition: linear 0.5s;
				&:hover{
					text-decoration: underline;
				}
			}
		}
}

</style>