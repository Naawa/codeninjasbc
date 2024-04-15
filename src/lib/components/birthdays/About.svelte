<section>
    <h2 class="dark-blue bold-9">WHAT ITS LIKE</h2>
    <span>
        <div>
            <h3 class="dark-blue bold-9">ACTIVITIES</h3>
            <p>
                The event will start with a learning lesson where the children can learn how to code by developing games in MakeCode Arcade or Roblox, or develop mods in Minecraft Creator. They will then be allowed to share their creations with each other an have a blast! 
            </p>
        </div>
        <div>
            <h3 class="dark-blue bold-9">FUN</h3>
            <p>
                After a while, the kids can take a break for a pizza party where they would all sit together, enjoy a nice meal, cut the cake, and take some photos. Afterwards, they can resume their game building actitivies for a while longer and play with eachother in our Minecraft server or Roblox.
            </p>
        </div>
        <div>
            <h3 class="dark-blue bold-9">PRIZES</h3>
            <p>
                Near the end of the party, all the kids will participate for prizes in a trivia game about the birthday child! Kids will compete with each other to see who knows the birthday child the best! The party will then come to an end with fond memories and warm goodbyes.
            </p>
        </div>
    </span>
</section>


<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4em 15vw;
        width: fit-content;
        margin: auto;
        gap: 1em;
        background-repeat: no-repeat;
        background-size: contain;
        
        span {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;

            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                flex: 0%;
                border-radius: 1em;
                padding: 1em;
                min-width: fit-content;
                gap: 1em;
                text-align: center;

                p {
                    max-width: 20em;
                }
            }
        }
    }

    @media (width < 1000px) {
        section {
            padding: 10vw;
        }
    }
</style>