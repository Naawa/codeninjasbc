<script>
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

    let animate = false;

    onMount(() => {
        animate = true;
    })
</script>
<section>
    <iframe src="https://www.youtube.com/embed/uzZstlbtTD4?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&enablejsapi=1&playlist=uzZstlbtTD4" frameborder="0" title="West Coquitlam Center">
    </iframe>
    {#if animate}
    <img id="logo" transition:fly={{ y: 50, duration: 600}} src="/logos/logo.png" alt="Logo.">
    <div>
        <div>
            <h1 class="bold-9" transition:fly={{ y: 50, duration: 600}}>Kids Learn Code</h1>
            <p transition:fly={{ y: 50, duration: 800}} >JavaScript, Lua, C# and More!</p>
        </div>
        <span>
            <a href="#inquiry">
                <button class="primary-btn">INQUIRE NOW</button>
            </a>
            <a href="#camps">
                <button class="secondary-btn">SUMMER CAMPS</button>
            </a>
        </span>
    </div>
    {/if}
    <img src="/graphics/dividers/curve.png" alt="">
</section>

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        min-height: 45em;
        height: fit-content;
        gap: 2em;
        padding: 4em 2em;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        background-color: #024372;


        iframe {
            position: absolute;
            aspect-ratio: 16/9;
            min-height: 100vh;
            min-width: 100vw;
            pointer-events: none;
            opacity: 0.8;
            translate: 0 -5em;
        }

        #logo {
            min-width: 350px;
            width: 50vw;
            z-index: 1;
            margin-bottom: 2em;
        }

        p {
            padding: 1em 2em;
            text-align: center;
            border-radius: 1em;
            background-color: #00000042;
            backdrop-filter: blur(10px);
            color: white;
            margin-bottom: 2em;
            max-width: 90vw;
        }

        img {
            max-width: 100vw;
            max-height: 40vh;

            &:last-of-type {
                position: absolute;
                bottom: -4em;
                background-color: transparent;
                height: 8em;
                width: 200vw;
                min-width: 1920px;
            }
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1em;

            div {
                display: flex;
                flex-direction: column;
                z-index: 1;
                margin-bottom: 0;

                h1, p {
                    color: white;
                    text-align: center;
                }
            }
        }
        span {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 1em;
            z-index: 1;
            width: 90vw;
            a {
                text-align: center;
            }
        }
    }
</style>