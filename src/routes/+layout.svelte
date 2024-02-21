<script lang="ts">
    import Navigation from "$lib/components/navigation.svelte";
    import "$lib/scss/styles.scss"
</script>

<svelte:head>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-J756NXPL9Q');
    </script>
</svelte:head>

<Navigation></Navigation>
<slot />
