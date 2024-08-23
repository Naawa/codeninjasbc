<script lang="ts">
	import { page } from "$app/stores";
	import { fly } from "svelte/transition";

    let showMenu: boolean = false;
    function openMenu(open: boolean) {
        if(open) {
            showMenu = true;
            document.querySelector("button")?.classList.remove("inactive");
            document.querySelector("button")?.classList.add("close");
        }
        else {
            showMenu = false;
            document.querySelector("button")?.classList.remove("close");
            document.querySelector("button")?.classList.add("inactive");
        }
    }
</script>

<nav>
    <a href="/" on:click={() => openMenu(false)}><img src="/logos/cnbc.svg" alt="Nav logo"></a>
        <menu>
            <a href="/#create" on:click={() => openMenu(false)}><h4 class="dark-blue bold-9"><b class="ninja-blue bold-9">COURSES</b></h4></a>
            <a href="/#camps" on:click={() => openMenu(false)}><h4 class="dark-blue bold-9"><b class="ninja-green bold-9">CAMPS</b></h4></a>
            <a href="/#junior" on:click={() => openMenu(false)}><h4 class="dark-blue bold-9"><b class="ninja-purple bold-9">JUNIOR</b></h4></a>
            <a href="/#birthdays" on:click={() => openMenu(false)}><h4 class="dark-blue bold-9"><b class="ninja-red bold-9">BIRTHDAYS</b></h4></a>
        </menu>
        {#if $page.url.pathname != "/tour"}
                <a id="tour" href="/tour" class="secondary-btn">BOOK A FREE SESSION</a>
        {/if}
        <button on:click={() => {
            if(showMenu) {
                openMenu(false)
            }
            else {
                openMenu(true)
            }
        }} class="inactive" transition:fly={{ x: -100, duration: 1000 }}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    <img id="curve" src="/graphics/dividers/curve.png" alt="">
</nav>

{#if showMenu}
    <div>
        <span>
            <h5 class="bold-9">OUR PROGRAMS</h5>
            <a href="/#create" on:click={() => openMenu(false)}><h4 class="dark-blue bold-9"><b class="ninja-blue bold-9">COURSES</b></h4></a>
            <a href="/#camps" on:click={() => openMenu(false)}><h4 class="dark-blue bold-9"><b class="ninja-green bold-9">CAMPS</b></h4></a>
            <a href="/#junior" on:click={() => openMenu(false)}><h4 class="dark-blue bold-9"><b class="ninja-purple bold-9">JUNIOR</b></h4></a>
            <a href="/#birthdays" on:click={() => openMenu(false)}><h4 class="dark-blue bold-9"><b class="ninja-red bold-9">BIRTHDAYS</b></h4></a>
        </span>

        {#if $page.url.pathname != "/tour"}
                <a on:click={() => openMenu(false)} href="/tour" class="secondary-btn">BOOK A FREE SESSION</a>
        {/if}
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
        padding: 0  8vw;
        align-items: center;
        width: 100%;
        height: 6em;
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
            display: flex;
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
                width: 3em;
                border: solid 0.2em #0e2937;
                border-radius: 10em;
                background-color: #0e2937;

                position: absolute;
                &:first-of-type {
                    width: 2em;
                    rotate: 45deg;
                }
                &:nth-of-type(2) {
                    display: none;
                }
                &:last-of-type {
                    width: 2em;
                    rotate: -45deg;
                }
            }

            &:hover {
                span {
                    width: 2em;

                    &:first-of-type {
                        width: 2em;
                    }
                    &:last-of-type {
                        width: 2em;
                    }
                }
            }
        }

        img {
            height: 6em;
            width: auto;
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
        top: 3em;
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

    #tour {
        min-width: fit-content;
    }
    @media (width < 1000px) {
       #tour {
            display: none;
       }
    }

    @media (width < 1000px) {
        nav {
            menu {
                display: none;
            }
        }
        #curve {
            bottom: -2em;
        }
    }

    @media (width > 1000px) {
        nav {
            justify-content: center;
            gap: 4em;

            button {
                display: none;
            }
        }
    }

    @media (width > 1600px) {
        nav {
            gap: 8em;
        }
    }
</style>