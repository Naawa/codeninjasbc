<script lang="ts">
	import { date } from "zod";

	export let tourDatePeriod: any;
	export let selectedTourDate: string;

	let start = new Date(tourDatePeriod.start);
	let end = new Date(tourDatePeriod.end);
	let timeslots = tourDatePeriod.timeslots;

	interface TimeSlot {
		startTime: string;
		isAvailable: boolean;
	}

	interface AvailableTourDates {
		date: string;
		slots: TimeSlot[];
	}

	function getDayTourDates(month: number, date: number): TimeSlot[] {
		let slots: TimeSlot[] = [];

		for (let i = 0; i < timeslots.length; i++) {
			let tourDateDate = new Date(timeslots[i].start);
			if (month == tourDateDate.getMonth()) {
				if (date == tourDateDate.getDate()) {
					slots.push({ startTime: timeslots[i].start, isAvailable: timeslots[i].isAvailable });
				}
			}
		}

		return slots;
	}

	function getAvailableTourDates(): AvailableTourDates[] {
		let availableTourDates: AvailableTourDates[] = [];
		let date = new Date(start);
		while (date.getDate() != end.getDate()) {
			availableTourDates.push({
				date: date.toLocaleString(),
				slots: getDayTourDates(date.getMonth(), date.getDate())
			});
			date.setDate(date.getDate() + 1);
		}

		return availableTourDates;
	}
	function getDateString(date: string): string {
		return date.split(",", 1)[0]
	}

	let availableTourDates: AvailableTourDates[] = getAvailableTourDates();
	console.log(availableTourDates)
</script>

<h4>Select a Timeslot</h4>
<section>
	{#if new Date(selectedTourDate).toLocaleDateString() == 'Invalid Date'}
		<div>
			<h4>
				{start.toLocaleDateString(undefined, {
					month: 'long',
					day: '2-digit'
				})} - {end.toLocaleDateString(undefined, {
					month: 'long',
					day: '2-digit'
				})}
			</h4>
		</div>
		<span>
			{#each availableTourDates as tourDate, i}
				{#if tourDate.slots.length > 0}
					<div>
						<h5>
							{getDateString(tourDate.date)}
							{new Date(getDateString(tourDate.date)).toLocaleDateString(undefined, {
								weekday: 'long',
								day: '2-digit',
								month: 'long'
							})}
						</h5>
						{#each availableTourDates[i].slots as slot, i}
							{#if slot.isAvailable}
								<button
									on:click={() => {
										selectedTourDate = new Date(slot.startTime).toLocaleString();
									}}
									>{new Date(slot.startTime).toLocaleTimeString(undefined, {
										hour: '2-digit',
										minute: '2-digit'
									})}
								</button>
							{:else}
								<button class="unavailable"
									>N/A {new Date(slot.startTime).toLocaleTimeString(undefined, {
										hour: '2-digit',
										minute: '2-digit'
									})}
								</button>
							{/if}
						{/each}
					</div>
				{/if}
			{/each}
		</span>
	{/if}
</section>

<style lang="scss">
	section {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 2em;
		padding: 2em;
		min-width: 225px;
		max-width: 90vw;
		background-color: #a7bbc33c;
		border-radius: 1em;

		span {
			display: flex;
			gap: 2em;
			width: 100%;
			overflow: scroll;
			padding: 0 2em 2em;
			border-radius: 1em;
			overflow-y: hidden;

			div {
				display: flex;
				flex-direction: column;
				justify-content: normal;
				align-items: center;
				gap: 1em;
				min-width: fit-content;
				padding: 0;

				button {
					padding: 1em;
					background-color: #eff3f5;
					width: 10em;
					border: none;
					display: flex;
					justify-content: normal;
					align-items: center;
					border-radius: 0.25em;

					&:hover {
						background-color: #e3eaf0;
					}
				}

				.unavailable {
					background-color: #e5eaed;
					color: #9eabb5;

					&:hover {
						background-color: #e5eaed;
						color: #9eabb5;
					}
				}
			}

			span {
				flex-wrap: wrap;
			}
		}
	}
</style>
