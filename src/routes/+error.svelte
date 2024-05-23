<svelte:head>
	<title>Error</title>
	<meta name="description" content="Form submitted successfully.">
</svelte:head>


<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

    let animate = false;

    onMount(() => {
        animate = true;
    })
</script>

<section>
    {#if animate}
        <div>
            <h1 class="bold-9" transition:fly={{ y: 100, duration: 800 }}>{$page.status}</h1>
            <h2 transition:fly={{ y: 100, duration: 800 }} class="dark-text bold-9">{$page.error?.message}</h2>
        </div>
        <a transition:fly={{ y: 100, duration: 800, delay: 100 }} href="/"><button class="primary-btn">Home Page</button></a>
    {/if}
</section>


<style lang="scss">
    section {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: calc(100vh - 6em);
        width: 100vw;
        padding: 15vw;
        gap: 3em;

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.5em;
        }

        a, button {
            z-index: 4;
        }
    }
</style>