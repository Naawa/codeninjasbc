<script lang="ts">
    const locations = ["Abbotsford", "Burnaby", "Burnaby South", "Delta", "Guildford", "Langley", "North Vancouver", "Port Coquitlam", "Richmond", "South Surrey", "Vancouver East", "Vancouver South", "Vancouver West", "West Coquitlam", "Westshore (Victoria)"]
</script>

<section>
    <p>REQUEST INFO</p>
    <div>
        <h3>EMPOWER</h3>
        <h3>THEIR FUTURE</h3>
    </div>
    <form>
        <select>
            <option>Select Location</option>
            {#each locations.sort() as location}
                <option>
                    {location}
                </option>
            {/each}
        </select>
        <span>
            <input type="text" placeholder="Parent First Name">
            <input type="text" placeholder="Parent Last Name">
        </span>
        <input type="tel" placeholder="(000)-000-0000">
        <span>
            <input type="text" placeholder="Child First Name">
            <input type="text" placeholder="Child First Name">
        </span>
        <br>
        <button>SUBMIT</button>
    </form>
</section>

<style lang="scss">
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        gap: 2em;
        padding: 2em 0;
        width: 100%;

        p {
            color: #0067be70;
            letter-spacing: 0.1em;
        }

        div {
            h3 {
                &:last-of-type {
                    color: #116db8;
                }
            }
        }

        form {
            padding: 4em 2em;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            flex-direction: column;
            gap: 1em;
            width: clamp(200px, 90%, 600px);
            background-color: white;
            box-shadow: 0 8px 24px #0067be40;
            border-radius: 0.5em;

            span {
                width: 100%;
                display: flex;
                gap: 1em;
            }

            button {
                background-color: #4cdac2;
                color: white;
                box-shadow: 0 0 16px #3ab19d70;

                &:hover {
                    background-color: #40bda8;
                }
            }
        }
    }
</style>