<template>
	<div v-if="errorStatus">{{ errorMessage }}</div>
	<div v-if="posts.length" class="layout">
		<PostList :posts="filteredPosts" />
		<TagCloud :posts="posts" />
	</div>
	<div v-else>
		<Spinner />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import getPosts from "@/composables/getPosts";
import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";
import TagCloud from "../components/TagCloud.vue";
import Post from "../TS/Interfaces/Post";
import { useRoute } from "vue-router";

export default defineComponent({
	components: {
		PostList,
		Spinner,
		TagCloud,
	},
	setup() {
		const { posts, load, errorStatus, errorMessage } = getPosts();
		load();

		const route = useRoute();

		return { posts, route, errorStatus, errorMessage };
	},
	computed: {
		filteredPosts(): Post[] {
			const result = this.posts.filter((post) =>
				post.tags.includes(this.$route.params.tag as string),
			);

			console.log(result);

			return result;
		},
	},
});
</script>

<style>
.layout {
	display: grid;
	grid-template-columns: 3fr 1fr;
	gap: 1.25rem;
}
</style>
