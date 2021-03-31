<template>
<div>
    <v-row class="">
        <v-col cols="6" sm="6" md="6">
            <v-card class="mt-4 animate__animated animate__zoomIn bg rounded-xl" href="vocabulary">
                <center>
                    <v-card-text class="mb-2">
                        <img class="w-36 h-42 " src="/1014017-emergency-services/png/046-broken-leg.png" alt="">
                    </v-card-text>
                </center>
                <v-card-text class="text-center">
                    <p class="text-2xl font-bold">Traumas</p>
                    <v-btn color="success" text block href="vocabulary">view</v-btn>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="6" sm="6" md="6">
            <v-card class="mt-4 animate__animated animate__zoomIn bg1 rounded-xl " href="vocabulary">
                <center>
                    <v-card-text class="mb-2">
                        <img class="w-36 h-42 " src="/1014017-emergency-services/png/021-defibrillator.png" alt="">
                    </v-card-text>
                </center>
                <v-card-text class="text-center">
                    <p class="text-2xl font-bold">Chest-pain</p>
                    <v-btn color="success" text block href="vocabulary">view</v-btn>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="6" sm="6" md="6">
            <v-card class="mt-4 animate__animated animate__zoomIn bg2 rounded-xl " href="vocabulary">
                <center>
                    <v-card-text class="mb-2">
                        <img class="w-36 h-42 " src="/1014017-emergency-services/png/019-syringe.png" alt="">
                    </v-card-text>
                </center>
                <v-card-text class="text-center">
                    <p class="text-2xl font-bold">Allergies</p>
                    <v-btn color="success" text block href="vocabulary">view</v-btn>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="6" sm="6" md="6">
            <v-card class="mt-4 animate__animated animate__zoomIn bg3 rounded-xl " href="vocabulary">
                <center>
                    <v-card-text class="mb-2">
                        <img class="w-36 h-42 " src="/1014017-emergency-services/png/023-band-aid.png" alt="">
                    </v-card-text>
                </center>
                <v-card-text class="text-center">
                    <p class="text-2xl font-bold">Animal Bites</p>
                    <v-btn color="success" text block href="vocabulary">view</v-btn>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="6" sm="6" md="6">
            <v-card class="mt-4 animate__animated animate__zoomIn bg4 rounded-xl " href="vocabulary">
                <center>
                    <v-card-text class="mb-2">
                        <img class="w-36 h-42 " src="/book.png" alt="">
                    </v-card-text>
                </center>
                <v-card-text class="text-center">
                    <p class="text-2xl font-bold">Knowledge</p>
                    <v-btn color="success" text block href="vocabulary">view</v-btn>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</div>
</template>

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
