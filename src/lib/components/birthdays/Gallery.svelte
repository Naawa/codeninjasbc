<section>
    <img src="/graphics/birthdays/BdayBlob.webp" alt="">
    <img src="/graphics/birthdays/kids.jpg" alt="Kids">
</section>


<style lang="scss">
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 2em;
        padding: 2em 2em;
        margin: auto;
        position: relative;

        img {
            max-height: 40vh;
            max-width: 90vw;
            border-radius: 1em;
            background-color: transparent;

            &:first-of-type {
                position: absolute;
                height: 50vh;
                max-height: none;
                z-index: -1;
            }
        }
    }
</style>