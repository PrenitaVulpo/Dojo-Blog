<template>
	<div v-if="errorStatus">{{ errorMessage }}</div>
	<div v-if="post" class="post">
		<h3>{{ post.title }}</h3>
		<p class="pre">{{ post.body }}</p>
		<span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import getPost from "@/composables/getPost";

export default defineComponent({
	name: "Details",
	props: {
		id: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const { post, errorMessage, errorStatus, load } = getPost(
			parseInt(props.id),
		);

		load();

		return { post, errorMessage, errorStatus };
	},
});
</script>
<style>
.post {
	max-width: 75rem;
	margin: 0 auto;
}
.post p {
	color: #444;
	line-height: 1.5em;
	margin-top: 2.5rem;
}
.pre {
	white-space: pre-wrap;
}
</style>
