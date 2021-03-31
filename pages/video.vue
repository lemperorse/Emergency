<template>
<div>
    <video-Parallax3 />
    <ul class="breadcrumb mt-4 animate__animated animate__slideInLeft white">
        <li><a href="home">Lesson</a></li>
        <li><a href="vocabulary">Vocabulary</a></li>
        <li><a href="accent">Accents</a></li>
        <li><a href="scenes">scenes</a></li>
        <li>Video</li>
    </ul>
    <p class="mt-4 tg animate__animated animate__slideInUp text-3xl text-bold">Video</p>
    <video-Animation />
    <center>
        <v-btn-toggle rounded class="mt-4 animate__animated animate__zoomIn ">
            <v-btn href="home">
                <v-icon >mdi-home</v-icon>
            </v-btn>
            <v-btn href="finaltest">
                <v-icon >mdi-arrow-right</v-icon>
            </v-btn>
        </v-btn-toggle>
    </center>
</div>
</template>

<script>
export default {
    components: {}
}
</script>

<style scoped> 
.tg{
    text-shadow: 2px 2px 4px rgb(104, 104, 104);
}
.w100 {
    width: 100%;
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

li {
    color: black;
}
</style>
