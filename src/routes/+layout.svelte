<script lang="ts">
    import Navigation from "$lib/components/navigation.svelte";
    import "$lib/scss/styles.scss"
</script>

<svelte:head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-12HD95QXZJ"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-12HD95QXZJ');
    </script>
</svelte:head>

<Navigation></Navigation>
<slot />
