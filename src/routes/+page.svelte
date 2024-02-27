<script lang="ts">
    import Contact from "$lib/components/Contact.svelte"
	import Dojos from "$lib/components/Dojos.svelte";
	import Video from "$lib/components/Video.svelte";
	import About from "$lib/components/about.svelte";

	export let data;
</script>

<Video></Video>
<About></About>
<Dojos></Dojos>
<Contact {data}></Contact>