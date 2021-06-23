import { Ref, ref } from "vue";

interface returnProps {
	posts: Ref<never[]>;
	errorStatus: Ref<boolean>;
	errorMessage: Ref<string>;
	load(): Promise<void>;
}

const getPosts = (): returnProps => {
	const posts = ref([]);
	const errorStatus = ref(false);
	const errorMessage = ref("");

	const load = async () => {
		try {
			//simulate delay
			await new Promise((resolve) => {
				setTimeout(resolve, 200000);
			});

			const data = await fetch("http://localhost:3000/posts");
			if (!data.ok) {
				throw new Error("no data avaliable");
			}
			posts.value = await data.json();
			console.log(data);
		} catch (error) {
			errorStatus.value = true;
			errorMessage.value = error.message;
		}
	};

	return { posts, errorMessage, errorStatus, load };
};

export default getPosts;
