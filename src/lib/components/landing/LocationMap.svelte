<script lang="ts">
	import { locations } from "$lib/utils/dojos";
</script>

<section>
    {#each locations as dojo}
        <div class="animateOnView"  style="top: {dojo.mapPosition[1]}%; left: {dojo.mapPosition[0]}%">
            <span>
                <p>{dojo.phone}</p>
                <p>{dojo.address}</p>
            </span>
        </div>
    {/each}
</section>

<style lang="scss">
    section {
        background-image: url('/graphics/map/map.png');
        background-size: 100% 100%;
        aspect-ratio: 16/9;
        width: 100%;
        max-width: 80vw;
        background-repeat: no-repeat;
        border: solid 1px;
        position: relative;
        max-height: 85dvh;
        margin: 2em auto 4em;

        div {
            position: absolute;
            background-image: url('/graphics/map/marker.png');
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


            span {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-width: 20vw;
                min-height: 100px;
                gap: 1px;
                translate: 0 70%;
                visibility: hidden;
                position: absolute;
                
                p {
                    background-color: #187abf;
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
    .animateOnView {
        opacity: 1;
        scale: 1;
        animation: slide-fade-in both;
        animation-timeline: view();
        animation-range: contain 10% contain 35%;
    }

    @keyframes slide-fade-in {
        from {
            opacity: 0;
            scale: 0;
            transform: translateY(5vh);
        }
    }
</style>