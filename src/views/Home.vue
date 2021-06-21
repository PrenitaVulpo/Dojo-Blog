<template>
	<div class="home">
		<h1>Home</h1>
		<button @click="showPosts = !showPosts">
			Toggle Posts
		</button>
		<PostList v-if="showPosts" :posts="posts" />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PostList from "../components/PostList.vue";

export default defineComponent({
	name: "Home",
	components: {
		PostList,
	},
	setup() {
		const posts = ref([
			{
				title: "welcome to the blog",
				body: "Aenean quis sapien eget nulla rhoncus tempor sit amet et massa. Aliquam condimentum risus id elit eleifend, sed tempus arcu sodales. Fusce dui magna, vulputate vitae hendrerit at, euismod ac justo. Maecenas egestas mauris in erat accumsan, a molestie enim aliquet. Aenean ultricies felis eu vehicula varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent tempor efficitur enim, ut commodo velit feugiat ac. Mauris in accumsan dui, sit amet vehicula risus. Aliquam lacinia dignissim ultrices. Sed bibendum efficitur efficitur. Praesent venenatis diam at tellus ullamcorper, quis mattis sem posuere. Ut porttitor condimentum lectus eget bibendum. Duis efficitur odio ac felis pharetra, nec consectetur mauris convallis. Nulla ornare bibendum vulputate. Sed erat magna, malesuada quis placerat eu, commodo at eros.",
				id: 1,
			},
			{
				title: "top css 5 skills",
				body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a cursus velit. Nulla sollicitudin felis massa, ornare feugiat purus tempor quis. Cras eget justo molestie, bibendum risus et, imperdiet ante. Donec congue ligula non tempus ullamcorper. Curabitur vitae est at nibh aliquet luctus eu fermentum tortor. Mauris eget posuere lorem. Nam ut erat convallis, faucibus diam sit amet, efficitur lorem. Donec nec risus mattis, pretium elit at, ornare nulla.",
				id: 2,
			},
		]);

		const showPosts = ref(true);

		return { posts, showPosts };
	},
});
</script>
