<script>
	import Programs from "./Programs.svelte";

</script>
<section>
    <p>OUR MISSION</p>
    <div class="subheading">
        <h3>WE MAKE</h3>
        <h3>CODING FUN</h3>
    </div>
    <p>We believe that Code Ninjas is unlike anything your child has experienced before. Every day thousands of our Ninjas enter our Dojos to learn to code on our proprietary learning platform – and in the process UNLEASH THEIR INNER NINJA! Your child will join like-minded students and together they will tackle fun and engaging problems - and have a great time!</p>
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
<section>
    <p>WE OFFER</p>
    <div class="subheading">
        <h3>YEAR ROUND</h3>
        <h3>PROGRAMS</h3>
    </div>
</section>
<Programs></Programs>
<section>
    <img class=" lazyloaded" data-src="https://39646145.fs1.hubspotusercontent-na1.net/hubfs/39646145/CodeNinja-Impact-Title.png" alt="CodeNinja-Impact-Title" src="https://39646145.fs1.hubspotusercontent-na1.net/hubfs/39646145/CodeNinja-Impact-Title.png">
    <p>IN PARTNERSHIP WITH</p>
    <img class=" lazyloaded" data-src="https://39646145.fs1.hubspotusercontent-na1.net/hubfs/39646145/CodeNinjas%20-%20Marketting%20Website/partnership-img.svg" alt="partnership" src="https://39646145.fs1.hubspotusercontent-na1.net/hubfs/39646145/CodeNinjas%20-%20Marketting%20Website/partnership-img.svg">

    <iframe src="https://www.youtube.com/embed/-N08PV3Cs6Q?vq=hd1080" title="Introducing Code Ninjas&#39;s IMPACT educational platform" frameborder="0" allowfullscreen></iframe>

    <p>If the Dojo is the soul of Code Ninjas, then IMPACT is the beating heart. It is our proprietary learning platform designed to give our Ninjas the best learning environment possible. It does so much more than just teach your child to code - it helps develop key skills such as problem-solving, critical thinking, and logical reasoning skills.</p>
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
        padding: 4em 0;

        p {
            width: clamp(300px, 50dvw, 60%);
            &:first-of-type {
                color: #0067be70;
                letter-spacing: 0.1em;
            }   
        }

        iframe {
            aspect-ratio: 16/9;
            height: 70vh;
            max-width: 70vw;
            padding: 4em;
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

        span {
            display: flex;
            width: clamp(300px, 80dvw, 40%);
            justify-content: space-between;
            align-items: center;
            padding: 1em 0;

            img {
                height: 2dvh;
            }
        }
    }

    .lazyloaded {
        width: clamp(200px, 60dvh, 70dvw);
    }
</style>