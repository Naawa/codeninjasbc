<script>
	import About from "$lib/components/landing/About.svelte";
	import CampsSection from "$lib/components/landing/CampsSection.svelte";
	import CreateSection from "$lib/components/landing/CreateSection.svelte";
	import Hero from "$lib/components/landing/Hero.svelte";
	import Impact from "$lib/components/landing/Impact.svelte";
	import Junior from "$lib/components/landing/Junior.svelte";
	import LocationMap from "$lib/components/landing/LocationMap.svelte";
	import Locations from "$lib/components/landing/Locations.svelte";
	import LocationsHeading from "$lib/components/landing/LocationsHeading.svelte";

</script>

<svelte:head>
	<title>Code Ninjas BC</title>
	<meta name="title" content="Code Ninjas BC">
	<meta name="description" content="Code Ninjas is a learning platform for kids that makes coding fun and interactive. It offers year-round programs that are engaging and flexible.">
</svelte:head>

<Hero></Hero>
<About></About>
<CreateSection></CreateSection>
<CampsSection></CampsSection>
<Junior></Junior>
<Impact></Impact>
<LocationsHeading></LocationsHeading>
<Locations></Locations>
<LocationMap></LocationMap>