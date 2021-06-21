<template>
	<div class="post">
		<h2>{{ post.title }}</h2>
		<p>{{ snippet }}</p>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import Post from "@/TS/Interfaces/Post";

export default defineComponent({
	props: {
		post: {
			type: Object as PropType<Post>,
			required: true,
		},
	},
	setup(props) {
		const snippet = computed(() => {
			return props.post.body.substring(0, 100) + "...";
		});

		return { snippet };
	},
});
</script>

<style></style>
