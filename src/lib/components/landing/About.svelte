<section id="about">
    <p>OUR MISSION</p>
    <div class="subheading">
        <h3 class="bold-9 dark-blue">WE MAKE</h3>
        <h3 class="bold-9">CODING FUN</h3>
    </div>
    <p>We believe that Code Ninjas is unlike anything your child has experienced before. Every day thousands of our Ninjas enter our Dojos to learn to code on our proprietary learning platform - and in the process UNLEASH THEIR INNER NINJA! Your child will join like-minded students and together they will tackle fun and engaging problems - and have a great time!</p>
    <span>
        <a href="https://www.youtube.com/watch?v=cg-lusa7yFM" target="_blank">
            <div>
              <img src="https://www.codeninjas.com/hubfs/MSNBC.svg" alt="MSNBC">
            </div>
        </a>
        <a href="https://www.parents.com/kids/camp/spring-break-camps-for-kids/" target="_blank">
            <div>
              <img src="https://www.codeninjas.com/hubfs/Parents-1.svg" alt="Parents-1">
            </div>
        </a>
        <a href="https://abc7ny.com/code-ninjas-syosset-coding-for-children/5287198/" target="_blank">
            <div>
              <img src="https://www.codeninjas.com/hubfs/abc-1.svg" alt="abc-1">
            </div>
        </a>
        <a href="https://lifehacker.com/how-a-coding-boot-camp-works-1828026066" target="_blank">
            <div>
              <img src="https://www.codeninjas.com/hubfs/lifehacker-1.svg" alt="lifehacker-1">
            </div>
        </a>
        <a href="https://www.entrepreneur.com/franchises/how-these-franchisees-became-franchisors/328186#3" target="_blank">
            <div>
              <img src="https://www.codeninjas.com/hubfs/enterpreneur.svg" alt="enterpreneur">
            </div>
        </a>
    </span>
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
        padding: 4em 12vw;
        background-size: 100% 100%;       

        p {
            text-wrap: balance;
            max-width: 60em;
            margin: 1em 0 0;

            &:first-of-type {
                margin: 0;
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

            p {
                &:first-of-type {
                    color: #506690;
                    letter-spacing: normal;
                }
            }
        }

        span {
            display: flex;
            width: 90%;
            justify-content: center;
            gap: 8dvw;
            align-items: center;
            padding: 1em 0;
            flex-wrap: wrap;
            margin: 3em 0 1em;

            img {
                height: 2em;
            }
        }

        b {
            font-size: 1.2em;
            margin: 1em;
        }

        iframe {
            aspect-ratio: 16/9;
            min-height: 300px;
            max-height: 60vh;
            max-width: 90vw;
            width: 50em;
            pointer-events: all;
            border-radius: 1em;
            box-shadow: 0 8px 24px #0067be40;
            z-index: 4;
        }
    }
</style>