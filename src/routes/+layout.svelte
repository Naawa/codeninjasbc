<script lang="ts">
	import Footer from "$lib/components/footer/Footer.svelte";
	import InquiryForm from "$lib/components/inquiry/InquiryForm.svelte";
	import Navigation from "$lib/components/navigation/Navigation.svelte";
	import Gtag from "$lib/components/google/Gtag.svelte";
    import "$lib/scss/styles.scss"
    export let data;
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
<InquiryForm {data}></InquiryForm>
<Footer></Footer>