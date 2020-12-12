import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';
import mycustomtheme from './theme.js';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md',
    },
    theme: {
        mycustomtheme
    },
});
