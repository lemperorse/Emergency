<template>
<div v-if="response" class="ibg">
    <v-toolbar color="primary">
        <v-btn dark icon @click="$router.go(-1)">
            <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h2 class="text-white text-xl">{{course.name}}</h2>
    </v-toolbar>
    <br>
    <div class="p-2" v-for="(exercise,i) in exercises" :key="i">
        <p class="tezt-xl font-bold">
            <v-btn dark fab small color="blue">{{i+1}}</v-btn>&nbsp;{{exercise.question}}
        </p>
        <hr>
        <v-radio-group v-model="answer[i]">
            <v-radio :label="`a. ${exercise.a}`" value="a"></v-radio>
            <v-radio :label="`b. ${exercise.b}`" value="b"></v-radio>
            <v-radio :label="`c. ${exercise.c}`" value="c"></v-radio>
            <v-radio :label="`d. ${exercise.d}`" value="d"></v-radio>
        </v-radio-group>
    </div>
    <br>
    <center>
        <v-btn v-if="answer.length == exercises.length &&   checkAns() == -1" @click="checkScore()" rounded x-large color="success">
            <v-icon>mdi-check-circle</v-icon>&nbsp;Check Answer
        </v-btn>
    </center>

    <v-dialog v-model="dialog" scrollable fullscreen persistent :overlay="false" max-width="500px" transition="dialog-transition">
        <v-card class="xbg">
            <div class="flex flex-col justify-center items-center h-full">
                <h2 class="text-3xl text-green-600 font-bold">Your Score</h2><br>
                <i v-if="result.percent <=100 && result.percent >=90" class="em em-smiling_face_with_3_hearts text-6xl" aria-role="presentation" aria-label="THUMBS UP SIGN"></i>
                <i v-else-if="result.percent <=89 && result.percent >=50" class="em em-smiley text-6xl" aria-role="presentation" aria-label="THUMBS UP SIGN"></i>
                <i v-else-if="result.percent <=49 && result.percent >=20" class="em em-slightly_smiling_face text-6xl" aria-role="presentation" aria-label="THUMBS UP SIGN"></i>
                <i v-else class="em em-disappointed_relieved text-6xl" aria-role="presentation" aria-label="THUMBS UP SIGN"></i>
                <br>
                <h2 class="text-5xl font-bold text-blue-600">{{result.percent}} % </h2><br>
                <hr>
                <h2 class="text-yellow-600">Your score : {{result.score}}</h2>
                <h2 class="text-green-600">Full score : {{result.fullScore}}</h2><br>
                <div class="mt-4 ">
                        <v-btn outlined @click="$router.go(-1)"  color="blue">Go Back </v-btn>
                    <v-btn dark @click="restart()"  color="orange"><v-icon>mdi-pencil</v-icon>Try Agian</v-btn>
                
                </div>
            </div>
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
import _, { isNull } from 'lodash'
@Component({
    components: {},
})
export default class Home extends Vue {

    private course: any = {}
    private exercises: any = []
    private response: boolean = false
    private currentSense: any = {}
    private dialog: boolean = true
    private answer: any = []
    async created() {
        await this.restart();
    }

    result: any = {
        score: 0,
        percent: 0,
        fullScore: 0,
        fullPercent: 100
    }
    async checkScore() {
        let current = _.map(this.exercises, 'ans')
        let score = 0
        for (let i = 0; i < current.length; i++) {
            if (current[i] == this.answer[i]) {
                score += 1
            }

        }
        let percent = (100 * score) / current.length;

        this.result.score = score
        this.result.percent = percent
        this.result.fullScore = current.length
        this.dialog = true;

    }

    checkAns() {
        return _.findIndex(this.answer, _.isEmpty)
    }

