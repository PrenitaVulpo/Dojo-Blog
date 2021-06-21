<template>
	<div class="post-list">
		<div v-for="post in posts" :key="post.id">
			<SinglePost :post="post" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Post from "../TS/Interfaces/Post";
import SinglePost from "@/components/SinglePost.vue";

export default defineComponent({
	components: {
		SinglePost,
	},
	props: {
		posts: {
			type: Array as PropType<Array<Post>>,
			required: true,
		},
	},
});
</script>

<style></style>
