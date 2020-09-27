import Layout from '@/layout/Default'
const routers = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: '主页',
            icon: 'home',
            isHidden: true,
        },
        redirect: '/home',
        component: Layout,
        children: [
            {
                path: '/home',
                name: 'home',
                meta: {
                    title: '首页',
                    icon: 'home',
                },
                component: () => import('@/views/home/index.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
            isHidden: true,
        },
        component: () => import('@/views/login/index.vue'),
    },
]
export default routers
