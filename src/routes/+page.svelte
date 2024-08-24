<svelte:head>
	<title>Code Ninjas BC</title>
	<meta name="title" content="Code Ninjas BC">
	<meta name="description" content="Code Ninjas is a learning platform for kids that makes coding fun and interactive. It offers year-round programs that are engaging and flexible.">
</svelte:head>

<script async lang="ts">
	import { browser } from "$app/environment";
	import BirthdayAbout from "$lib/components/birthdays/BirthdayAbout.svelte";
	import BirthdayHero from "$lib/components/birthdays/BirthdayHero.svelte";
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
			let elements = document.querySelectorAll('p, b, h1, h2, h3, h4, h5, button, a');
			elements.forEach((el) => observer.observe(el));
		}
	})
</script>

<Hero></Hero>
<About></About>
<CreateSection></CreateSection>
<CampsSection></CampsSection>
<Junior></Junior>
<BirthdayHero></BirthdayHero>
<BirthdayAbout></BirthdayAbout>
<LocationsHeading></LocationsHeading>
<Locations></Locations>
<LocationMap></LocationMap>