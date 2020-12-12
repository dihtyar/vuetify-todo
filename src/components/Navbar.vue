<template>
    <div>
        <v-toolbar flat app :clipped-left="clipped">
            <v-app-bar-nav-icon class="grey-text" @click.stop ="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>My Todo</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color="grey">
                <span>Sing Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer :clipped="clipped" app v-model="drawer" temporary enable-resize-watcher class="indigo">
            <p>test</p>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        data: () => ({
            drawer: false,
            group: null,
        }),
        watch: {
            group () {
                this.drawer = false
            },
        },
    }
</script>
