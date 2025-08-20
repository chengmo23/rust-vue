<template>
	<a-layout>
		<a-layout-sider :style="siderStyle" :width="150">
			<div style="color: black; height: 15%">
				<a-flex justify="center" align="center">
					<a-avatar size="large" src="https://game.gtimg.cn/images/lol/act/img/champion/Draven.png" />
					<a-flex :vertical="true" justify="center" align="flex-start">
						<a-tag :bordered="false" color="cyan">
							<a-typography-text
								style="width: 80px"
								:ellipsis="true"
								content="怎么会爱上她、、、"
							/>
						</a-tag>
					</a-flex>
				</a-flex>
				<a-flex :vertical="true" justify="center" align="center" gap="3">
					<a-tag :bordered="false" color="processing">
						<template #icon>
							<UserOutlined />
						</template>
						嘴强王者
					</a-tag>
					<a-tag :bordered="false" color="processing">
						<template #icon>
							<TeamOutlined />
						</template>
						千年黑铁
					</a-tag>
				</a-flex>
			</div>
			<div style="height: 70%">
				<a-flex :vertical="true" justify="space-between" align="center" style="height: 100%">
					<a-menu class="menu" :mode="state.mode" :items="items" :theme="state.theme"></a-menu>
					<a-flex :vertical="true" justify="center" align="center" gap="10" style="height: 20%">
						<a-popover placement="rightTop" trigger="click">
							<template #content>
								<a-qrcode
									size="300"
									value="https://www.antdv.com"
									icon="https://www.antdv.com/assets/logo.1ef800a8.svg"
								/>
							</template>
							<a-tag color="blue">
								<template #icon>
									<UsergroupAddOutlined />
								</template>
								找人开黑
							</a-tag>
						</a-popover>
						<a-popover placement="rightTop" trigger="click">
							<template #content>
								<a-qrcode
									size="300"
									value="https://www.antdv.com"
									icon="https://www.antdv.com/assets/logo.1ef800a8.svg"
								/>
							</template>
							<a-tag color="blue">
								<template #icon>
									<CrownOutlined />
								</template>
								优质陪玩
							</a-tag>
						</a-popover>
						<a-popover placement="rightTop" trigger="click">
							<template #content>
								<a-qrcode
									size="300"
									value="https://www.antdv.com"
									icon="https://www.antdv.com/assets/logo.1ef800a8.svg"
								/>
							</template>
							<a-tag color="blue">
								<template #icon>
									<DollarOutlined />
								</template>
								精粹账号
							</a-tag>
						</a-popover>
					</a-flex>
				</a-flex>
			</div>
		</a-layout-sider>
		<a-layout>
			<a-layout-content>Content</a-layout-content>
		</a-layout>
	</a-layout>
</template>

<script setup>
import { h, reactive } from "vue";
import {
	IdcardTwoTone,
	CodeTwoTone,
	FireTwoTone,
	ControlTwoTone,
	SettingTwoTone,
	UserOutlined,
	TeamOutlined,
	UsergroupAddOutlined,
	DollarOutlined,
	CrownOutlined,
} from "@ant-design/icons-vue";

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
	getItem("占位占位", "6", h(SettingTwoTone)),
	getItem("占位占位", "7", h(SettingTwoTone)),
	getItem("占位占位", "8", h(SettingTwoTone)),
	getItem("占位占位", "9", h(SettingTwoTone)),
]);

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
	backgroundColor: "#fff",
};
</script>

<style scoped>
.menu {
	height: 70%;
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
}
</style>
