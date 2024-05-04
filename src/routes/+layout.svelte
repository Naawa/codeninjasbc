<script lang="ts">
	import Footer from "$lib/components/footer/Footer.svelte";
	import InquiryForm from "$lib/components/inquiry/InquiryForm.svelte";
	import Navigation from "$lib/components/navigation/Navigation.svelte";
	import Gtag from "$lib/components/google/Gtag.svelte";
    import "$lib/scss/styles.scss"
	import { page } from "$app/stores";
	import { locations } from "$lib/utils/dojos.js";

    export let data;

	let centerPage = false;

	for(let i = 0; i < locations.length; i++) {
		if(`/${locations[i].crm}` == $page.url.pathname) {
			centerPage = true
			break;
		}
	}
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
	<link rel="manifest" href="/favicon/site.webmanifest">
</svelte:head>


<Gtag></Gtag>
<Navigation></Navigation>
<slot />

{#if !centerPage && $page.url.pathname != "/dev" && $page.url.pathname != "/tour"}
<InquiryForm {data}></InquiryForm>
{/if}
<Footer></Footer>