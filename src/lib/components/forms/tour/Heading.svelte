<section id="locations">
    <p>BOOK A FREE SESSION</p>
    <div class="subheading">
        <h3 class="bold-9">CODE NINJAS</h3>
        <h3 class="bold-9">TOUR</h3>
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
        padding: 4em 0 0;

        p {
            text-wrap: balance;
            max-width: 80dvw;

            &:first-of-type {
               color: #70c9e7;
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
                color: #f6f7f8;
                &:last-of-type {
                    color: #8eecff;
                }
            }
        }
    }
</style>