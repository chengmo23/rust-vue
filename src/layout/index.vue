<template>
	<a-layout>
		<a-layout-sider :style="siderStyle" :width="150">
			<a-menu class="menu" :mode="state.mode" :items="items" :theme="state.theme"></a-menu>
		</a-layout-sider>
		<a-layout>
			<a-layout-header :style="headerStyle">Header</a-layout-header>
			<a-layout-content :style="contentStyle">Content</a-layout-content>
			<a-layout-footer :style="footerStyle">Footer</a-layout-footer>
		</a-layout>
	</a-layout>
</template>

<script setup>
import { h, reactive } from "vue";
import { IdcardTwoTone, CodeTwoTone, FireTwoTone, ControlTwoTone, SettingTwoTone } from "@ant-design/icons-vue";

const { proxy } = getCurrentInstance();
const state = reactive({
	mode: "inline",
	theme: "light",
});

function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	};
}

const items = reactive([
	getItem("战绩查询", "1", h(IdcardTwoTone)),
	getItem("对局分析", "2", h(FireTwoTone)),
	getItem("符文助手", "3", h(ControlTwoTone)),
	getItem("无人值守", "4", h(CodeTwoTone)),
	getItem("管理设置", "5", h(SettingTwoTone)),
]);

// const items = reactive([
// 	getItem("Navigation One", "1", h(CodeTwoTone)),
// 	getItem("Navigation Two", "2", h(CodeTwoTone)),
// 	getItem("Navigation Two", "sub1", h(CodeTwoTone), [
// 		getItem("Option 3", "3"),
// 		getItem("Option 4", "4"),
// 		getItem("Submenu", "sub1-2", null, [getItem("Option 5", "5"), getItem("Option 6", "6")]),
// 	]),
// 	getItem("Navigation Three", "sub2", h(CodeTwoTone), [
// 		getItem("Option 7", "7"),
// 		getItem("Option 8", "8"),
// 		getItem("Option 9", "9"),
// 		getItem("Option 10", "10"),
// 	]),
// ]);

const changeMode = (checked) => {
	state.mode = checked ? "vertical" : "inline";
};

const changeTheme = (checked) => {
	state.theme = checked ? "dark" : "light";
};
const siderStyle = {
	height: "100vh",
	textAlign: "center",
	color: "#fff",
	backgroundColor: "#3ba0e9",
};
</script>

<style scoped>
.menu {
	width: 150px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

:deep(.menu .ant-menu-item) {
	padding: 0 !important;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
}
:deep(.menu .ant-menu-item .ant-menu-title-content) {
	width: auto !important;
	flex: none;
	text-align: center;
}
</style>
