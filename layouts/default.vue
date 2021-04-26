<template>
<v-app dark class="bg">

    <!-- <v-app-bar :clipped-left="clipped" fixed app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-btn icon @click.stop="miniVariant = !miniVariant">
            <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
        </v-btn>
        <v-btn icon @click.stop="clipped = !clipped">
            <v-icon>mdi-application</v-icon>
        </v-btn>
        <v-btn icon @click.stop="fixed = !fixed">
            <v-icon>mdi-minus</v-icon>
        </v-btn>
        <v-toolbar-title v-text="title" />
        <v-spacer />
        <v-btn icon @click.stop="rightDrawer = !rightDrawer">
            <v-icon>mdi-menu</v-icon>
        </v-btn>
    </v-app-bar> -->
    <v-main>
        <v-container style="margin:0!important; padding:0!important; background-color:#F4F4F4;">
            <nuxt />
        </v-container>
    </v-main>

</v-app>
</template>

<script>
export default {
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                // {
                //     icon: 'mdi-apps',
                //     title: 'Welcome',
                //     to: '/'
                // },
                // {
                //     icon: 'mdi-chart-bubble',
                //     title: 'Inspire',
                //     to: '/inspire'
                // }
                {
                    icon: 'mdi-apps',
                    title: 'Home',
                    to: '/home'
                },
                {
                    icon: 'mdi-book-open-variant',
                    title: 'Vocabulary',
                    to: '/vocabulary'
                },
                {
                    icon: 'mdi-flag',
                    title: 'Accents',
                    to: '/accent'
                },
                {
                    icon: 'mdi-television-guide',
                    title: 'Scenes',
                    to: '/scenes'
                },
                {
                    icon: 'mdi-video',
                    title: 'Video',
                    to: '/video'
                },
                {
                    icon: 'mdi-bookshelf',
                    title: 'Test',
                    to: '/finaltest'
                }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Vuetify.js'
        }
    }
}
</script>
<style scoped>
.bg{
    /* background-color: #E7F2F8;  */
}
</style>
