<template>
	<div class="home">
		<h1>Home</h1>
		<div v-if="errorStatus">{{ errorMessage }}</div>
		<div v-if="posts.length">
			<PostList v-if="showPosts" :posts="posts" />
		</div>
		<div v-else>
			<Spinner />
		</div>
		<button @click="showPosts = !showPosts">Toggle Posts</button>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import getPosts from "@/composables/getPosts";
import PostList from "../components/PostList.vue";
import Spinner from "@/components/Spinner.vue";

export default defineComponent({
	name: "Home",
	components: {
		PostList,
		Spinner,
	},
	setup() {
		const { posts, errorStatus, errorMessage, load } = getPosts();

		load();

		const showPosts = ref(true);

		return { posts, showPosts, errorMessage, errorStatus };
	},
});
</script>
