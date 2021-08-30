import Post from "@/TS/Interfaces/Post";
import { Ref, ref } from "vue";
import { projectFirestore } from "@/Firebase/config";
import { collection, getDocs } from "firebase/firestore";

interface returnProps {
	posts: Ref<Post[]>;
	errorStatus: Ref<boolean>;
	errorMessage: Ref<string>;
	load(): Promise<void>;
}

const getPosts = (): returnProps => {
	const posts = ref<Post[]>([]);
	const errorStatus = ref(false);
	const errorMessage = ref("");

	const load = async () => {
		try {
			const querySnapshot = await getDocs(
				collection(projectFirestore, "posts"),
			);

			posts.value = querySnapshot.docs.map((doc) => {
				return {
					id: doc.id,
					title: doc.data().title,
					body: doc.data().body,
					tags: doc.data().tags,
				};
			});
		} catch (error) {
			errorStatus.value = true;
			errorMessage.value = error.message;
		}
	};

	return { posts, errorMessage, errorStatus, load };
};

export default getPosts;
