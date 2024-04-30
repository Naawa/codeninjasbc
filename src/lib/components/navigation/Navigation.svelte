<script lang="ts">
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

    let showMenu: boolean = false;
    function toggleMenu() {
        showMenu = !showMenu;
        document.querySelector("button")?.classList.toggle("inactive");
    }

    let animate = false;

    onMount(() => {
        animate = true;
    })
</script>

<nav>
    {#if animate}
        <a href="/" on:click={() => showMenu = false}><img src="/logos/cnbc.svg" alt="Nav logo"></a>
        <menu>
            <a href="/create" on:click={() => showMenu = false}><h4 class="dark-blue bold-9"><b class="ninja-blue bold-9">CREATE</b></h4></a>
            <a href="/#camps" on:click={() => showMenu = false}><h4 class="dark-blue bold-9"><b class="ninja-green bold-9">CAMPS</b></h4></a>
            <a href="/junior" on:click={() => showMenu = false}><h4 class="dark-blue bold-9"><b class="ninja-purple bold-9">JUNIOR</b></h4></a>
            <a href="/birthdays" on:click={() => showMenu = false}><h4 class="dark-blue bold-9"><b class="ninja-red bold-9">BIRTHDAYS</b></h4></a>
        </menu>
        <menu>
            <a href="/#locations" on:click={() => showMenu = false}><h4 class="dark-blue bold-9">LOCATIONS</h4></a>
            <a href="/blog" on:click={() => showMenu = false}><h4 class="dark-blue bold-9">BLOG</h4></a>
            <a href="/about" on:click={() => showMenu = false}><h4 class="dark-blue bold-9">ABOUT US</h4></a>
            <a href="/faq" on:click={() => showMenu = false}><h4 class="dark-blue bold-9">FAQ</h4></a>
        </menu>
        <button on:click={toggleMenu} class="inactive" transition:fly={{ x: -100, duration: 1000 }}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    {/if}
    <img id="curve" src="/graphics/dividers/curve.png" alt="">
</nav>

{#if showMenu}
    <div transition:fly={{ y: 200, duration: 400 }}>
        <span>
            <h5 class="bold-9">PROGRAMS</h5>
            <a href="/create" on:click={toggleMenu}><h4 class="dark-blue bold-9">CODE NINJAS <b class="ninja-blue bold-9">CREATE</b></h4></a>
            <a href="/#camps" on:click={toggleMenu}><h4 class="dark-blue bold-9">CODE NINJAS <b class="ninja-green bold-9">CAMPS</b></h4></a>
            <a href="/junior" on:click={toggleMenu}><h4 class="dark-blue bold-9">CODE NINJAS <b class="ninja-purple bold-9">JUNIOR</b></h4></a>
            <a href="/birthdays" on:click={toggleMenu}><h4 class="dark-blue bold-9">CODE NINJAS <b class="ninja-red bold-9">BIRTHDAYS</b></h4></a>
        </span>
        <span>
            <h5 class="bold-9">ADDITIONAL INFORMATION</h5>
            <a href="/#locations" on:click={toggleMenu}><h4 class="dark-blue bold-9">LOCATIONS</h4></a>
            <a href="/blog" on:click={toggleMenu}><h4 class="dark-blue bold-9">BLOG</h4></a>
            <a href="/about" on:click={toggleMenu}><h4 class="dark-blue bold-9">ABOUT US</h4></a>
            <a href="/faq" on:click={toggleMenu}><h4 class="dark-blue bold-9">FAQ</h4></a>
        </span>
    </div>
{/if}

<style lang="scss">
    a {
        font-weight: 900;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    nav {
        display: flex;
        justify-content: space-between;
        padding: 0 10vw;
        align-items: center;
        width: 100%;
        height: 4em;
        z-index: 6;
        background-color: #f6f7f8;
        position: fixed;
        top: 0;

        menu {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1em;
            width: fit-content;
        }


        button {
            background-color: transparent;
            display: none;
            justify-content: center;
            align-items: center;
            gap: 0.2em;
            flex-direction: column;
            min-width: 2em;
            padding: 0;
            height: 2em;
            width: 2em;
            border: none;

            span {
                width: 2em;
                border: solid 0.15em #0e2937;
                border-radius: 10em;
                background-color: #0e2937;

                position: absolute;
                &:first-of-type {
                    width: 1.5em;
                    rotate: 45deg;
                }
                &:nth-of-type(2) {
                    display: none;
                }
                &:last-of-type {
                    width: 1.5em;
                    rotate: -45deg;
                }
            }

            &:hover {
                span {
                    width: 1.5em;

                    &:first-of-type {
                        width: 1.5em;
                    }
                    &:last-of-type {
                        width: 1.5em;
                    }
                }
            }
        }

        img {
            height: 5em;
        }
    }

    #curve {
        position: absolute;
        rotate: 180deg;
        width: 100%;
        min-width: 1920px;
        left: 0;
        bottom: -2em;
        z-index: -1;
        height: 6em;
    }

    .inactive {
        span {
            position: relative;

            &:first-of-type {
                width: 1.25em;
                rotate: 0deg;
            }
            &:nth-of-type(2) {
                display: block;
            }
            &:last-of-type {
                rotate: 0deg;
                width: 1.25em;
            }
        }

        &:hover {
            span {
                width: 1.25em;
                &:first-of-type {
                    width: 2em;
                }
                &:last-of-type {
                    width: 2em;
                }
            }
        }
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 3em;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0em;
        padding: 4em;
        height: 100vh;
        width: 100%;
        background-color: #f6f7f8;
        z-index: 5;


        span {
            width: 80vw;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0.5em;
            
            h5 {
                margin-bottom: 0.5em;
            }
        }
    }

    @media (width < 1200px) {
        nav {
            menu {
                display: none;
            }
        }
        button {
            display: flex;
        }
        #curve {
            bottom: -2em;
        }
    }

    @media (width < 1600px) {
        nav {
            menu {
                &:last-of-type {
                    display: none;
                }
            }
            button {
                display: flex;
            }
        }
    }

    @media (width > 2600px) {
        nav {
            justify-content: center;
            gap: 12em;
        }
    }
</style>