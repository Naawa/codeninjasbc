<script lang="ts">
	import { dojos, locations } from "$lib/utils/dojos";

    let showMenu: boolean = false;
    let selectedDojo: string;

    $: dojoInfo = locations.find((location) => location.name == selectedDojo);
</script>

<section>
    <button class="primary-btn" on:click={() => showMenu = true}>BOOK FREE SESSION</button>
</section>

{#if showMenu}
    <div>
        <button class="secondary-btn" on:click={() => showMenu = false}>GO BACK</button>
        <menu>
            <b>Select A Center</b>
            <br>
            <select bind:value={selectedDojo}>
                <option value="" disabled>Select A Location</option>
                {#each dojos as dojo}
                    <option>{dojo}</option>
                {/each}
            </select>
            <a href="/{dojoInfo?.crm}" target="_blank">
                <button class="primary-btn">NEXT</button>
            </a>
        </menu>
    </div>
{/if}

<style lang="scss">
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4em;
        background-color: white;
        z-index: 10;
    }

    div {
        position: absolute;
        height: 100vh;
        width: 100vw;
        background-color: white;
        top: 4em;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4em;
        flex-direction: column;
        gap: 2em;

        menu {
            display: flex;
            justify-content: center;
            align-items: center; 
            flex-direction: column;
            min-width: 250px;

            button {
                margin: 2em 0;
            }
        }
    }
</style>