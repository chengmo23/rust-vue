import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// 路由
import router from "@/router";
app.use(router);

// 全局混入 -- 抽取公用的实例和方法
import mixin from "@/utils/mixin";
app.mixin(mixin);

// 全局过滤器
import { filters } from "@/utils/filters.js";
app.config.globalProperties.$filters = filters;

// Antdv
import "ant-design-vue/dist/reset.css";
import Antd from "ant-design-vue";
app.use(Antd);

// Antdv-icon
import * as Icons from "@ant-design/icons-vue";
Object.keys(Icons).forEach((key) => {
	app.component(key, Icons[key]);
});

// Pinia
import { createPinia } from "pinia";
const pinia = createPinia();
// 持久化存储
import { createPersistedState } from "pinia-plugin-persistedstate";
pinia.use(
	createPersistedState({
		auto: false, // 自动持久化
	}),
);
// 重写 $reset 方法 => 解决组合式api中无法使用问题
pinia.use(({ store }) => {
	const initialState = JSON.parse(JSON.stringify(store.$state));
	store.$reset = () => {
		store.$patch(initialState);
	};
});
app.use(pinia);

// store
import { install as installStore } from "@/store";
await installStore(app);

app.mount("#app");
