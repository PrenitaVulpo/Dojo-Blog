<template>
	<div class="home">
		<h1>Home</h1>
		<div v-if="errorStatus">{{ errorMessage }}</div>
		<button @click="showPosts = !showPosts">Toggle Posts</button>
		<div v-if="posts.length">
			<PostList v-if="showPosts" :posts="posts" />
		</div>
		<div v-else>
			<Spinner />
		</div>
		<TagCloud :posts="posts" />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import getPosts from "@/composables/getPosts";
import PostList from "../components/PostList.vue";
import Spinner from "@/components/Spinner.vue";
import TagCloud from "@/components/TagCloud.vue";

export default defineComponent({
	name: "Home",
	components: {
		PostList,
		Spinner,
		TagCloud,
	},
	setup() {
		const { posts, errorStatus, errorMessage, load } = getPosts();

		load();

		const showPosts = ref(true);

		return { posts, showPosts, errorMessage, errorStatus };
	},
});
</script>

<style>
.home {
	max-width: 1200px;
	margin: 0 auto;
	padding: 10px;
}
</style>
