<template>
     <v-row>
         <v-col cols="12" sm="12">
             <v-sheet min-height="70vh" rounded="lg">
                 <p class="pl-2 pt-3 animate__animated animate__zoomIn">ข้อสอบทั้งหมด : 20 ข้อ</p>
                 <v-divider></v-divider>
                 <p class="pl-2 pt-6 animate__animated animate__zoomIn">ข้อที่ 1 : Lorem Ipsum is simply dummy text of the
                     printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the
                     1500s,
                     when an unknown printer took a galley of type and scrambled it to make a
                     type specimen book.
                     It has survived not only five centuries : </p>
                 <v-radio-group column class="animate__animated animate__zoomIn">
                     <v-radio class="pl-2" label="Option 1" value="radio-1"></v-radio>
                     <v-radio class="pl-2" label="Option 2" value="radio-2"></v-radio>
                     <v-radio class="pl-2" label="Option 3" value="radio-3"></v-radio>
                     <v-radio class="pl-2" label="Option 4" value="radio-4"></v-radio>
                 </v-radio-group>

                 <v-divider></v-divider>
                 <p class="pl-2 pt-6 animate__animated animate__zoomIn">ข้อที่ 2 : Lorem Ipsum is simply dummy text of the
                     printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the
                     1500s,
                     when an unknown printer took a galley of type and scrambled it to make a
                     type specimen book.
                     It has survived not only five centuries : </p>
                 <v-radio-group column class="animate__animated animate__zoomIn">
                     <v-radio class="pl-2" label="Option 1" value="radio-1"></v-radio>
                     <v-radio class="pl-2" label="Option 2" value="radio-2"></v-radio>
                     <v-radio class="pl-2" label="Option 3" value="radio-3"></v-radio>
                     <v-radio class="pl-2" label="Option 4" value="radio-4"></v-radio>
                 </v-radio-group>

                 <v-card-text>
                     <v-row align="center" justify="center" class="pt-4 pb-4 animate__animated animate__zoomIn">
                         <v-btn-toggle rounded>
                             <v-btn href="home">
                                 <v-icon>mdi-arrow-left</v-icon>
                             </v-btn>
                             <v-btn  @click="dialog=true">
                                 <v-icon>mdi-arrow-right</v-icon>
                             </v-btn>
                         </v-btn-toggle>
                     </v-row>
                 </v-card-text>
             </v-sheet>
         </v-col>

       <v-dialog v-model="dialog">
         <v-card >
            <v-card-text class="flex flex-col text-center items-center p-8">
              <br>  <br>
                <h2 class="text-2xl font-bold text-green-600">ผลคะแนน</h2>  <br>
                <img class="m-4 w-28" src="/trophy.png" alt="">
                <h2 class="text-3xl font-bold">20/20</h2>
              <br>  <br>
            </v-card-text>
         </v-card>
       </v-dialog>

     </v-row>
</template>

<script>
export default {
  components: {},
  data:()=>{
    return ({
      dialog:false
    })
  }
}
</script>
