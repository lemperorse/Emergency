<template>
<div>

    <v-row no-gutters class="animate__animated animate__slideInUp">
        <v-col cols="12" sm="12" md="12">
            <v-card class="pa-2" outlined tile>
              <h2 class="text-xl">Video Name</h2><br>
                <video controls>
                    <source src="mov_bbb.mp4" type="video/mp4">
                    <source src="mov_bbb.ogg" type="video/ogg">
                </video>
            </v-card>
        </v-col>
    </v-row>
</div>
</template>

<style scoped>
video {
    width: 100%;
    height: auto;
}
.cen1 {
    position: absolute;
    top: 50%;
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
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}

.cen {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 20px;
    text-align: center;
    color: white;
    width: 100%;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    border-radius: 5px;
    background: rgba(25, 25, 25, .5);
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}
</style>
