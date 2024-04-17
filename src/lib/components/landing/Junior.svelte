<section id="junior">
    <img src="/graphics/junior/jbg.webp" alt="">
    <div>
        <img src="/graphics/junior/jfocus.png" alt="">
    </div>
    <div>
        <p>AGES 5 TO 7</p>
        <span>
            <h4 class="bold-9">CODE NINJAS</h4>
            <h1 class="bold-9">JUNIOR</h1>
        </span>
        <p>
            Is your young Ninja already crazy about technology? Our JR program is designed to help support and nurture a foundation of learning through engaging activities, creativity, and problem-solving – no reading required!
        </p>
        <a href="/junior" target="_blank">
            <button class="primary-btn">LEARN MORE</button>
        </a>
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        flex-wrap: wrap;
        gap: 4em;
        padding: 4em 4em 2em;
        background: rgb(107, 41, 124);
        background: linear-gradient(138deg, rgba(124, 41, 145, 0.863) 0%, rgba(46, 7, 124, 0.966) 100%);
        width: 100%;
        position: relative;
        overflow: hidden;

        img {
            position: absolute;
            top: 0;
            left: 0;
            min-height: 100%;
            min-width: 100%;
            opacity: 0.7;
        }

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
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
                    color: #b27bcd;
                }
            }

            span {
                h1 {
                    color: #deabf7;
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
                width: 25em;
                top: auto;
                left: auto;
                align-self: end;
                border-radius: 1em;
                opacity: 1;
            }
        }

        button {
            margin: 2em 0;
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
                        background-color: #5f207b;
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
                background-color: #5f207b;
                padding: 1em 3em;
                border-radius: 10em;
                translate: 0 -1em;
           }
        }
    }
</style>