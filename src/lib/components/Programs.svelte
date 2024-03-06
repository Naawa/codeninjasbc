<section class="create">
    <p>WE OFFER</p>
    <div class="subheading">
        <h3>YEAR ROUND</h3>
        <h3>PROGRAMS</h3>
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        gap: 2em;
        width: 100%;

        p {
            width: clamp(300px, 50dvw, 60%);
            &:first-of-type {
                color: #0067be70;
                letter-spacing: 0.1em;
            }   
        }

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;

            .subheading {
                display: block;
                height: fit-content;
            }

            h3 {
                &:last-of-type {
                    background: -webkit-linear-gradient(#00b7ff, #37c6ff);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }

            p {
                &:first-of-type {
                    color: #506690;
                    letter-spacing: normal;
                    width: clamp(300px, 30dvw, 40%);
                }
            }
        }

    }
</style>