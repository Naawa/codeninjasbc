<script lang="ts">
	import Landing from "$lib/components/Landing.svelte";
	import Contact from "$lib/components/Contact.svelte"
	import About from "$lib/components/About.svelte";

	export let data;
</script>


<Landing></Landing>
<About></About>
<Contact {data}></Contact>