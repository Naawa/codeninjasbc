<section id="locations">
    <p>FIND A LOCATION</p>
    <div class="subheading">
        <h3 class="bold-9 dark-blue">OUR</h3>
        <h3 class="bold-9">DOJOS</h3>
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        gap: 1em;
        width: 100%;
        min-height: fit-content;
        margin: 3em 0 0;
        padding: 2em 0 0;

        p {
            text-wrap: balance;
            max-width: 80dvw;

            &:first-of-type {
                color: #2c638fb6;
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
                    color: #187abf;
                }
            }
        }
    }
</style>