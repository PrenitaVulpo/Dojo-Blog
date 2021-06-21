<template>
	<div class="post-list">
		<div v-for="post in posts" :key="post.id">
			<h1>{{ post.title }}</h1>
		</div>
	</div>
</template>

<script lang="ts">
import Post from "../TS/Interfaces/Post";
import { defineComponent, PropType } from "vue";

export default defineComponent({
	props: {
		posts: {
			type: Array as PropType<Array<Post>>,
			required: true,
		},
	},
});
</script>

<style></style>
