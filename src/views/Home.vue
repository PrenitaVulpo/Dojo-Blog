<template>
	<div class="home"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Home",
	components: {},
	setup() {
		console.log("setup");
	},
	beforeCreate() {
		console.log("creating");
	},
	created() {
		console.log("created");
	},
	beforeMount() {
		console.log("mounting");
	},
	mounted() {
		console.log("mounted");
	},
});
</script>
