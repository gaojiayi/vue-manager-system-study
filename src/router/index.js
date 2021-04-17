// 建议路由和组件的映射关系
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    meta: {
      title: '登录'
    },
    component: () => import(
      /* webpackChunkName: "login" */
      "../views/Login.vue")
  },
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: '自述文件' },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: {
          title: '系统首页'
        },
        component: () => import(
          /* webpackChunkName: "dashboard" */
          "../views/Dashboard.vue")
      },
      {
        path: "/table",
        name: "table",
        meta: {
          title: '表格'
        },
        component: () => import(
          /* webpackChunkName: "dashboard" */
          "../views/BaseTable.vue")
      },
      {
        path: "/i18n",
        name: "i18n",
        meta: {
          title: '国际化语言'
        },
        component: () => import(
          /* webpackChunkName: "i18n" */
          "../views/I18N.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
