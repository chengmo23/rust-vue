<template>
	<div>
		<h1>Test Page</h1>
	</div>

	<div>
		<h1>hello</h1>
		<a-space wrap>
			<a-button type="primary">Primary Button</a-button>
			<a-button>Default Button</a-button>
			<a-button type="dashed">Dashed Button</a-button>
			<a-button type="text">Text Button</a-button>
			<a-button type="link">Link Button</a-button>
		</a-space>
		<hr />
		<a-space>
			<home-outlined />
			<setting-filled />
			<smile-outlined />
			<sync-outlined spin />
			<smile-outlined />
			<loading-outlined />
			<edit-outlined />
		</a-space>
	</div>

	<div>
		<h1>Counter: {{ count }}</h1>
		<a-button @click="add">add</a-button>
		<br />
		<h1>Counter: {{ $store.test2.useTestStore().count }}</h1>
		<button @click="$store.test2.useTestStore().add">click</button>
	</div>
</template>

<script setup>
const { proxy } = getCurrentInstance();

let useTestStore = proxy.$store.test.useTestStore();
let { count, add } = toRefs(useTestStore);
</script>

<style scoped>
h1 {
	color: blue;
}
</style>
