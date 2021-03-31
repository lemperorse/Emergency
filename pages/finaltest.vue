<template>
<div>
    <test-Parallax4 />
    <ul class="breadcrumb mt-4 animate__animated animate__slideInLeft white">
        <li><a href="home">Lesson</a></li>
        <li><a href="vocabulary">Vocabulary</a></li>
        <li><a href="accent">Accents</a></li>
        <li><a href="scenes">scenes</a></li>
        <li><a href="video">Video</a></li>
        <li>Final test</li>  
    </ul>
    <h2 class="mt-3 mb-3 tg animate__animated animate__slideInUp">Final test</h2>
    <test-quiz />
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