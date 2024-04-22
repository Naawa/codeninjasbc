<script>
	import { browser } from "$app/environment";
	import About from "$lib/components/landing/About.svelte";
	import CampsSection from "$lib/components/landing/CampsSection.svelte";
	import CreateSection from "$lib/components/landing/CreateSection.svelte";
	import Hero from "$lib/components/landing/Hero.svelte";
	import Impact from "$lib/components/landing/Impact.svelte";
	import Junior from "$lib/components/landing/Junior.svelte";
	import LocationMap from "$lib/components/landing/LocationMap.svelte";
	import Locations from "$lib/components/landing/Locations.svelte";
	import LocationsHeading from "$lib/components/landing/LocationsHeading.svelte";
	import { onMount } from "svelte";

	onMount(() => {
		if(browser) {
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if(entry.isIntersecting) {
						entry.target.classList.add('show');
						entry.target.classList.remove('hidden');
					}
					else {
						entry.target.classList.add('hidden');
						entry.target.classList.remove('show');
					}
				})
			}, {
				threshold: [1, 0]
			})
			let elements = document.querySelectorAll('*:not(section):not(iframe):not(img):not(html):not(body)');
			elements.forEach((el) => observer.observe(el));
		}
	})
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