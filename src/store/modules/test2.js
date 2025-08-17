import { defineStore } from "pinia";

export const useTestStore = defineStore("test2", () => {
	const count = ref(0);
	function add() {
		count.value++;
	}
	return { count, add };
});
