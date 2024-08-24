<section id="birthdays">
    <img src="/graphics/birthdays/BirthdayParties.png" alt="Birthday parties icon.">
    <img id="b1" src="/graphics/birthdays/greenballoon.svg" alt="Balloon 1">
    <img id="b2" src="/graphics/birthdays/pinkballoon.svg" alt="Balloon 2">
    <img id="b3" src="/graphics/birthdays/blueballoon.svg" alt="Balloon 3">
</section>

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        height: fit-content;
        padding: 7em;
        background-image: url("/graphics/birthdays/BdayBg.svg");
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        gap: 2em;

        p {
            padding: 1em 2em;
            text-align: center;
            border-radius: 1em;
            background-color: #00000042;
            backdrop-filter: blur(10px);
            color: white;
            z-index: 2;
        }

        a {
            z-index: 2;
        }

        img {
            height: 16em;
        }

        #b1, #b2, #b3 {
            position: absolute;
        }
        #b1 {
            translate: -18em 14em;
        }
        #b2 {
            translate: 18em 10em;
        }
        #b3 {
            translate: -10em -4em;
        }
    }

    .anchor {
        padding: 3em 0;
    }
</style>