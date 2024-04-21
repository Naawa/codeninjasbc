<section>
    <img src="/graphics/dividers/curve.png" alt="">
    <img src="/graphics/create/Create.png" alt="Create icon.">
    <p>Teach your child to code by developing, designing, and creating their own videogames!</p>
    <a href="#inquiry">
        <button class="primary-btn">INQUIRE NOW</button>
    </a>
</section>

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        min-height: 80vh;
        height: fit-content;
        padding: 2em;
        background: rgb(98,160,193);
        background: linear-gradient(138deg, rgb(20, 136, 199) 0%, rgb(0, 52, 94) 100%);
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
            margin: 2em;
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
            }
        }
    }
</style>