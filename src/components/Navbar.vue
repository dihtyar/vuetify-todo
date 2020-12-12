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
        <v-navigation-drawer :clipped="clipped" app v-model="drawer" temporary enable-resize-watcher class="primary">
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" route :to="link.route">
                    <v-list-tile-action>
                        <v-icon left class="white--text">{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">
                            {{link.text}}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        data: () => ({
            drawer: false,
            group: null,
            links: [
                {icon: 'dashboard', text: 'Dashboard', route: '/' },
                {icon: 'folder', text: 'My Progects', route: '/projects' },
                {icon: 'person', text: 'Theam', route: '/team' },
            ]
        }),
        watch: {
            group () {
                this.drawer = false
            },
        },
    }
</script>
