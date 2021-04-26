<template>
<div>
    <vocab-Parallax1 />

  <div  class="relative -mt-16 lg:-mt-24" @click="dialog=true" >
    <div class=" flex flex-row  m-4 p-2 shadow-lg  rounded-xl bg-white border-b-4  border-blue-600"   >
      <div class="2/12 p-2">
        <img class="w-16" src="/finishx.png"   alt="">
      </div>
      <div class="20/12 flex items-center pl-4">
        <h2 class="text-xl font-bold"  >Accents<br><span class="text-base font-normal">Choose accents to learn</span></h2>
      </div>
    </div>
  </div>


  <div class="m-2 p-2 rounded-xl  ">
    <h2 class="flex items-center text-xl font-bold"><img class="h-10 mr-4" src="/voc.svg" alt="">Vocabulary</h2>
  </div>

  <div class="bg-white m-2 rounded-xl">
    <vocab-Datatable/>
  </div>

  <v-dialog v-model="dialog">
    <v-card class="bg-gray-50">
      <v-card-title>
        <img class="w-8" src="/finishx.png"   alt="">  <span class="text-xl font-bold ml-2">Choose Accents</span>
        <v-spacer></v-spacer>
        <v-btn small color="red" dark fab @click="dialog=false"><v-icon>mdi-close</v-icon></v-btn>
      </v-card-title>
      <v-card-text class="bg-gray-50 flex flex-col justify-center items-center">
        <div v-for="(lang,i) in languages" :key="i">
          <div @click="$router.push(`/scenes?lang=${lang.name}`)"  class="p-6 m-2 flex flex-row items-center rounded-xl shadow-lg border-b-4 border-green-600  " >
            <div class="w-4/12">
              <img class=" w-auto" :src="lang.flag" alt="">
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

<script>
export default {
    components: {},
    data:()=>{
        return({
          dialog:false,
          languages:[
            {
              name:"Cambodia",
              flag:"https://cdn.pixabay.com/photo/2016/01/24/17/25/flag-of-cambodia-1159274_1280.png"
            },
            {
              name:"Laos",
              flag:"https://cdn.pixabay.com/photo/2013/07/13/14/16/laos-162337_1280.png"
            },
            {
              name:"Myanmar",
              flag:"https://cdn.pixabay.com/photo/2021/01/24/18/09/flag-of-myanmar-5945983_1280.png"
            },
            {
              name:"Vietnam",
              flag:"https://cdn.pixabay.com/photo/2012/04/10/23/04/vietnam-26834_1280.png"
            },
            {
              name:"Philippines",
              flag:"https://cdn.pixabay.com/photo/2012/04/12/23/52/philippines-31013_1280.png"
            },
            {
              name:"India",
              flag:"https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828_1280.png"
            },
            {
              name:"China",
              flag:"https://cdn.pixabay.com/photo/2012/04/10/23/05/china-26841_1280.png"
            },{
              name:"Japanese",
              flag:"https://cdn.pixabay.com/photo/2013/07/13/14/15/japan-162328_1280.png"
            },
          ]
        })}
}
</script>

<style scoped>
.bgx{

}
.tg{
    text-shadow: 2px 2px 4px rgb(104, 104, 104);
}



</style>
