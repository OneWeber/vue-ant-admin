import router from '@/router'
// import store from './store'
router.beforeEach(async (to, from, next) => {
    const token = sessionStorage.token
    const LOGIN_PAGE_NAME = 'login'
    const HOME_PAGE_NAME = 'Home'
    if (!token && to.name !== LOGIN_PAGE_NAME) {
        next({
            name: 'login', // 跳转到登录页
        })
    } else if (!token && to.name === LOGIN_PAGE_NAME) {
        next()
    } else if (token && to.name === LOGIN_PAGE_NAME) {
        next({
            name: HOME_PAGE_NAME, // 跳转到homeName页
        })
    } else {
        next()
    }
})

router.afterEach((to) => {
    if (to.path.indexOf('/redirect') === -1 && to.meta.title) {
        // Util.openNewPage(router.app, to.meta.title, to.path, to.query)
    }
    // 设置标题
    if (to.meta.title) {
        document.title = to.meta.title + ' - ant管理系统'
    } else {
        document.title = 'ant管理系统'
    }
})

export default router
