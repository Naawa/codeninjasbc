<script lang="ts">
	import Video from "$lib/components/Video.svelte";
	import Contact from "$lib/components/Contact.svelte"
	import About from "$lib/components/About.svelte";

	export let data;
</script>

<Video></Video>
<About></About>
<Contact {data}></Contact>