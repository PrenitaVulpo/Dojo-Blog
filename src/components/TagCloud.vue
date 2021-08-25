<template>
	<div class="tag-cloud">
		<h3>Tags</h3>
		<div v-for="tag in tags" :key="tag">
			<router-link :to="{ name: 'Tag', params: { tag: tag } }">
				#{{ tag }}
			</router-link>
		</div>
	</div>
</template>

<script lang="ts">
import getTags from "../composables/getTags";
import Post from "@/TS/Interfaces/Post";
import { defineComponent, PropType } from "vue";

export default defineComponent({
	props: {
		posts: {
			type: Array as PropType<Array<Post>>,
			required: true,
		},
	},
	setup(props) {
		const { tags } = getTags(props.posts);

		return { tags };
	},
});
</script>

<style></style>
