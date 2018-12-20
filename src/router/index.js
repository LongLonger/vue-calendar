import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/demo/demo'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Hello',
        component: HelloWorld  //zhongshu-comment 该组件的名字是由上文import子句起的，对应的是src/demo/demo.vue这个组件
    }]
})