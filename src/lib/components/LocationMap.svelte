<script lang="ts">
	import { locations } from "$lib/utils/dojoMarkers";
</script>

<h2>Dojos</h2>
<section>
    {#each locations as dojo}
        <div style="top: {dojo.mapPosition[1]}%; left: {dojo.mapPosition[0]}%">
            <span>
                <p>{dojo.phone}</p>
                <p>{dojo.address}</p>
            </span>
        </div>
    {/each}
</section>

<style lang="scss">
    section {
        background-image: url('/images/map.png');
        background-size: 100% 100%;
        aspect-ratio: 18/9;
        width: 100%;
        max-width: 100vw;
        background-repeat: no-repeat;
        border: solid 1px;
        position: relative;
        margin: 4em;

        div {
            position: absolute;
            background-image: url('/images/marker.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            height: 8%;
            width: 3%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 0;
            transition: z-index 0s 1s, translate 0.5s;

            &:last-of-type {
                background-image: url('/images/victoriaMarker.png');
                height: 10%;
                width: 10%
            }


            span {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-width: 15vw;
                min-height: 100px;
                gap: 1px;
                translate: 0 70%;
                visibility: hidden;
                position: absolute;
                
                p {
                    background-color: rgb(0, 145, 182);
                    color: white;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                    padding: 1px;
                    text-align: center;
                    font-size: smaller
                }
            }

            &:hover {
                translate: 0px -2px;
                z-index: 2;
                transition: z-index 0s 0s, translate 0.5s;

                span {
                    visibility: visible;
                }
            }
        }
    }
</style>