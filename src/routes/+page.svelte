<script lang="ts">
	import Video from "$lib/components/Video.svelte";
	import Contact from "$lib/components/Contact.svelte"
	import Programs from "$lib/components/Programs.svelte";

	export let data;
</script>

<Video></Video>
<Programs></Programs>
<Contact {data}></Contact>