<script lang="ts">
    import Background from "$lib/components/background.svelte";
    import Analytics from "$lib/components/analytics.svelte";
	import Navigation from "$lib/components/navigation.svelte";
    import "$lib/scss/styles.scss"
</script>

<Background></Background>
<Analytics></Analytics>
<Navigation></Navigation>
<slot />

