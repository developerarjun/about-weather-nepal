<template>
    <main class="main-content">
				<div class="container">
					<div class="breadcrumb">
						<router-link tag="a" to="/">Home</router-link>
						<span>Contact</span>
					</div>
				</div>
				<div class="fullwidth-block">
					<div class="container">
						<div class="col-md-5">
							<div class="contact-details">
							    <div style="width: 100%"><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=kathmandu+(Kathmandu)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.maps.ie/route-planner.htm"></a></div>
								<div class="contact-info">
									<address>
										<img src="@/assets/images/icon-marker.png" alt="">
										<p>About Weather Nepal. <br>
										Kathmandu, Nepal</p>
									</address>
									
									<p><img src="@/assets/images/icon-phone.png" alt="About weather Nepal Contact Number">&nbsp;&nbsp;&nbsp;+977 9867278173</p>
									<p><img src="@/assets/images/icon-envelope.png" alt="About weather Nepal Email address">&nbsp;&nbsp;&nbsp;arjun.ghimire8386@gmail.com</p>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-md-offset-1">
							<h2 class="section-title">Contact us</h2>
							<form action="#" class="contact-form">
								<div class="row">
									<div class="col-md-6"><input type="text" placeholder="Your name..."></div>
									<div class="col-md-6"><input type="text" placeholder="Email Addresss..."></div>
								</div>
								<div class="row">
									<div class="col-md-6"><input type="text" placeholder="Phone Number..."></div>
								</div>
								<textarea name="" placeholder="Message..."></textarea>
								<div class="text-right">
									<input type="submit" value="Send message">
								</div>
							</form>

						</div>
					</div>
				</div>
			</main> <!-- .main-content -->
</template>
<script>
export default {
    name: 'Contact',
}
</script>