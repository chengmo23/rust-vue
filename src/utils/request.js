import axios from "axios";
import store from "@/store";
import { localStorage } from "@/utils/storage";
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import { createVNode } from "vue";
import { modal, message } from "ant-design-vue";

// 创建axios实例
const service = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_API,
	timeout: 50000, // 请求超时时间：50s
	headers: { "Content-Type": "application/json;charset=utf-8" },
});

// 请求拦截器
service.interceptors.request.use(
	(config) => {
		if (!config.headers) {
			throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
		}

		const { isLogin, tokenObj } = toRefs(store.user.useUserStore());

		if (isLogin.value) {
			// 授权认证
			config.headers[tokenObj.value.tokenName] = tokenObj.value.tokenValue;
			// 租户ID
			config.headers["TENANT_ID"] = "1";
			// 微信公众号appId
			config.headers["appId"] = localStorage.get("appId");
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

// 响应拦截器
service.interceptors.response.use(
	(response) => {
		const res = response.data;
		const { code, msg } = res;
		if (code === 200) {
			return res;
		} else {
			// token过期
			if (code === -1) {
				handleError();
			} else {
				message.error(msg || "系统出错", 5);
			}
			return Promise.reject(new Error(msg || "Error"));
		}
	},
	(error) => {
		console.log("请求异常：", error);
		const { msg } = error.response.data;
		// 未认证
		if (error.response.status === 401) {
			handleError();
		} else {
			message.error("网络异常，请稍后再试!", 5);
			return Promise.reject(new Error(msg || "Error"));
		}
	},
);

// 统一处理请求响应异常
function handleError() {
	const { isLogin, logout } = store.user.useUserStore();
	if (isLogin) {
		modal.confirm({
			title: "您的登录账号已失效，请重新登录",
			icon: createVNode(ExclamationCircleOutlined),
			okText: "确认",
			cancelText: "取消",
			onOk() {
				logout();
			},
			onCancel() {},
		});
	}
}

// 导出实例
export default service;
