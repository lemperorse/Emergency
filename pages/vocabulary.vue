<template>
<div v-if="response">
    <vocab-Parallax1 :name="course.name" :icon="course.icon" />
  
    <div class="relative -mt-16 lg:-mt-24" @click="dialog=true">
        <div class=" flex flex-row  m-4 p-2 shadow-lg  rounded-xl bg-white border-b-4  border-blue-600">
            <div class="2/12 p-2">
                <img class="w-16" src="~/static/finishx.png" alt="">
            </div>
            <div class="20/12 flex items-center pl-4">
                <h2 class="text-xl font-bold">Accents<br><span class="text-base font-normal">Choose accents to learn</span></h2>
            </div>
        </div>
    </div>

    <div class="m-2 p-2 rounded-xl ">
        <h2 class="flex items-center text-xl font-bold"><img class="h-10 mr-4" src="~/static/voc.svg" alt="">Vocabulary</h2>
    </div>

    <div class="bg-white m-2 rounded-xl ">
        <vocab-Datatable :vocabularies="vocabulary" />
    </div> 
    <v-dialog v-model="dialog" v-if="dialog">
        <v-card class="bg-gray-50">
            <v-card-title>
                <img class="w-8" src="~/static/finishx.png" alt=""> <span class="text-xl font-bold ml-2">Choose Accents</span>
                <v-spacer></v-spacer>
                <v-btn small color="red" dark fab @click="dialog=false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text class="bg-gray-50 flex flex-col justify-center items-center">
                <div v-for="(lang,i) in languages" :key="i">
                    <div @click="$router.push(`/scenes?lang=${lang.id}&course=${course.id}`)" class="p-6 m-2 flex flex-row items-center rounded-xl shadow-lg border-b-4 border-green-600  ">
                        <div class="w-4/12">
                            <img class=" w-auto" :src="lang.icon" alt="">
                        </div>
                        <div class="w-8/12">
                            <h2 class="font-bold text-xl pl-3">{{lang.name}}</h2>
                        </div>
                    </div>
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

    colors:string[] = ['border-green-600','border-pink-600','border-purple-600','border-blue-600','border-yellow-600','border-yellow-500']

    private course:any = {}
    private vocabulary:any = []
    private response:boolean = false
    private dialog:boolean = false
    async created(){
      let courseId = this.$route.query.course
    
      if(courseId){
        this.course = _.find(Course.courses,{id:Number(courseId)})
        console.log( this.course )
        this.vocabulary =  _.filter(Course.vocabularies,{course:Number(courseId)})
        this.response = true;
      }
    }

   

    get languages(){
        return Course.languages
    }
}
</script>
<style scoped>
.bgx {}

.tg {
    text-shadow: 2px 2px 4px rgb(104, 104, 104);
}
</style>
