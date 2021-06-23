import Post from "@/TS/Interfaces/Post";
import { Ref, ref } from "vue";

interface returnProps {
	post: Ref<Post | undefined>;
	errorStatus: Ref<boolean>;
	errorMessage: Ref<string>;
	load(): Promise<void>;
}

const getPost = (id: number): returnProps => {
	const post = ref<Post | undefined>();
	const errorStatus = ref(false);
	const errorMessage = ref("");

	const load = async () => {
		try {
			//simulate delay
			await new Promise((resolve) => {
				setTimeout(resolve, 2000);
			});

			const data = await fetch("http://localhost:3000/posts/" + id);
			if (!data.ok) {
				throw new Error("post not avaliable");
			}
			post.value = await data.json();
			console.log(data);
		} catch (error) {
			errorStatus.value = true;
			errorMessage.value = error.message;
		}
	};

	return { post, errorMessage, errorStatus, load };
};

export default getPost;
