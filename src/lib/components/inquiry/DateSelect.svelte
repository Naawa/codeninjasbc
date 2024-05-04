<script lang="ts">
	import { quadInOut } from "svelte/easing";

    export let availableTourDates;

    let start = new Date(availableTourDates.fields.tourTime.field.start)
	let end = new Date(availableTourDates.fields.tourTime.field.end)
	let timeslots = availableTourDates.fields.tourTime.field.timeslots

    function getDayTimeSlots(month: number, date: number): string[] {
        let slots: string[] = [];

        for(let i = 0; i < timeslots.length; i++) {
            let timeSlotDate = new Date(timeslots[i].start);
            if(month == timeSlotDate.getMonth()) {
                if(date == timeSlotDate.getDate()) {
                    slots.push(timeslots[i].start);
                }
            }
            
        }

        return slots;
    }

    function getAvailableTimeSlots(): string[][] {
        let availableTimeslots: string[][] = [];
        let date = start;
        while (date.getDate() != end.getDate()) {
            availableTimeslots.push(getDayTimeSlots(date.getMonth(), date.getDate()));
            date.setDate(date.getDate() + 1)
        }

        return availableTimeslots;
    }

    let availableTimeslots: string[][] = getAvailableTimeSlots();
</script>

<section>
    <span>
        <h4>{start.toLocaleDateString()} - {end.toLocaleDateString()}</h4>
    </span>
    <span>
        {#each availableTimeslots as dayTimeSlot, i}
        {#if new Date(dayTimeSlot[0]).toLocaleDateString() != "Invalid Date"}
            <div>
                <h5>{new Date(dayTimeSlot[0]).toLocaleDateString()}</h5>
                {#each availableTimeslots[i] as timeslot }
                    <b>{new Date(timeslot).toLocaleTimeString()}</b>
                {/each}
            </div>
            {/if}
        {/each}
    </span>
</section>

<style lang="scss">
    section {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        span {
            display: grid;
            grid-auto-flow: column;
            width: 70vw;
            gap: 1em;
            max-height: 40vh;
            overflow: scroll;
            padding: 1em;

            &:last-of-type {
                flex-direction: column;
            }

            div {
                display: flex;
                align-items: center;
                gap: 0.5em;
                flex-direction: column;
                flex: 0%;
                padding: 1em;

                b {
                    display: flex;
                    align-items: center;
                    width: 10em;
                    padding: 1em 1em 0.8em;
                    background-color: #eff3f5;
                    border-radius: 0.25em;
                }
            }
        }
    }
</style>