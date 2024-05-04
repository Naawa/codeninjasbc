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
		justify-content: center;
		align-items: center;
		text-align: center;
		flex-direction: column;
		gap: 1em;
		width: 100%;
		min-height: fit-content;
		padding: 4em 0;

		p {
			color: #2c638fb6;
			letter-spacing: 0.1em;
		}

		div {
			h3 {
				&:last-of-type {
					color: #187abf;
				}
			}
		}

		h4 {
			padding: 2em;
			background-color: white;
			border-radius: 2em;
		}

		form {
			padding: 2em;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			flex-direction: column;
			gap: 1em;
			min-width: 300px;
			width: fit-content;
			background-color: white;
			box-shadow: 0 8px 24px #0067be40;
			border-radius: 0.5em;
			z-index: 1;
            min-height: 25em;

			span {
				width: 100%;
				display: flex;
				gap: 1em;
			}

			img {
				position: absolute;
				height: 10em;
				border-radius: 10em;
				box-shadow: 0 8px 24px #0067be40;
			}
		}
	}
</style>
