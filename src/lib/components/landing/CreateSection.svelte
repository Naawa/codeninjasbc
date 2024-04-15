<section>
    <img src="/graphics/landing/cbg2.webp" alt="">
    <img src="/graphics/landing/ccf.webp" alt="">
    <div>
        <img src="/graphics/landing/createFocus.jpg" alt="">
    </div>
    <div>
        <p>AGES 8 TO 14</p>
        <span>
            <h4>CODE NINJAS</h4>
            <h1 class="bold-9">CREATE</h1>
        </span>
        <p>
            Our best-selling program, CREATE, was built to keep our Ninjas engaged, challenged, and learning! Whether building their own video games or debugging code - your child will be begging you to come back!
        </p>
        <a href="/create" target="_blank">
            <button class="primary-btn">LEARN MORE</button>
        </a>
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        flex-wrap: wrap;
        gap: 4em;
        padding: 4em;
        background: rgb(98,160,193);
        background: linear-gradient(138deg, rgb(20, 136, 199) 0%, rgb(0, 52, 94) 100%);
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
                    color: #70c9e8;
                }
            }

            span {
                h1 {
                    color: #8eecff;
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
                min-width: 275px;
                height: auto;
                width: 24em;
                max-width: 80vw;
                top: auto;
                left: auto;
                align-self: end;
                box-shadow: 0 0 20px 1px rgba(37, 37, 37, 0.253);
                border-radius: 1em;
                opacity: 1;
                rotate: 5deg;
            }
        }

        button {
            margin: 2em 0 0;
        }
    }

    @media (width < 1000px) {
        section {
            flex-direction: column;
            padding: 4em 1em 3em;
            gap: 2em;

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
                        background-color: #1376bd;
                        padding: 0.75em 1.5em;
                        border-radius: 2em;
                        color: #66c5ea;
                        z-index: 1;
                        width: fit-content;
                    }
                }
            }

            span {
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: #1376bd;
                padding: 1em 3em;
                border-radius: 10em;
                translate: 0 -1em;
           }

           img {
                &:last-of-type {
                    max-height: 200px;
                    width: auto;
                }
           }
        }
    }
</style>