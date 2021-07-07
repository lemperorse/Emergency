<template>
<div v-if="response" class="rbg">
    <scenes-Parallaxsc :name="course.name" :icon="course.icon" />

    <div v-for="(sense,i) in senses" :key="i" @click="openVideo(i)">
        <home-card2 :img="sense.icon" :name="sense.title"></home-card2>
    </div>
  <div @click="$router.push(`/exercises/?lang=${$route.query.lang}&course=${$route.query.course}`)" >
    <home-card2 img="/book.png" name="Exercise" ></home-card2>

  </div>

    <v-dialog v-if="dialog" v-model="dialog" scrollable persistent :overlay="false" max-width="500px" transition="dialog-transition">
        <v-card>
            <v-card-title primary-title>
                Video<v-spacer></v-spacer>
                <v-btn @click="dialog = false" rounded fab color="error">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <h2 class="text-xl">{{currentSense.title}} </h2>
                <br>
                <div v-if="dialog ">
                    <video v-if="currentSense.enabled_link" autoplay controls>
                        <source :src="currentSense.video_link" type="video/mp4">
                    </video>
                        <video v-else autoplay controls>
                        <source :src="currentSense.video" type="video/mp4">
                    </video>
                </div>

            </v-card-text>
        </v-card>
    </v-dialog>

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
import _ from 'lodash'
@Component({
    components: {},
})
export default class Home extends Vue {

    private course: any = {}
    private senses: any = []
    private response: boolean = false
    private currentSense: any = {}
    private dialog: boolean = false
    async created() {
        let courseId = this.$route.query.course
        let langId = this.$route.query.lang
        if (courseId && langId) {
            this.course = _.find(Course.courses, { id: Number(courseId) })
            console.log(this.course)
            this.senses = _.filter(Course.senses, { course: Number(courseId), accent: Number(langId) })
            this.response = true;
        }
    }

    async openVideo(index: number) {
        this.currentSense = this.senses[index]
        this.dialog = true;
    }

}
</script>

<style scoped>
.tg {
    text-shadow: 2px 2px 4px rgb(104, 104, 104);
}

/* Style the list */
ul.breadcrumb {
    padding: 10px 16px;
    list-style: none;
    background-color: #eee;
    /* background-color: rgb(255, 255, 255); */
    border-radius: 5px;
}

/* Display list items side by side */
ul.breadcrumb li {
    display: inline;
    font-size: 18px;
}

/* Add a slash symbol (/) before/behind each list item */
ul.breadcrumb li+li:before {
    padding: 8px;
    color: black;
    content: "|\00a0";
}

/* Add a color to all links inside the list */
ul.breadcrumb li a {
    color: #0275d8;
    text-decoration: none;
}

/* Add a color on mouse-over */
ul.breadcrumb li a:hover {
    color: #01447e;
    text-decoration: underline;
}

li {
    color: black;
}

.rbg{
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='800' height='1300' preserveAspectRatio='none' viewBox='0 0 800 1300'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1019%26quot%3b)' fill='none'%3e%3ccircle r='66.66666666666667' cx='559.78' cy='1246.26' fill='rgba(147%2c 180%2c 112%2c 1)'%3e%3c/circle%3e%3cpath d='M613.72 1143.27L608.2 1154.83 595.71 1151.98 590.19 1163.53 577.71 1160.69 572.19 1172.24 559.7 1169.39M610.23 1136.07L604.71 1147.62 592.23 1144.78 586.71 1156.33 574.22 1153.48 568.7 1165.04 556.22 1162.19M606.75 1128.87L601.23 1140.42 588.74 1137.57 583.23 1149.13 570.74 1146.28 565.22 1157.84 552.74 1154.99' stroke='%23037b0b' stroke-width='2.87' stroke-dasharray='3%2c 2'%3e%3c/path%3e%3crect width='355' height='355' clip-path='url(%26quot%3b%23SvgjsClipPath1020%26quot%3b)' x='16.44' y='-122.49' fill='url(%23SvgjsPattern1021)' transform='rotate(333.09%2c 193.94%2c 55.01)'%3e%3c/rect%3e%3cpath d='M545.47 1102.69a5.6 5.6 0 1 0-10.96-2.27 5.6 5.6 0 1 0 10.96 2.27zM529.81 1099.44a5.6 5.6 0 1 0-10.97-2.27 5.6 5.6 0 1 0 10.97 2.27zM514.14 1096.2a5.6 5.6 0 1 0-10.97-2.28 5.6 5.6 0 1 0 10.97 2.28zM498.47 1092.95a5.6 5.6 0 1 0-10.96-2.27 5.6 5.6 0 1 0 10.96 2.27z' fill='%23037b0b'%3e%3c/path%3e%3crect width='516.8' height='516.8' clip-path='url(%26quot%3b%23SvgjsClipPath1022%26quot%3b)' x='360.52' y='676.92' fill='url(%23SvgjsPattern1023)' transform='rotate(244.02%2c 618.92%2c 935.32)'%3e%3c/rect%3e%3ccircle r='112.64085680983055' cx='727.39' cy='1069.18' fill='rgba(49%2c 56%2c 136%2c 1)'%3e%3c/circle%3e%3crect width='252' height='252' clip-path='url(%26quot%3b%23SvgjsClipPath1024%26quot%3b)' x='-66.87' y='894.31' fill='url(%23SvgjsPattern1025)' transform='rotate(199.76%2c 59.13%2c 1020.31)'%3e%3c/rect%3e%3cpath d='M118.04 1148.76L122.17 1160.88 111.25 1167.57 115.38 1179.69 104.46 1186.38 108.58 1198.5 97.66 1205.19' stroke='%23e73635' stroke-width='2.97'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1019'%3e%3crect width='800' height='1300' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='355' height='7.1' patternUnits='userSpaceOnUse' id='SvgjsPattern1021'%3e%3crect width='355' height='3.55' x='0' y='0' fill='rgba(49%2c 56%2c 136%2c 1)'%3e%3c/rect%3e%3crect width='355' height='3.55' x='0' y='3.55' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1020'%3e%3ccircle r='88.75' cx='193.94' cy='55.01'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='516.8' height='6.8' patternUnits='userSpaceOnUse' id='SvgjsPattern1023'%3e%3crect width='516.8' height='3.4' x='0' y='0' fill='rgba(49%2c 56%2c 136%2c 1)'%3e%3c/rect%3e%3crect width='516.8' height='3.4' x='0' y='3.4' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1022'%3e%3ccircle r='129.2' cx='618.92' cy='935.32'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='252' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1025'%3e%3crect width='252' height='3' x='0' y='0' fill='rgba(90%2c 228%2c 232%2c 1)'%3e%3c/rect%3e%3crect width='252' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1024'%3e%3ccircle r='63' cx='59.13' cy='1020.31'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
}
</style>
