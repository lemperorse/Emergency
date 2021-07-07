<template>
<div>

    <home-Parallax />
    <div class="p-4">
        <h2 class="text-2xl font-bold">Courses in progress</h2>
        <div v-for="(course,i) in courses" :key="i">
             <home-Card :path="`/vocabulary?course=${course.id}`" :name="course.name" :img="course.icon" :color="colors[Math.floor(Math.random() * 5)]" />
             
        </div>
          <home-Card img="/book.png" name="Knowledge"  color="border-pink-600" />
      
    </div>

</div>
</template>

<script lang="ts">
import { Core } from '@/vuexes/core'
import { Course } from '@/vuexes/course'
import {
    Component,
    Vue,
    Watch,
} from "nuxt-property-decorator"
@Component({
    components: {},
})
export default class Home extends Vue {
 
    colors:string[] = ['border-green-600','border-pink-600','border-purple-600','border-blue-600','border-yellow-600','border-yellow-500']
  

    get courses(){
        return Course.courses
    }

    get colorIndex(){
        return Math.floor(Math.random() * 4);
    }
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
