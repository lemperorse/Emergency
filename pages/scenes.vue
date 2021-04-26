<template>
<div>
    <scenes-Parallaxsc />
    <v-tabs>
      <v-tab>
        <img class="w-10 " src="~/static/1014017-emergency-services/png/004-smartphone.png" alt="" />  1669 Calling
      </v-tab>
      <v-tab-item>
        <video-Animation />
      </v-tab-item>
      <v-tab>
        <img class="w-10 " src="~/static/1014017-emergency-services/png/020-stretcher.png" alt=""> At the accidental scene
      </v-tab>
      <v-tab-item>
        <video-Animation />
      </v-tab-item>
      <v-tab>
        <img class="w-10 " src="~/static/1014017-emergency-services/png/001-ambulance.png" alt="">  In the ambulance
      </v-tab>
      <v-tab-item>
        <video-Animation />
      </v-tab-item>
      <v-tab>
        <img class="w-10" src="~/static/1014017-emergency-services/png/016-hospital.png" alt="">  In the ER department
      </v-tab>
      <v-tab-item>
        <video-Animation />
      </v-tab-item>
      <v-tab>
        <img class="w-10" src="~/static/1205526.svg" alt=""> &nbsp;&nbsp; Exercise
      </v-tab>
      <v-tab-item>
        <div class="p-2">
          <test-quiz />
        </div>

      </v-tab-item>
    </v-tabs>

</div>
</template>
<style scoped>
.tg{
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

li{
    color: black;
}
</style>
