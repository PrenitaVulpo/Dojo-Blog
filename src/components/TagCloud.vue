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
		return { tags };
	},
});
</script>

<style>
.tag-cloud {
	padding: 0.675rem;
}
.tag-cloud h3 {
	border-bottom: 1px solid #eee;
	padding: 1rem 0.5rem;
	color: #444;
}
.tag-cloud div {
	display: inline-block;
	padding: 0.675rem;
}
.tag-cloud a {
	color: rgb(155, 152, 152);
	text-decoration: none;
}
.tag-cloud a.router-link-active {
	color: #ff8800;
	font-weight: 700;
}
</style>
