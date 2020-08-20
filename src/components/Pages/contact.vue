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
							<div class="alert" v-if="isError">
								<strong><p>Please check your input.<br>
								Name must be valid and must be entered,<br>
								Email id must be valid and must be entered,<br>
								Phone number must be valid,10digit and must be entered,<br>
								Message must be entered.</p></strong>
							</div>
							
							<div class="contact-form">
								<div class="row">
									<div class="col-md-6"><input  type="text" v-model="contactUs.name" placeholder="Your name..."></div>
									<div class="col-md-6"><input v-model="contactUs.emailId" type="email" placeholder="Email Addresss..."></div>
								</div>
								<div class="row">
									<div class="col-md-6"><input type="text" oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');" maxlength=10 v-model="contactUs.phoneNumber" placeholder="Phone Number..."></div>
								</div>
								<textarea name="" placeholder="Message..." v-model="contactUs.message"></textarea>
								<div class="alert2" v-if="submited">
									<strong><p>Thank you for your query.<br>
									</p></strong>
									<br>
								</div>
								<br>
								<div class="text-right">
									<button type="button" v-on:click="submitContact" class="btn btn-success">Send Message</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main> <!-- .main-content -->
</template>
<script>
import axios from 'axios';

export default {
    name: 'Contact',
	data(){
		return{
			contactUs : {
				name: '',
				emailId: '',
				phoneNumber: '',
				message: ''
			},
			isError: false,
			submited: false
		}
	},
	methods:{
		validateContact(){
			var errMsg = '';
			if(this.contactUs.name == ''){ errMsg += 'Invalid name' }
			if(!this.contactUs.emailId.includes('@') || !this.contactUs.emailId.includes('.com')){ errMsg += 'Invalid email' }
			if(this.contactUs.phoneNumber.length != 10){ errMsg += 'Invalid phone number' }
			if(this.contactUs.message == ''){ errMsg += 'Invalid Message' }
			if(errMsg == ''){
				return true;
			}else{
				this.isError = true;
				return false;
			}
		},
		submitContact(){
			this.submited = false
			if(this.validateContact()){
				this.isError = false
				 axios.post(`https://about-nepal-weather.herokuapp.com/contacts`,
				 	this.contactUs)
					.then(response => {
						if(response.status == 200 && response.statusText == 'OK'){
							this.contactUs.name= ''
							this.contactUs.emailId= ''
							this.contactUs.phoneNumber= ''
							this.contactUs.message= ''
							this.submited = true
						}
					})
					.catch(e => {
						console.log(e);
				})
			}
		},
	}
}
</script>

<style scoped>
.alert {
  padding: 20px;
  background-color: #f44336;
  color: white;
}
.alert2 {
  padding: 20px;
  background-color: green;
  color: white;
}
.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}
</style>