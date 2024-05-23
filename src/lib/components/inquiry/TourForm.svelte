<script lang="ts">
	import DateSelect from "./DateSelect.svelte";

	export let data: any;

	let parentFirstName: string;
	let parentLastName: string;

	let childFirstName: string;
	let childLastName: string;

    let phoneNumber: string;
    let email: string;

    let date: string;
    let dateSelected: boolean = false;
</script>

<section id="tour">
	<p>GET A TOUR</p>
	<div>
		<h3 class="bold-9 dark-blue">BOOK</h3>
		<h3 class="bold-9 dark-text">FREE SESSION</h3>
	</div>
	<form method="POST">
		{#if dateSelected}
			<span>
                <input
                    type="text"
                    name="parentFirstName"
                    placeholder="Parent First Name"
                    bind:value={parentFirstName}
                />

                <input
                    type="text"
                    name="parentLastName"
                    placeholder="Parent Last Name"
                    bind:value={parentLastName}
                />
            </span>
            <input
                type="text"
                name="phoneNumber"
                placeholder="0000000000"
                bind:value={phoneNumber}
                maxlength="10"
            />
            <input
                type="email"
                name="email"
                placeholder="email@example.com"
                bind:value={email}
            />
            <span>
                <input
                    type="text"
                    name="childFirstName"
                    placeholder="Child First Name"
                    bind:value={childFirstName}
                />
                <input
                    type="text"
                    name="childLastName"
                    placeholder="Child Last Name"
                    bind:value={childLastName}
                />
            </span>
            <button class="primary-btn">SUBMIT</button>
		{:else}
       	 	<h2>{data.center.name}</h2>
            <b>Select A Date</b>
			<div>
				<DateSelect availableTourDates={data.availableTourDates}></DateSelect>
			</div>
            <button class="primary-btn" on:click={(event) => {event.preventDefault(); if(date) {dateSelected = true }}}>NEXT</button>
		{/if}
	</form>
</section>

<style lang="scss">
    section {
        display: flex;
        align-items: center;
        padding: 2em 10vw;
        flex-direction: column;
        min-height: 60vh;

        menu {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1em;
            flex-direction: column;
        }

        span {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2em;
            width: 100%;
            overflow: scroll;
            padding: 2em;
            border-radius: 1em;

            &:nth-of-type(2) {
                background-color: white;
                justify-content: normal;
                align-items: normal;
            }

            div {
                display: flex;
                flex-direction: column;
                gap: 1em;
                min-width: fit-content;

                button {
                    padding: 1em;
                    background-color: #eff3f5;
                    width: 10em;
                    border: none;
                    display: flex;
                    justify-content: normal;
                    align-items: normal;
                }
            }

            span {
                flex-wrap: wrap;
            }
        }
    }
</style>
