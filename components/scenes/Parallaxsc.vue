<template>
  <div>
    <v-toolbar style="position: absolute;"  flat color="transparent">
      <v-btn class="mt-6" dark fab small  @click="$router.go(-1)"  style="background-color:rgba(100,100,100,0.5); box-shadow: none;" ><v-icon>mdi-arrow-left</v-icon></v-btn>
      <h2 class="text-white font-bold mt-6 ml-4">Senses & Exercise</h2>
    </v-toolbar>
    <div class="flex p-6 bg-sen justify-center items-center "  >
      <div class="w-1/2">
        <h2 class="text-3xl text-white font-bold">{{name}}</h2>
        <hr>
        <h2 class="text-base text-white  "><b>English</b> For Emergency</h2>
        <h2 class="text-base text-white " >Medical Services</h2>

      </div>
      <div class="w-1/2 p-6" >
        <img  :src="icon" alt="">
      </div>
    </div>
    <div class="relative -mt-11 lg:-mt-24">
      <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-2.000000, 44.000000)" fill="#F4F4F4" fill-rule="nonzero">
            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
            <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
          </g>
          <g transform="translate(-4.000000, 76.000000)" fill="#F4F4F4" fill-rule="nonzero">
            <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
          </g>
        </g>
      </svg>
    </div>

  </div>
</template>
<script>
export default {
    props:{
      name:{default:'Course'},
      icon:{default:'/1014017-emergency-services/png/046-broken-leg.png'}
    }
}
</script>
<style scoped>
.bg-sen {
  background-color: #ff9d00;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23ff912a' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23ff8541' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ff7c55' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23ff7468' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23ff6f79' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23ff6c89' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23f86c97' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23ea6ea4' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23db71ad' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23c975b5' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23b778b9' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23a57bba' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%23937db9' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%23837eb5' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23757eaf' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%236a7da7' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23627c9e' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;

}


</style>
