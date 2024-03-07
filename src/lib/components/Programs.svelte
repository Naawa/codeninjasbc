<script lang="ts">
    let backgrounds = ["images/createbg.png", "/images/juniorbg.png", "/images/campsbg.png", "/images/pnobg.png", "/images/roboticsbg.png", "/images/bdbg.png"]

    interface CNProgram {
        name: string,
        description: string,
        ages: string,
        prereq: string, 
        topics: string,
        pl: string | undefined,
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
            description: "Build a foundation of coding and critical problem-solving skills through our fun and completely visual cirriculum - no reading required!",
            ages: "5 - 7",
            prereq: "None! We start from no prior computer use.",
            topics: "Basic sequencing, loops, typing, and block coding.",
            pl: undefined,
            bg: backgrounds[1],
        },
        {
            name: "CAMPS",
            description: "Our camps offer an immersive environment for kids to explore and develop new skills, gain confidence, and have fun with friends. From coding and game building, to STEM and robotics - it's an unforgettable experience!.",
            ages: "5 - 15",
            prereq: "No prior knowledge on coding or topics required!",
            topics: "Minecraft, Roblox, Stop Motion Animation, Become a Youtuber, Makey Makey, Python, and more!",
            pl: undefined,
            bg: backgrounds[2],
        },
        {
            name: "BIRTHDAY PARTIES",
            description: "Celebrate your childs birthday at Code Ninjas!",
            ages: "5 - 15",
            prereq: "No prior knowledge on coding or topics required!",
            topics: "Minecraft, Roblox, Kahoot!",
            pl: undefined,
            bg: backgrounds[5],
        },
        {
            name: "PARENTS NIGHT OUT",
            description: "You deserve a night out of town. Meanwhile, your kids want to play and have fun. That's why we offer Parent's Night Out - a win-win evening for families happening on a Friday each month from 6pm - 9pm. Drop off your kids at Code Ninjas, where they'll play games, eat pizza, and socialize!",
            ages: "5 - 15",
            prereq: "No prior knowledge on coding or topics required!",
            topics: "Minecraft, Roblox, 3D Printing, STEM Activities and more...",
            pl: undefined,
            bg: backgrounds[3],
        },
        {
            name: "ROBOTICS",
            description: "Our comprehensive cirriculum immerses students in hand-on robotics projects, teaching key concepts like coding, engineering, and problem-solving. With experienced instructors and engaging activities, sutdents develop critical skills and unleash their creativity. Join us at Code Ninjas and ignite your passion for robotics today!",
            ages: "5 - 15",
            prereq: "No prior knowledge on coding or topics required!",
            topics: "Minecraft, Roblox, Kahoot!",
            pl: undefined,
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
        {#if program.pl}
        <h3>PROGRAMMING LANGUAGES</h3>
        <p>{program.pl}</p>
        {/if}
    </div>
   </span>
    <span>
        <button on:click={prev}>❮ PREV</button>
        <button on:click={next}>NEXT ❯</button>
    </span>
</section>

<style lang="scss">
    section {
        height: clamp(600px, 90vh, 90vh);
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        background-color: rgba(0, 0, 0, 0);

        span {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            height: 10%;
            padding: 2em 8em;

            button {
                background-color: rgba(0, 0, 0, 0.5);
                width: 10em;
                min-width: fit-content;
                color: whitesmoke;
                border-radius: 0;
            }

            &:last-of-type {
                padding: 2em 8em;
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
                        width: 25%;
                    }
                }
            }
        }
    }
</style>