<template>
<table class="w100 animate__animated animate__slideInUp  ">
    <tr class="header">
        <th class="text-center bl">Vocabulary</th>
        <th class="text-center">Translation</th>
        <th class="text-center">sound</th>
    </tr>

    <tr v-if="vocabularies.length > 0" class="white" v-for="(voc,i) in vocabularies" :key="i">
        <td class="text-center bl">{{voc.word}}</td>
        <td class="text-center">{{voc.tranword}}</td>
        <td class="text-center">
            <v-btn :disabled="(voc.sound==null)" color="success" icon @click="playAudio(voc.sound)">
                <v-icon>mdi-speaker</v-icon>
            </v-btn>
        </td>
    </tr>
 

</table>
</template>

<script>
export default {
    data() {
        return {
            response: false
        }
    },
    props: {
        vocabularies: {
            default: []
        }
    },
    async created() {
        this.response = (this.vocabularies.length > 0)
    },
    methods: {
        async playAudio(url) {
            new Audio(url).play();
        }
    }

}
</script>

<style scoped>
.w100 {
    width: 100%;
}

table {
    /* border-collapse: Separate ;  */
    border-collapse: collapse;
    /* border-radius: 15px;  */
}

td,
th {
    border: 1px solid #ffffff;
    padding: 8px;
    /* border-radius: 3px; */
}

tr:nth-child(even) {
    background-color: #eee;
}

.bl {
    border-left: 6px solid #2B32B2;
}
</style>
