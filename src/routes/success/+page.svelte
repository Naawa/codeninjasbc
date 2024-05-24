<svelte:head>
	<title>Success</title>
	<meta name="description" content="Form submitted successfully.">
</svelte:head>


<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

    let animate = false;

    onMount(() => {
        animate = true;
    })

    export let data;
</script>

<section>
    {#if animate}
        <h3 transition:fly={{ y: 100, duration: 800 }}>{data.message}</h3>
        <a transition:fly={{ y: 100, duration: 800, delay: 100 }} href="/"><button class="primary-btn">Home Page</button></a>
    {/if}
</section>


<style lang="scss">
    section {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        width: 100vw;
        padding: 15vw;
        gap: 4em;

        h3 {
            text-align: center;
        }

        a, button {
            z-index: 4;
        }
    }
</style>