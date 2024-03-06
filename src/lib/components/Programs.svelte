<script lang="ts">
    let backgrounds = ["images/createbg.png", "/images/juniorbg.png", "/images/campsbg.png", "/images/pnobg.png", "/images/roboticsbg.png", "/images/bdbg.png"]

    interface CNProgram {
        name: string,
        description: string,
        ages: string,
        prereq: string, 
        topics: string,
        pl: string,
        bg: string,
    }

    const programs: CNProgram[] = [
        {
            name: "CREATE",
            description: "An exciting learning adventure for tech-loving kids! Have a blast building awesome videogames and developing ninja coding skills on the path from white to black belt.",
            ages: "8 - 15",
            prereq: "Reading Ability in English",
            topics: "Basic to professional game development.",
            pl: "JavaScript, Lua, and C#",
            bg: backgrounds[0],
        },
        {
            name: "JUNIOR",
            description: "An exciting learning adventure for tech-loving kids! Have a blast building.",
            ages: "8 - 15",
            prereq: "Reading Ability in English",
            topics: "Basic to professional game development.",
            pl: "JavaScript, Lua, and C#",
            bg: backgrounds[1],
        },
        {
            name: "CAMPS",
            description: "An exciting learning adventure for tech-loving kids! Have a blast building.",
            ages: "8 - 15",
            prereq: "Reading Ability in English",
            topics: "Basic to professional game development.",
            pl: "JavaScript, Lua, and C#",
            bg: backgrounds[2],
        },
        {
            name: "BIRTHDAY PARTIES",
            description: "An exciting learning adventure for tech-loving kids! Have a blast building.",
            ages: "8 - 15",
            prereq: "Reading Ability in English",
            topics: "Basic to professional game development.",
            pl: "JavaScript, Lua, and C#",
            bg: backgrounds[5],
        },
        {
            name: "PARENTS NIGHT OUT",
            description: "An exciting learning adventure for tech-loving kids! Have a blast building.",
            ages: "8 - 15",
            prereq: "Reading Ability in English",
            topics: "Basic to professional game development.",
            pl: "JavaScript, Lua, and C#",
            bg: backgrounds[3],
        },
        {
            name: "ROBOTICS",
            description: "An exciting learning adventure for tech-loving kids! Have a blast building.",
            ages: "8 - 15",
            prereq: "Reading Ability in English",
            topics: "Basic to professional game development.",
            pl: "JavaScript, Lua, and C#",
            bg: backgrounds[4],
        },
    ]
    
    let index = 0;
    let program: CNProgram = programs[index];

    function next() {
        if(index < programs.length - 1) {
            console.log(index, programs.length)
            index++;
            program = programs[index];
        }
        else {
            index = 0;
            program = programs[index];
        }
    }

    function prev() {
        if(index > 0) {
            index--;
            program = programs[index];
        }
        else {
            index = programs.length - 1;
            program = programs[index];
        }
    }

</script>

<section style="background-image: url('{program.bg}');">
   <span>
    <div>
        <h3>{program.name}</h3>
        <p>{program.description}</p>
    </div>
    <div>
        <h3>AGES</h3>
        <p>{program.ages}</p>
        <h3>PREREQUISITES</h3>
        <p>{program.prereq}</p>
        <h3>TOPICS COVERED</h3>
        <p>{program.topics}</p>
        <h3>PROGRAMMING LANGUAGES</h3>
        <p>{program.pl}</p>
    </div>
   </span>
    <span>
        <button on:click={prev}>❮ PREV</button>
        <button on:click={next}>NEXT ❯</button>
    </span>
</section>

<style lang="scss">
    section {
        height: 100vh;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        background-color: rgb(22, 22, 22);

        span {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            height: 10%;
            padding: 2em;

            button {
                background-color: rgba(0, 0, 0, 0.5);
                width: 10em;
                min-width: fit-content;
                color: whitesmoke;
            }

            &:last-of-type {
                padding: 2em;
            }

            &:first-of-type {
                height: 90%;
                flex-direction: column;

                div {
                    height: fit-content;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: left;
                    background-color: rgba(0, 0, 0, 0.5);
                    padding: 2em;
                    z-index: 1;

                    &:last-of-type {
                        align-items: end;
                        text-align: right;
                    }

                    h3, p {
                        color: whitesmoke;
                    }
                    p {
                        margin-bottom: 2em;

                        &:last-of-type {
                            margin: 0;
                        }
                    }
                }
            }
        }
    }

    @media (width > 1600px) {
        section {
            span {
                &:first-of-type {
                    flex-direction: row;

                    div {
                        height: 100%;
                        width: 30%;
                    }
                }
            }
        }
    }
</style>