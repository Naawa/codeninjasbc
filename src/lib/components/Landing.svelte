<script>
	import { browser } from "$app/environment";
	import Video from "./Video.svelte";
</script>

<section>
    <Video></Video>
    <div>
        <span>
            <h2>Kids Learn to Code</h2>
            <p>Blocks, JavaScript, C#, and More!</p>
        </span>
        <button on:click={() => {if(browser) {document?.getElementById('contact')?.scrollIntoView({ block: 'end', behavior: 'smooth' })}}}>Learn More</button>
    </div>
</section>

<style lang="scss">
    section {
        height: fit-content;
        width: 100dvw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 6em;
        text-align: center;
        padding: 0;

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4em;
            height: 100%;
            justify-content: center;
            height: fit-content;
            padding: 2em;
            border-radius: 1em;
            
            span {
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: center;
                align-items: center;
            }

            button {
                width: fit-content;
                padding: 1em;
                background-color: #37d7ff;
                color: white;
                box-shadow: 0 0 0.1em 0.1em #6eafff8c;

                &:hover {
                    background: #00a0bc;
                }
            }
        }
    }

    @media (width < 1200px) {
        section {
            flex-direction: column;
            gap: 4em;
            height: fit-content;

            div {
                justify-content: center;
                align-items: center;
                gap: 2em;
                order: 1;

                span {
                    align-items: center;
                }
            }
        }
    }
</style>