<script lang="ts">
    import Contact from "$lib/components/Contact.svelte"
	import Video from "$lib/components/Video.svelte";
	import Programs from "$lib/components/Programs.svelte";

	export let data;
</script>

<Video></Video>
<Programs></Programs>
<Contact {data}></Contact>