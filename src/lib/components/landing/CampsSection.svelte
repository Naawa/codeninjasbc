<script lang="ts">
	import { dojos, locations, serviceURIs, type Dojo } from "$lib/utils/dojos";
	import { fly } from "svelte/transition";
	import LearnMore from "./LearnMore.svelte";

    let showMenu: boolean = false;
    let selectedDojo: string;
    let dojoInfo: Dojo | undefined;

    $: dojoInfo = locations.find((location) => location.name == selectedDojo);
</script>
<section id="camps">
    <img src="/graphics/camps/campsbg.webp" alt="">
    <div>
        <img src="/graphics/camps/campsFocus.jpg" alt="">
    </div>
    <div>
        <p>AGES 5 TO 14</p>
        <span>
            <h4 class="bold-9">CODE NINJAS</h4>
            <h1 class="bold-9">CAMPS</h1>
        </span>
        <p>
            Transform your child's love for technology into an exciting learning adventure. Guided by our team of Code Senseis, Code Ninjas Camps empower kids to gain valuable tech skills and make new friends. It's an unforgettably fun learning experience!
        </p>
        <br>
        <LearnMore></LearnMore>
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        flex-wrap: wrap;
        gap: 4em;
        padding: 4em;
        background: rgb(23, 161, 135);
        background: linear-gradient(138deg, rgb(22, 161, 136) 0%, rgb(0, 99, 124) 100%);
        width: 100%;
        position: relative;
        overflow: hidden;

        img {
            position: absolute;
            top: 0;
            left: 0;
            min-height: 100%;
            min-width: 100%;
            opacity: 0.4;
        }

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            flex: 0%;
            position: relative;

            p {
                min-width: 350px;
                width: 25em;
                max-width: 30vw;
                margin: 0.5em 0;
                color: #f6f7f8;

                &:first-of-type {
                    min-width: fit-content;
                    color: #63c3ce;
                }
            }

            span {
                h1 {
                    color: #92f4f5;
                    width: fit-content;
                }

                h4 {
                    font-weight: 600;
                    color: #f6f7f8;
                    width: fit-content;
                }

            }

            img {
                position: absolute;
                min-height: auto;
                min-width: 200px;
                height: auto;
                max-width: 80vw;
                width: 24em;
                top: auto;
                left: auto;
                align-self: end;
                border-radius: 1em;
                opacity: 1;
                rotate: -10deg;
            }
        }

        button {
            margin: 2em 0 0;
            width: fit-content;
        }
    }

    @media (width < 1200px) {
        section {
            flex-direction: column;
            padding: 4em 1em 3em;
            gap: 1em;

            div {
                flex-direction: row;
                align-items: center;
                min-height: 200px;

                &:last-of-type {
                    flex-direction: column;
                }


                p {
                    text-align: center;
                    width: 50%;
                    max-width: 90vw;
                    margin: 0;

                    &:first-of-type {
                        background-color: #06637f;
                        padding: 0.75em 1.5em;
                        border-radius: 2em;
                        z-index: 1;
                        width: fit-content;
                    }
                }

                img {
                    min-width: 275px;
                    width: 19em;
                }
            }

            span {
                display: flex;
                flex-direction: column;
                text-align: center;
                align-items: center;
                background-color: #06637f;
                padding: 1em 3em;
                border-radius: 10em;
                translate: 0 -1em;
           }
        }
    }

    #menu {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: absolute;
        z-index: 4;
        background-color: white;
        padding: 2em;
        border-radius: 1em;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.247);
        min-width: 300px;

        #close {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1.5em;
            border-radius: 10em;
        }

        button {
            min-width: fit-content;
            width: fit-content;
            height: fit-content;
            min-height: fit-content;
            position: relative;
            margin-bottom: 1em;

            span {
                width: 1.5em;
                height: 0.25em;
                padding: 0;
                rotate: 45deg;
                margin: 0;
                position: absolute;
                background-color:white;
                translate: 0;

                &:last-of-type {
                    rotate: -45deg;
                }
            }
        }
    }
</style>