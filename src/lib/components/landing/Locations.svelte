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
        grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
        gap: 2em;
        padding: 0 10vw;
        height: fit-content;
        z-index: 4;
        width: 100vw;
        margin: 3em 0;

        div {
            min-width: 20em;
            padding: 2em;
            border: solid 0.25em #5dd1d4;
            border-radius: 1em;
            min-height: 12em;
            display: flex;
            flex-direction: column;
            gap: 0.5em;
        }

        p {
            height: 4em;
            line-height: 1.4;
        }
    }

    @media (width < 800px) {
        section {
            max-height: 400px;
            overflow-y: scroll;
        }
    }
</style>