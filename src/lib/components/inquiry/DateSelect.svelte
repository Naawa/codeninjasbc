<script lang="ts">
    export let availableTourDates;

    let start = new Date(availableTourDates.fields.tourTime.field.start)
	let end = new Date(availableTourDates.fields.tourTime.field.end)
	let timeslots = availableTourDates.fields.tourTime.field.timeslots

    function getTimeSlots(month: number, date: number): string[] {
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

    console.log(getTimeSlots(4, 8))

</script>

<section>
    <span>
        <button class="secondary-btn">Prev</button>
        <h4>{start.toLocaleDateString()} - {end.toLocaleDateString()}</h4>
        <button class="secondary-btn">Next</button>
    </span>
    <span>
        
    </span>
</section>

<style lang="scss">
    section {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 2em;

        span {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            width: 100%;
            gap: 1em;

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
</style>