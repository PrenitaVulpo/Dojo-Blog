import Post from "@/TS/Interfaces/Post";
import { Ref, ref } from "vue";
import { projectFirestore } from "@/Firebase/config";
import { collection, getDoc, doc } from "firebase/firestore";

interface returnProps {
	post: Ref<Post | undefined>;
	errorStatus: Ref<boolean>;
	errorMessage: Ref<string>;
	load(): Promise<void>;
}

const getPost = (id: string): returnProps => {
	const post = ref<Post | undefined>();
	const errorStatus = ref(false);
	const errorMessage = ref("");
	const docRef = doc(projectFirestore, "posts", id);

	const load = async () => {
		try {
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				post.value = {
					id,
					title: docSnap.data().title,
					body: docSnap.data().body,
					tags: docSnap.data().tags,
				};
			} else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
			}
		} catch (error) {
			errorStatus.value = true;
			errorMessage.value = error.message;
		}
	};

	return { post, errorMessage, errorStatus, load };
};

export default getPost;
