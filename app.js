const Vue = require('vue');
const frame = require('./frame.vue');

new Vue({
    el: '#frame',
    render: h => h(frame),
})
