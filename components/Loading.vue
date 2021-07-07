<template>
<div>
    <v-overlay z-index="99" :value="loadX">

        <center>
            <v-btn style="height:108px; width:108px;" color="white" fab class=" animate__animated animate__pulse animate__infinite	infinite">

                <i class="em em-books text-5xl" aria-role="presentation" aria-label="BOOKS"></i>
            </v-btn><br>
            <h2 class="mt-4 text-xl animate__animated animate__swing animate__infinite	infinite">{{loadTxt}}..</h2>
        </center>
    </v-overlay>
</div>
</template>

<script lang="ts">
import { Web } from "@/vuexes/web";
import { Component, Vue, Watch } from "nuxt-property-decorator";
@Component({
    components: {},
    computed: {}
})
export default class dddd extends Vue {
    overlay: any = true
    async created() {}
    get loadX() {
        return Web.loading
    }
    get loadTxt() {
        return Web.loadTxt
    }
}
</script>
