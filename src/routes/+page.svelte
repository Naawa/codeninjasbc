<script lang="ts">
	import Landing from "$lib/components/Landing.svelte";
	import Contact from "$lib/components/Contact.svelte"
	import About from "$lib/components/About.svelte";
	import LocationMap from "$lib/components/LocationMap.svelte";

	export let data;
</script>


<Landing></Landing>
<About></About>
<LocationMap></LocationMap>
<Contact {data}></Contact>