<template> 
<table class="w100 animate__animated animate__slideInUp">
    <tr class="header">
        <th class="text-center bl">Vocabulary</th>
        <th class="text-center">Translation</th>
        <th class="text-center">sound</th>
    </tr>
    <tr class="white">
        <td class="text-center bl">Man</td>
        <td class="text-center">ชาย</td>
        <td class="text-center">
            <v-btn color="success" icon>
                <v-icon>mdi-speaker</v-icon>
            </v-btn>
        </td>
    </tr>
    <tr>
        <td class="text-center bl">Girl</td>
        <td class="text-center">หญิง</td>
        <td class="text-center">
            <v-btn color="success" icon>
                <v-icon>mdi-speaker</v-icon>
            </v-btn>
        </td>
    </tr>
    <tr class="white">
        <td class="text-center bl">Man1</td>
        <td class="text-center">ชาย1</td>
        <td class="text-center">
            <v-btn color="success" icon>
                <v-icon>mdi-speaker</v-icon>
            </v-btn>
        </td>
    </tr>
    <tr>
        <td class="text-center bl">Girl1</td>
        <td class="text-center">หญิง1</td>
        <td class="text-center">
            <v-btn color="success" icon>
                <v-icon>mdi-speaker</v-icon>
            </v-btn>
        </td>
    </tr>
    <tr class="white">
        <td class="text-center bl">Man2</td>
        <td class="text-center">ชาย2</td>
        <td class="text-center">
            <v-btn color="success" icon>
                <v-icon>mdi-speaker</v-icon>
            </v-btn>
        </td>
    </tr>
    <tr>
        <td class="text-center bl">Girl2</td>
        <td class="text-center">หญิง2</td>
        <td class="text-center">
            <v-btn color="success" icon>
                <v-icon>mdi-speaker</v-icon>
            </v-btn>
        </td>
    </tr>
    <tr class="white">
        <td class="text-center bl">Man3</td>
        <td class="text-center">ชาย3</td>
        <td class="text-center">
            <v-btn color="success" icon>
                <v-icon>mdi-speaker</v-icon>
            </v-btn>
        </td>
    </tr>
    <tr>
        <td class="text-center bl">Girl3</td>
        <td class="text-center">หญิง3</td>
        <td class="text-center">
            <v-btn color="success" icon>
                <v-icon>mdi-speaker</v-icon>
            </v-btn>
        </td>
    </tr>
    <tr class="white">
        <td class="text-center bl">Man4</td>
        <td class="text-center">ชาย4</td>
        <td class="text-center">
            <v-btn color="success" icon>
                <v-icon>mdi-speaker</v-icon>
            </v-btn>
        </td>
    </tr>
    <tr>
        <td class="text-center bl">Girl4</td>
        <td class="text-center">หญิง4</td>
        <td class="text-center">
            <v-btn color="success" icon>
                <v-icon>mdi-speaker</v-icon>
            </v-btn>
        </td>
    </tr>
    <tr class="white">
        <td class="text-center bl">Man5</td>
        <td class="text-center">ชาย4</td>
        <td class="text-center">
            <v-btn color="success" icon>
                <v-icon>mdi-speaker</v-icon>
            </v-btn>
        </td>
    </tr>
    <tr>
        <td class="text-center bl">Girl5</td>
        <td class="text-center">หญิง4</td>
        <td class="text-center">
            <v-btn color="success" icon>
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
            
        }
    },
}
</script>

<style scoped>

.w100{
    width: 100%;
}

table {  
    /* border-collapse: Separate ;  */
    border-collapse: collapse ; 
    /* border-radius: 15px;  */
}

td, th {
    border: 1px solid #ffffff; 
    padding: 8px;
    /* border-radius: 3px; */
}

tr:nth-child(even) {
    background-color: #eee;
}

.bl{
    border-left: 6px solid #2B32B2; 
}
</style>
