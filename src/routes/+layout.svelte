<script lang="ts">
	import Footer from "$lib/components/footer/Footer.svelte";
	import InquiryForm from "$lib/components/inquiry/InquiryForm.svelte";
	import Navigation from "$lib/components/navigation/Navigation.svelte";
    import "$lib/scss/styles.scss"
    export let data;
</script>

<Navigation></Navigation>
<slot />
<InquiryForm {data}></InquiryForm>
<Footer></Footer>