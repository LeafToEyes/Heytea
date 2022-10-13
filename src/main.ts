import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// vant引入函数组件样式
import "vant/es/toast/style";
import "vant/es/dialog/style";
import "vant/es/notify/style";
import "vant/es/image-preview/style";
import { Sidebar, SidebarItem } from "vant";

createApp(App)
  .use(router)
  .use(store)
  .use(Sidebar)
  .use(SidebarItem)
  .mount("#app");

// 用户防翻墙，通过路由守卫，全局编码
router.beforeEach((to, from, next) => {
  // console.log(to,from);
  const arr = ["/studentcard", "membershipcard", "/grouppurchase"];
  if (!arr.includes(to.path)) {
    next();
  } else {
    if (localStorage.getItem("userInfo")) {
      next();
    } else {
      next({
        path: "/login",
        query: {
          refer: to.fullPath,
        },
      });
    }
  }
});
