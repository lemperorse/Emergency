<template>
<div >
    <h2 class="text-2xl font-bold">Courses in progress</h2>

    <div  class="flex flex-col mt-4">
      <div @click="$router.push('/vocabulary')" v-for="(menu,i) in menus" :key="i" class="w-full">
        <div class=" flex flex-row  m-2 p-2 shadow-lg  rounded-xl bg-white border-b-4  " :class="menu.color" >
          <div class="2/12 p-2">
            <img class="w-16" :src="menu.img" alt="">
          </div>
          <div class="20/12 flex items-center pl-4">
            <h2 class="text-xl font-bold"  >{{menu.name}}</h2>
          </div>
        </div>
      </div>

    </div>



</div>
</template>

<script >

  export default {
    data: ()=>{
      return ({
        menus:[
          {
            name:"Traumas",
            path:"/vocabulary",
            img:"/1014017-emergency-services/png/046-broken-leg.png",
            color:"border-purple-700",

          },
          {
            name:"Chest Pain",
            path:"/vocabulary",
            img:"/1014017-emergency-services/png/021-defibrillator.png",
            color:"border-green-400",

          },
          {
            name:"Allergies",
            path:"/vocabulary",
            img:"/1014017-emergency-services/png/019-syringe.png",
            color:"border-pink-700",

          },
          {
            name:"Animal Bites",
            path:"/vocabulary",
            img:"/1014017-emergency-services/png/023-band-aid.png",
            color:"border-yellow-700",

          },
          {
            name:"Knowledge",
            path:"/vocabulary",
            img:"/book.png",
            color:"border-green-700",

          },
        ]
      })
    }
  }
</script>

<style scoped>
.bg {
    background: #BDE0FE;
}

.bg1 {
    background: #FDFFB6;
}

.bg2 {
    background: #CAFFBF;
}

.bg3 {
    background: #BDB2FF;
}

.bg4 {
    background: #FFADAD;
}

.b1 {
    position: absolute;
    top: 71.5%;
    left: 50%;
    font-size: 20px;
    color: white;
    width: 100%;
    padding-top: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    border-radius: 5px;
    background: rgba(25, 25, 25, .5);
    transform: translate(-50%, -5%);
    -ms-transform: translate(-50%, -50%);
}

.b {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 20px;
    /* text-align: center; */
    color: white;
    width: 100%;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 38px;
    padding-left: 10px;
    border-radius: 5px;
    background: rgba(25, 25, 25, .5);
    transform: translate(-50%, -13%);
    -ms-transform: translate(-50%, -50%);
}
</style>