    async restart(){
    let courseId = this.$route.query.course
        let langId = this.$route.query.lang
        if (courseId && langId) {
            this.course = _.find(Course.courses, { id: Number(courseId) })
            console.log(this.course)
            this.exercises = _.filter(Course.exercises, { course: Number(courseId), accent: Number(langId) })
            this.exercises = _.shuffle(this.exercises)
            this.answer = []
            this.dialog = false
            this.response = true;
        }
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

.xbg{

background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='800' height='1300' preserveAspectRatio='none' viewBox='0 0 800 1300'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1075%26quot%3b)' fill='none'%3e%3cpath d='M295.16 975.46a5.6 5.6 0 1 0 7.3 8.5 5.6 5.6 0 1 0-7.3-8.5zM305.59 987.6a5.6 5.6 0 1 0 7.3 8.5 5.6 5.6 0 1 0-7.3-8.5zM316.01 999.74a5.6 5.6 0 1 0 7.3 8.49 5.6 5.6 0 1 0-7.3-8.49zM326.44 1011.87a5.6 5.6 0 1 0 7.3 8.5 5.6 5.6 0 1 0-7.3-8.5zM262.18 961.61a5.6 5.6 0 1 0 7.29 8.5 5.6 5.6 0 1 0-7.29-8.5zM272.6 973.75a5.6 5.6 0 1 0 7.3 8.5 5.6 5.6 0 1 0-7.3-8.5zM283.03 985.89a5.6 5.6 0 1 0 7.29 8.49 5.6 5.6 0 1 0-7.29-8.49zM293.45 998.02a5.6 5.6 0 1 0 7.3 8.5 5.6 5.6 0 1 0-7.3-8.5z' fill='%23037b0b'%3e%3c/path%3e%3crect width='125.8' height='125.8' clip-path='url(%26quot%3b%23SvgjsClipPath1076%26quot%3b)' x='53.62' y='620.06' fill='url(%23SvgjsPattern1077)' transform='rotate(257.72%2c 116.52%2c 682.96)'%3e%3c/rect%3e%3cpath d='M163.89 206.09a5.6 5.6 0 1 0-10.43-4.09 5.6 5.6 0 1 0 10.43 4.09zM148.99 200.25a5.6 5.6 0 1 0-10.43-4.08 5.6 5.6 0 1 0 10.43 4.08zM134.09 194.42a5.6 5.6 0 1 0-10.43-4.09 5.6 5.6 0 1 0 10.43 4.09zM119.19 188.58a5.6 5.6 0 1 0-10.42-4.08 5.6 5.6 0 1 0 10.42 4.08z' stroke='%23037b0b' stroke-width='2.68'%3e%3c/path%3e%3cpath d='M766.95 1009.3L773.52 1020.29 764.24 1029.12 770.81 1040.11 761.53 1048.93 768.11 1059.93 758.83 1068.75' stroke='%23d3b714' stroke-width='2.38'%3e%3c/path%3e%3cpath d='M323.74 1252.84L334.61 1259.61 330.39 1271.7 341.26 1278.47 337.04 1290.56 347.91 1297.33 343.69 1309.42M316.19 1255.5L327.06 1262.27 322.84 1274.36 333.71 1281.13 329.49 1293.22 340.36 1299.99 336.14 1312.08' stroke='rgba(144%2c 107%2c 232%2c 1)' stroke-width='1' stroke-dasharray='3%2c 2'%3e%3c/path%3e%3crect width='408' height='408' clip-path='url(%26quot%3b%23SvgjsClipPath1078%26quot%3b)' x='58.99' y='1072.2' fill='url(%23SvgjsPattern1079)' transform='rotate(243.35%2c 262.99%2c 1276.2)'%3e%3c/rect%3e%3crect width='95.8' height='95.8' clip-path='url(%26quot%3b%23SvgjsClipPath1080%26quot%3b)' x='285.65' y='538.03' fill='url(%23SvgjsPattern1081)' transform='rotate(127.04%2c 333.55%2c 585.93)'%3e%3c/rect%3e%3crect width='60' height='60' clip-path='url(%26quot%3b%23SvgjsClipPath1082%26quot%3b)' x='322.64' y='388.23' fill='url(%23SvgjsPattern1083)' transform='rotate(129.65%2c 352.64%2c 418.23)'%3e%3c/rect%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1075'%3e%3crect width='800' height='1300' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='12.58' height='12.58' patternUnits='userSpaceOnUse' id='SvgjsPattern1077'%3e%3cpath d='M0 12.58L6.29 0L12.58 12.58' stroke='%23037b0b' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1076'%3e%3ccircle r='31.45' cx='116.52' cy='682.96'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1079'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='%23d3b714' fill='none' stroke-width='1.84'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1078'%3e%3ccircle r='102' cx='262.99' cy='1276.2'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='9.58' height='9.58' patternUnits='userSpaceOnUse' id='SvgjsPattern1081'%3e%3cpath d='M4.79 1L4.79 8.58M1 4.79L8.58 4.79' stroke='%23d3b714' fill='none' stroke-width='3.12'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1080'%3e%3ccircle r='23.95' cx='333.55' cy='585.93'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='60' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1083'%3e%3crect width='60' height='3' x='0' y='0' fill='%23e73635'%3e%3c/rect%3e%3crect width='60' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1082'%3e%3ccircle r='15' cx='352.64' cy='418.23'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
}

.ibg{

background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='800' height='600' preserveAspectRatio='none' viewBox='0 0 800 600'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1605%26quot%3b)' fill='none'%3e%3crect width='242.84' height='242.84' clip-path='url(%26quot%3b%23SvgjsClipPath1606%26quot%3b)' x='77.92' y='353.19' fill='url(%23SvgjsPattern1607)' transform='rotate(206.46%2c 199.34%2c 474.61)'%3e%3c/rect%3e%3crect width='156' height='156' clip-path='url(%26quot%3b%23SvgjsClipPath1608%26quot%3b)' x='207.24' y='162.29' fill='url(%23SvgjsPattern1609)' transform='rotate(231.81%2c 285.24%2c 240.29)'%3e%3c/rect%3e%3cpath d='M109.19 97.32a5.6 5.6 0 1 0 1.62-11.08 5.6 5.6 0 1 0-1.62 11.08zM111.5 81.49a5.6 5.6 0 1 0 1.61-11.09 5.6 5.6 0 1 0-1.61 11.09zM113.8 65.65a5.6 5.6 0 1 0 1.61-11.08 5.6 5.6 0 1 0-1.61 11.08zM116.11 49.82a5.6 5.6 0 1 0 1.61-11.08 5.6 5.6 0 1 0-1.61 11.08zM120.42 131.29a5.6 5.6 0 1 0 1.61-11.08 5.6 5.6 0 1 0-1.61 11.08zM122.72 115.46a5.6 5.6 0 1 0 1.62-11.09 5.6 5.6 0 1 0-1.62 11.09zM125.03 99.62a5.6 5.6 0 1 0 1.61-11.08 5.6 5.6 0 1 0-1.61 11.08zM127.33 83.79a5.6 5.6 0 1 0 1.61-11.08 5.6 5.6 0 1 0-1.61 11.08zM131.64 165.26a5.6 5.6 0 1 0 1.62-11.08 5.6 5.6 0 1 0-1.62 11.08zM133.95 149.43a5.6 5.6 0 1 0 1.61-11.09 5.6 5.6 0 1 0-1.61 11.09zM136.25 133.59a5.6 5.6 0 1 0 1.61-11.08 5.6 5.6 0 1 0-1.61 11.08zM138.56 117.76a5.6 5.6 0 1 0 1.61-11.08 5.6 5.6 0 1 0-1.61 11.08z' stroke='%23037b0b' stroke-width='1' stroke-dasharray='3%2c 2'%3e%3c/path%3e%3crect width='286.72' height='286.72' clip-path='url(%26quot%3b%23SvgjsClipPath1610%26quot%3b)' x='627.11' y='106.59' fill='url(%23SvgjsPattern1611)' transform='rotate(189.54%2c 770.47%2c 249.95)'%3e%3c/rect%3e%3cpath d='M463.37 380.53000000000003 L532.46 478.24L557.9039317403798 369.3960682596202z' stroke='%23e73635' stroke-width='1.81' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3cpath d='M1.4 510a5.6 5.6 0 1 0 6.15-9.36 5.6 5.6 0 1 0-6.15 9.36zM10.19 496.63a5.6 5.6 0 1 0 6.15-9.36 5.6 5.6 0 1 0-6.15 9.36zM18.97 483.26a5.6 5.6 0 1 0 6.16-9.36 5.6 5.6 0 1 0-6.16 9.36zM27.76 469.89a5.6 5.6 0 1 0 6.15-9.36 5.6 5.6 0 1 0-6.15 9.36z' stroke='rgba(147%2c 180%2c 112%2c 1)' stroke-width='1.88' stroke-dasharray='3%2c 3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1605'%3e%3crect width='800' height='600' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='9.34' height='9.34' patternUnits='userSpaceOnUse' id='SvgjsPattern1607'%3e%3cpath d='M4.67 1L4.67 8.34M1 4.67L8.34 4.67' stroke='rgba(49%2c 56%2c 136%2c 1)' fill='none' stroke-width='2.16'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1606'%3e%3ccircle r='60.71' cx='199.34' cy='474.61'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='156' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1609'%3e%3crect width='156' height='3' x='0' y='0' fill='%23d3b714'%3e%3c/rect%3e%3crect width='156' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1608'%3e%3ccircle r='39' cx='285.24' cy='240.29'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='8.96' height='8.96' patternUnits='userSpaceOnUse' id='SvgjsPattern1611'%3e%3cpath d='M4.48 1L4.48 7.960000000000001M1 4.48L7.960000000000001 4.48' stroke='rgba(90%2c 228%2c 232%2c 1)' fill='none' stroke-width='1.16'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1610'%3e%3ccircle r='71.68' cx='770.47' cy='249.95'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");

}
</style>
