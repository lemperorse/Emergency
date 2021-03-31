<template>
<v-parallax height="220" dark class="bg">
    <v-row align="center" justify="center"> 
        <v-col class="text-left" cols="12">
            <h1 class="font-weight-bold mb-1 tg animate__animated animate__fadeInUp">
                Words 
            </h1>
            <h3 class="subheading tg animate__animated animate__fadeInUp">
                to know
            </h3>
        </v-col>
    </v-row>
</v-parallax>
</template>

<style scoped>
.bg {
    background-image: url("https://images.pexels.com/photos/1808200/pexels-photo-1808200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
    background-color: #2B32B2;
    /* height: 200px; */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-radius: 5px;
}
.tg{ 
  color: white;
  text-shadow: 2px 2px 10px #000000;
}
</style>
