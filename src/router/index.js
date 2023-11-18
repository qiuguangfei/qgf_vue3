import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../view/home.vue'),
            meta:{
                title:'主页',
                isShow: false
            },
            children: [
                {
                    path: '',
                    name: 'list1',
                    component: () => import('../view/list.vue')
                },
                {
                    path: 'list',
                    name: 'list',
                    meta:{
                        title:'主页',
                        isShow: true
                    },
                    component: () => import('../view/list.vue'),
                }
            ]
        },
        {
            path: '/about/:keyword?',
            name: 'about',
            meta:{
                title:'关于',
                isShow: true
            },
            component: () => import('../view/about.vue')
        }
    ]
})
export default router