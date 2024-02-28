<script lang="ts">
    import Contact from "$lib/components/contact.svelte"
	import Video from "$lib/components/video.svelte";
	import Programs from "$lib/components/programs.svelte";

	export let data;
</script>

<Video></Video>
<Programs></Programs>
<Contact {data}></Contact>