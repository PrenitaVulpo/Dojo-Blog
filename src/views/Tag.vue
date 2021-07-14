<template>
	<PostList :posts="filteredPosts" />
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import getPosts from "@/composables/getPosts";
import { useRoute } from "vue-router";
import PostList from "../components/PostList.vue";

export default defineComponent({
	components: {
		PostList,
	},
	setup() {
		const { posts, load } = getPosts();
		load();
		const route = useRoute();

		const filteredPosts = posts.value.filter((post) =>
			post.tags.includes(route.params.tag),
		);

		return { filteredPosts };
	},
});
</script>

<style></style>
