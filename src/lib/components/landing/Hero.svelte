<section>
    <img id="logo" src="/logos/normal.svg" alt="">
    <div>
        <div>
            <h1 class="bold-9">Kids Learn Code</h1>
            <p>JavaScript, Lua, C# and More!</p>
        </div>
        <span>
            <a href="#inquiry">
                <button class="primary-btn">INQUIRE NOW</button>
            </a>
            <a id="tour" href="/tour" class="primary-btn">BOOK A FREE SESSION</a>
        </span>
    </div>
    <img id="bottom-curve" src="/graphics/dividers/curve.png" alt="">
    <iframe src="https://www.youtube.com/embed/uzZstlbtTD4?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&enablejsapi=1&playlist=uzZstlbtTD4&vq=hd1080" frameborder="0" title="West Coquitlam Center">
    </iframe>
</section>  

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 80vh;
        gap: 1em;
        padding: 2em;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        background-color: rgb(2, 18, 37);

        iframe {
            position: absolute;
            aspect-ratio: 16/9;
            min-height: 120%;
            min-width: 100vw;
            pointer-events: none;
            opacity: 0.8;
            translate: 0 -5em;
            filter: contrast(100%);
        }

        #logo {
            z-index: 1;
            height: fit-content;
            width: 50em;
            min-width: 250px;
        }

        p {
            text-align: center;
            border-radius: 1em;
            color: white;
            max-width: 90vw;
        }

        img {
            max-width: 100vw;
            max-height: 40vh;
        }
        #bottom-curve {
            position: absolute;
            bottom: -4em;
            background-color: transparent;
            height: 8em;
            width: 200vw;
            min-width: 1920px;
            z-index: 2;
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1em;

            div {
                display: flex;
                flex-direction: column;
                z-index: 1;

                h1, p {
                    color: white;
                    text-align: center;
                }
            }
        }
        span {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 1em;
            z-index: 1;
            width: 90vw;
            margin-bottom: 2em;
            a {
                text-align: center;
            }
        }
    }

    @media (width > 800px) {
        #tour {
            display: none;
        }
    }
</style>