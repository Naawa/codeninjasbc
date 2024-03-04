<script>
	import { browser } from "$app/environment";
	import Video from "./Video.svelte";
</script>

<section>
    <div>
        <span>
            <h2>Kids Learn to Code</h2>
            <p>Blocks, JavaScript, C#, and More!</p>
        </span>
        <button on:click={() => {if(browser) {document?.getElementById('contact')?.scrollIntoView({ block: 'end', behavior: 'smooth' })}}}>Learn More</button>
    </div>
    <Video></Video>
</section>

<style lang="scss">
    section {
        height: 50dvh;
        width: 90dvw;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 6em;
        text-align: center;

        div {
            display: flex;
            flex-direction: column;
            gap: 4em;
            height: 100%;
            justify-content: center;
            
            span {
                display: flex;
                flex-direction: column;
                align-items: start;
            }

            button {
                width: fit-content;
                padding: 1em;
                border-radius: 0.5em;
                background: -webkit-linear-gradient(#0099ff, #37a2ff);
                color: white;
                box-shadow: 0 0 0.1em 0.1em #6eafff8c;

                &:hover {
                    background-color: #4085bd;
                }
            }
        }
    }

    @media (width < 1200px) {
        section {
            flex-direction: column;
            gap: 4em;
            padding: 1em 0;
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