<svelte:head>
	<title>Birthdays at Code Ninjas!</title>
	<meta name="description" content="Celebrate your childs birthday at Code Ninjas!">
</svelte:head>

<script>
	import { browser } from "$app/environment";
	import About from "$lib/components/birthdays/About.svelte";
	import Gallery from "$lib/components/birthdays/Gallery.svelte";
	import Hero from "$lib/components/birthdays/Hero.svelte";
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
			let elements = document.querySelectorAll('p, b, h1, h2, h3, h4, h5, button, #logo, a');
			elements.forEach((el) => observer.observe(el));
		}
	})
</script>

<Hero></Hero>
<About></About>
<Gallery></Gallery>
