<section>
    <img src="/graphics/dividers/curve.png" alt="">
    <img src="/graphics/birthdays/BirthdayParties.png" alt="Birthday parties icon.">
    <p>Celebrate your child's birthday at Code Ninjas!</p>
    <a href="#inquiry">
        <button class="primary-btn">INQUIRE NOW</button>
    </a>
    <img src="/graphics/birthdays/greenballoon.svg" alt="Balloon 1">
    <img src="/graphics/birthdays/pinkballoon.svg" alt="Balloon 2">
    <img src="/graphics/birthdays/blueballoon.svg" alt="Balloon 3">
</section>

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        min-height: 40em;
        height: fit-content;
        gap: 2em;
        padding: 4em 12vw;
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
            z-index: 2;
        }

        a {
            z-index: 2;
        }

        img {
            max-width: 100vw;
            max-height: 35vh;

            &:nth-of-type(1) {
                position: absolute;
                bottom: -4em;
                background-color: transparent;
                height: 8em;
                width: 200vw;
                min-width: 1920px;
            }
            &:nth-of-type(2) {
                z-index: 2;
            }
            &:nth-of-type(3) {
                position: absolute;
                bottom: 30%;
                left: 70%;
                height: 20em;
                width: fit-content;
            }
            &:nth-of-type(4) {
                position: absolute;
                bottom: 50%;
                right: 60%;
                height: 20em;
                width: fit-content;
            }
            &:nth-of-type(5) {
                position: absolute;
                bottom: -10%;
                right: 70%;
                height: 20em;
                width: fit-content;
            }
        }
    }

    @media (width < 800px) {
        section {
            img {
                &:nth-of-type(1) {
                    height: 1em;
                    position: absolute;
                    bottom: -4em;
                    background-color: transparent;
                    height: 8em;
                    width: 200vw;
                    min-width: 1920px;
                }
                &:nth-of-type(3) {
                    height: 1em;
                    position: absolute;
                    bottom: 5%;
                    left: 70%;
                    height: 20em;
                    width: fit-content;
                }
                &:nth-of-type(4) {
                    height: 1em;
                    position: absolute;
                    bottom: 50%;
                    right: 20%;
                    height: 20em;
                    width: fit-content;
                }
                &:nth-of-type(5) {
                    height: 1em;
                    position: absolute;
                    bottom: -10%;
                    right: 70%;
                    height: 20em;
                    width: fit-content;
                }
            }
        }
    }
</style>