<template>
	<div class="home"></div>
	<PostList :posts="posts" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PostList from "../components/PostList.vue";

export default defineComponent({
	name: "Home",
	components: {
		PostList,
	},
	setup() {
		const posts = ref([
			{ title: "welcome to the blog", body: "lorem ipsum", id: 1 },
			{ title: "top css 5 skills", body: "lorem ipsum", id: 2 },
		]);

		return { posts };
	},
});
</script>
