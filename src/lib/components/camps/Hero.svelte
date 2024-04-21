<section>
    <img src="/graphics/dividers/curve.png" alt="">
    <img src="/graphics/junior/Junior.png" alt="Junior icon.">
    <p>For junior to think step by step by engaing them in problem solving and stem activities.</p>
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
        gap: 2em;
        padding: 2em;
        background: rgb(107, 41, 124);
        background: linear-gradient(138deg, rgba(124, 41, 145, 0.863) 0%, rgba(46, 7, 124, 0.966) 100%);
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
            margin-bottom: 2em;
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