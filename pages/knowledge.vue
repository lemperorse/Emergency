<template>
<div>
    <!-- <v-btn @click="dialog = true" color="success">text</v-btn> -->
    <v-card-title class="m-1" primary-title>
        <v-icon @click="$router.go('-1')">mdi-arrow-left</v-icon>
        <h2 class="ml-2 text-xl font-bold text-blue-400">Knowledge</h2> 
    </v-card-title>
    <v-dialog v-model="dialog" scrollable fullscreen persistent :overlay="false" max-width="500px" transition="dialog-transition">
        <v-card>
            <v-card-title>
                <h2>{{form.name}}</h2>
                 <v-spacer></v-spacer> 
                 <v-btn @click="(form = {}) && (dialog = false)" small fab color="error">X</v-btn>
            </v-card-title>
            <v-card-text>
                <center>
   <img v-if="form.image" :src="form.image" alt="">
                <p class="pt-4 text-base text-black">{{form.detail}}</p> <br><br>
                <img v-if="form.image1" :src="form.image1" alt=""><br>
                <img v-if="form.image2" :src="form.image2" alt=""><br>
                <img v-if="form.image3" :src="form.image3" alt="">
                <br>
                <h3>สร้างเมื่อ : {{convertDate(form.created_at)}}</h3>
                </center>
             
             <br><br>
            </v-card-text>
        </v-card>
    </v-dialog>
    <div @click="(form = list)&&(dialog=true)" v-for="list,i in lists" :key="i">
        <home-card2 img="~/static/book.png" :name="list.name"  ></home-card2>
    </div>

</div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Watch,
} from "nuxt-property-decorator"
import { Core } from '@/vuexes/core'  
import {Web} from '@/vuexes/web'

@Component({
    components: {},
})
export default class MyComponent extends Vue {
    lists: any = []
    dialog: boolean = false
    form: any = {}
    async getEnv() {

          await Web.onLoad('Loading Knowledge');
        this.lists = await Core.getHttp(`/api/knowledge/`)
              await Web.offLoad();
    }
    async created() {
        await this.getEnv();
    }
  
   
 convertDate(date:any){
        return Core.convertDate(date);
    }
}
</script>

<style>
.bgh {
    background: rgb(53, 184, 140);
    background: linear-gradient(180deg, rgba(53, 184, 140, 1) 18%, rgba(17, 140, 87, 1) 100%);
}
</style>