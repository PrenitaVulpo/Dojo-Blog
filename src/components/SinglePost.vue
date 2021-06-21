<template>
	<div class="post">
		<h1>{{ post.title }}</h1>
		<p>{{ post.body }}</p>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Post from "@/TS/Interfaces/Post";

export default defineComponent({
	props: {
		post: {
			type: Object as PropType<Post>,
			required: true,
		},
	},
	// setup() {},
});
</script>

<style></style>
