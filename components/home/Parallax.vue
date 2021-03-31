<template>
<v-parallax height="220" dark class="bg">
    <div class="mt-4">
        <v-img class="pill animate__animated animate__fadeInUp" src="https://images-na.ssl-images-amazon.com/images/I/51WVh%2B%2BG-vL._AC_SX355_.jpg" alt="" max-height="60" max-width="60">
        </v-img>
    </div>
    <v-row align="center" justify="center">
        <v-col class="text-left" cols="12">
            <h1 class=" font-weight-bold mb-1 td animate__animated animate__fadeInUp">
                English for
            </h1>
            <h3 class="subheading font-weight-bold td animate__animated animate__fadeInUp">
                Emergency Medical Services
            </h3>
        </v-col>
    </v-row>
</v-parallax>
</template>

<style scoped>
.bg {
    background-image: url("https://images.pexels.com/photos/6520115/pexels-photo-6520115.jpeg?auto=compress&cs=tinysrgb&h=650&w=940");
    background-color: #2B32B2;
    /* height: 200px; */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-radius: 5px;
}
.pill{
    border-radius: 30px;
} 
.tg{ 
  /* background: -webkit-linear-gradient(#eee, #0072ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px ; */
  color: white;
  text-shadow: 2px 2px 10px #000000;
} 
.cloud-text {
	font-family: 'Coiny', cursive;
	-webkit-background-clip: text;
  	-webkit-text-fill-color: transparent; 
	background-image: url(https://images.pexels.com/photos/314726/pexels-photo-314726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
	background-size: auto;
	background-attachment: unset;
	background-position: 0%;
	/* width: 80%;
	margin: 10%; */
	font-size: 36px;
	animation: clouds-moving infinite 220s;
	animation-fill-mode: forwards;
	animation-play-state: running;
	animation-timing-function: linear;
	text-align: left;
}
 .cloud-text1 {
	font-family: 'Coiny', cursive;
	-webkit-background-clip: text;
  	-webkit-text-fill-color: transparent; 
	background-image: url(https://images.pexels.com/photos/314726/pexels-photo-314726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
	background-size: auto;
	background-attachment: unset;
	background-position: 0%;
	/* width: 80%;
	margin: 10%; */
	font-size: 20px;
	animation: clouds-moving infinite 220s;
	animation-fill-mode: forwards;
	animation-play-state: running;
	animation-timing-function: linear;
	text-align: left;
}
@keyframes clouds-moving {
	0% {
		background-position: 0%;	
	}
	50% {
		background-position: 100%;	
	}
	100% {
		background-position: 0%;
	}
}
.attribute {
	position: relative;
	font-size: 26px;
	text-align: center;
}
</style>
