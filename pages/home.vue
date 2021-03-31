<template>
<div>
    <!-- <div class="d-flex justify-space-between mb-6">
        <div class="mt-6">
            <p class="text-3xl tg text-bold animate__animated animate__slideInUp">Emergency</p>
            <p class="text-xl tg animate__animated animate__slideInUp">Medical Services</p>
        </div>
		<v-img class="pill animate__animated animate__fadeInUp" src="https://cdn.pixabay.com/photo/2012/04/01/18/54/paramedic-24021_1280.png" alt="" max-height="124" max-width="124">
        </v-img>
        <v-avatar color="primary" size="124"></v-avatar>
    </div> -->
    <home-Parallax />
    <p class="mt-4 tg animate__animated animate__slideInUp text-3xl text-bold">Lesson</p>
    <home-Card />
</div>
</template>

<script>
export default {
    components: {},
}
</script>

<style scoped>
.cloud-text {
    font-family: 'Coiny', cursive;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/clouds.jpg);
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

.tg {
    text-shadow: 2px 2px 6px rgb(104, 104, 104);
}
</style>
