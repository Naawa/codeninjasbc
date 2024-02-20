<script lang="ts">
    import Navigation from "$lib/components/navigation.svelte";
	import Analytics from "$lib/components/analytics.svelte";
    import "$lib/scss/styles.scss"
</script>

<Analytics></Analytics>
<Navigation></Navigation>
<slot />
