import Vue from 'vue';
import Vuetify from 'vuetify';
import ClockCtrl from './clock-ctrl.vue';

import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

new Vue({
	render: h => h(ClockCtrl),
}).$mount('#app');
