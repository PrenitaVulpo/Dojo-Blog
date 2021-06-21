<template>
	<div class="home"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "Home",
	components: {},
	setup() {
		const posts = ref([
			{ title: "welcome to the blog", body: "lorem ipsum", id: 1 },
			{ title: "top css 5 skills", body: "lorem ipsum", id: 2 },
		]);
	},
});
</script>
