<template>
	<div class="tag-cloud">
		<h3>Tags</h3>
		<div v-if="tags.length">
			<div v-for="tag in tags" :key="tag">
				<router-link :to="{ name: 'Tag', params: { tag: tag } }">
					#{{ tag }}
				</router-link>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import getTags from "../composables/getTags";
import Post from "@/TS/Interfaces/Post";
// import Spinner from "@/components/Spinner.vue";
import { defineComponent, PropType } from "vue";

export default defineComponent({
	// components: { Spinner },
	props: {
		posts: {
			type: Array as PropType<Array<Post>>,
			required: true,
		},
	},
	setup(props) {
		const { tags } = getTags(props.posts);
		console.log(tags.value);
		return { tags };
	},
});
</script>

<style></style>
