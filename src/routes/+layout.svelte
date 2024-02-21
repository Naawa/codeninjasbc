<script lang="ts">
    import Analytics from "$lib/components/analytics.svelte";
	import Navigation from "$lib/components/navigation.svelte";
    import "$lib/scss/styles.scss"
</script>

<Analytics></Analytics>
<Navigation></Navigation>
<slot />
