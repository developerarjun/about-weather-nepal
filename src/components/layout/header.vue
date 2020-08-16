<template>
    	<div class="site-header">
				<div class="container">
					<router-link to="/" class="branding">
						<img src="@/assets/images/logo.png" alt="" class="logo">
						<div class="logo-type">
							<h1 class="site-title">About Weather Nepal</h1>
							<small class="site-description">We keep the weather Information! </small>
						</div>
					</router-link>
					<!-- Default snippet for navigation -->
					<div class="main-navigation">
						<button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
						<ul class="menu">
							<router-link tag="li" class="menu-item"  active-class="current-menu-item" to="/"><a>Home</a></router-link>
							<router-link tag="li"  class="menu-item"  active-class="current-menu-item" to="/contact"><a>Contact</a></router-link>
						</ul> <!-- .menu -->
					</div> <!-- .main-navigation -->
					<div class="mobile-navigation"></div>
				</div>
			</div> 
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped lang="scss">
</style>