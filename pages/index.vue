<template>
<div class="h-screen flex flex-col bg-main items-center justify-center">
    <center class="mb-6">
        <h2 class="text-4xl"><b class="text-purple-800">English</b> For</h2>
        <h2 class="text-base text-blue-600">Emergency Medical Services</h2>
    </center>
    <img class="h-80 shadow-b-xl" src="/ava.png" alt="" />
    <v-btn @click="$router.push('/home')" color="deep-purple" x-large rounded class="mt-20 shadow-xl" dark><span class="capitalize text-xl font-bold">Start Application</span></v-btn>
</div>
</template>

<script>
export default {
    components: {},
};
</script>

<style>
.bg-main {
    background-color: #d9fad5;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%237dcafa' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23d9fad5' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23dbfad7' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23ddfad9' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23dffadc' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e1fade' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23e3fae0' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23e5fae2' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23e7fae4' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23e9fae6' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23ebfae9' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23edfaeb' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23effaed' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23f1faef' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%23f2faf1' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%23f4faf3' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23f6faf6' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23f8faf8' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23fafafa' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}
</style>
