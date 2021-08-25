import { Ref, ref } from "vue";
import Post from "../TS/Interfaces/Post";

export interface GetTagsReturnInterface {
	tags: Ref<string[]>;
}

const getTags = (posts: Post[]): GetTagsReturnInterface => {
	const tags: Ref<string[]> = ref([]);

	const tagSet: Set<string> = new Set();

	posts.forEach((post) => {
		post.tags.forEach((tag) => {
			tagSet.add(tag);
		});
	});

	tags.value = [...tagSet];

	return { tags };
};

export default getTags;
