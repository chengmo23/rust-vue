import { message } from "ant-design-vue";

export default {
	data() {
		return {
			sexList: [
				{ name: "不想说", value: 0 },
				{ name: "男", value: 1 },
				{ name: "女", value: 2 },
			],
		};
	},
	methods: {
		// 操作成功消息提醒内容
		submitOk(msg) {
			message.success(msg || "操作成功！");
		},
		// 操作失败消息提醒内容
		submitFail(msg) {
			message.error(msg || "网络异常，请稍后重试！");
		},
	},
};
