<template>
	<PostList v-if="filteredPosts" :posts="filteredPosts" />
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import getPosts from "@/composables/getPosts";
import { useRoute } from "vue-router";
import PostList from "../components/PostList.vue";
// import Post from "../TS/Interfaces/Post";

export default defineComponent({
	components: {
		PostList,
	},
	// props: {
	// 	tag: {
	// 		type: String,
	// 		required: true,
	// 	},
	// },
	setup() {
		const { posts, load } = getPosts();
		load();
		const route = useRoute();

		const filteredPosts = posts.value.filter((post) =>
			post.tags.includes(route.params.tag),
		);

		console.log(filteredPosts);

		return { filteredPosts };
	},
});
</script>

<style></style>
