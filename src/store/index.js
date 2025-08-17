// 拿到modules下的所有文件（异步加载）
const modulesFiles = import.meta.glob("./modules/*.*");

async function getModules() {
	const modules = {};
	const entries = Object.entries(modulesFiles);
	const loaded = await Promise.all(entries.map(([key, importer]) => importer().then((mod) => [key, mod])));
	loaded.forEach(([key, value]) => {
		const moduleName = key.replace(/(.*\/)*([^.]+).*/gi, "$2");
		modules[moduleName] = value.default || value;
	});
	return modules;
}

// 自动挂载到 Vue 全局
export async function install(app) {
	app.config.globalProperties.$store = await getModules();
}
