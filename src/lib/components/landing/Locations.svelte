<script>
	import { locations } from "$lib/utils/dojos";
</script>

<section>
    {#each locations as location}
        <div>
            <h5 class="bold-9 dark-text">{location.name}</h5>
            <p>{location.address}</p>
            <b class="ninja-blue">{location.phone}</b>
        </div>
    {/each}
</section>


<style lang="scss">
    section {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
        gap: 2em;
        padding: 0 10vw;
        height: fit-content;
        z-index: 4;
        width: 100vw;
        margin: 3em 0;

        div {
            min-width: 6em;
            padding: 2em;
            box-shadow: 0 4px 12px #0067be40;
            border-radius: 1em;
            min-height: 5em;
            display: flex;
            flex-direction: column;
            gap: 0.5em;
        }

        p {
            height: 5em;
            line-height: 1.4;
            text-wrap: balance;
        }
    }

    @media (width < 800px) {
        section {
            max-height: 400px;
            overflow-y: scroll;
        }
    }
</style>