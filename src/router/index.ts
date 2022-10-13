import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: '/buy',
      name: 'buy',
      component: () => import('../views/buy/Buy.vue'),
    },
    {
      path: '/mBan/:id',
      component: () => import('../views/buy/mBan.vue')
    },
    {
      path: '/Cart',
      component: () => import('../views/buy/Cart.vue')
    },
    {
      path: "/teaparty",
      name: "teaparty",
      component: () => import("../components/home/TeaParty.vue"),
    },
    {
      path: "/studentcard",
      name: "studentcard",
      component: () => import("../components/home/StudentCard.vue"),
    },
    {
      path: "/membershipcard",
      name: "membershipcard",
      component: () => import("../components/home/MemberShipCard.vue"),
    },
    {
      path: "/grouppurchase",
      name: "grouppurchase",
      component: () => import("../components/home/GroupPurchase.vue"),
    },
    {
      path: "/newteacreator",
      name: "newteacreator",
      component: () => import("../components/home/NewTeaCreator.vue"),
    },
    {
      path: "/bottombanner",
      name: "bottombanner",
      component: () => import("../components/home/BottomBanner.vue"),
    },
    {
      path: "/grocery",
      name: "grocery",
      component: () => import("../views/Grocery/Grocery.vue"),
    },
    {
      path: "/caDetail/:id",
      name: "caDetail",
      component: () => import("../components/grocery/cardDetail.vue")
    },
    {
      path: "/cardDetail/:id",
      name: "cardDetail",
      component: () => import("../components/grocery/groCardDetail.vue"),
    },
    {
      path: "/groDetail/:id",
      name: "groDetail",
      component: () => import("../components/grocery/groDetail.vue"),
    },
    {
      path: "/order",
      name: "order",
      component: () => import("../views/order/Order.vue"),
      redirect: "/order/now",
      children: [
        {
          path: "now",
          component: () => import("../views/order/Now.vue"),
        },
        {
          path: "old",
          component: () => import("../views/order/Old.vue"),
        },
      ],
    },
    {
      path: "/orderDetial/:id",
      name: "orderDetial",
      component: () => import('../views/order/orderDetial.vue')
    },
    {
      path: "/center",
      name: "center",
      component: () => import("../views/Center/Center.vue"),
    },
    {
      path: "/centerDetail",
      name: 'centerDetail',
      component: () => import("../views/Center/CenterDetail.vue")
    },
    {
      path: "/more",
      name: "more",
      component: () => import("../views/More.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Login/Register.vue"),
    },
  ],
});
export default router;
