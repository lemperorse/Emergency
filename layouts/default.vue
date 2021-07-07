<template>
<v-app dark class="bg">
 
    <v-main>
           <Loading />
        <v-container v-if="response" style="margin:0!important; padding:0!important; background-color:#F4F4F4;">
            <nuxt />  <br>   <br>   <br> 
        </v-container>
    </v-main>

</v-app>
</template>

<script>
import {Core} from '@/vuexes/core'
import {Course} from '@/vuexes/course'
import {Web} from '@/vuexes/web'

export default {
    data() {
        return {
             response:false
        }
    },
    async created(){
        await Web.onLoad('Loading Data');
        await Course.getData();
          await Web.offLoad();
        this.response = true;
    }
}
</script>
<style scoped>
.bg{
    /* background-color: #E7F2F8;  */
}
</style>
