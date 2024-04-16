<script>
	import { browser } from "$app/environment";
	import { fly } from "svelte/transition";
</script>
<section>
    <img src="/graphics/dividers/curve.png" alt="">
    <img src="/graphics/birthdays/BirthdayParties.png" alt="Birthday parties icon.">
    <p>Celebrate your child's birthday at Code Ninjas!</p>
    <a href="#inquiry">
        <button class="primary-btn">INQUIRE NOW</button>
    </a>
    <img src="/graphics/birthdays/greenballoon.svg" alt="Balloon 1">
    <img src="/graphics/birthdays/pinkballoon.svg" alt="Balloon 2">
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
        padding: 4em 0;
        background-image: url("/graphics/birthdays/BdayBg.svg");
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;

        p {
            padding: 1em 2em;
            text-align: center;
            border-radius: 1em;
            background-color: #00000042;
            backdrop-filter: blur(10px);
            color: white;
            margin-top: 2em;
        }

        img {
            max-width: 100vw;
            max-height: 40vh;

            &:nth-of-type(1) {
                position: absolute;
                bottom: -4em;
                background-color: transparent;
                height: 8em;
                width: 200vw;
                min-width: 1920px;
            }
            &:nth-of-type(3) {
                position: absolute;
                bottom: 10%;
                left: 75%;
                height: 20em;
                width: fit-content;
            }
            &:nth-of-type(4) {
                position: absolute;
                bottom: 40%;
                right: 75%;
                height: 20em;
                width: fit-content;
            }
        }
    }
</style>