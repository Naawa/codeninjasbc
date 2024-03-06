<script lang="ts">
    import Background from "$lib/components/background.svelte";
    import Analytics from "$lib/components/analytics.svelte";
	import Logo from "$lib/components/logo.svelte";
    import "$lib/scss/styles.scss"
</script>

<Background></Background>
<Analytics></Analytics>
<Logo></Logo>
<slot />

