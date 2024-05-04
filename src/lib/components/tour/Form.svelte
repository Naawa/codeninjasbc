<script lang="ts">
	import { dojos } from "$lib/utils/dojos";

    /**
     * 1. Select A Center
    */

    let selectedCenter: string;
    let center: any;
    let periodStart: Date;
    let periodEnd: Date;
    let timeslots: any;
    let availableTimeslots: string[][] = [];


	async function loadAvailableDates(center: string) {
		async function getCenterInfo() {
            let req = fetch(`https://services.codeninjas.com/api/v1/facility/${center}`)
            let res = await req;
            return res.json()
        }
        let centerInfo = await getCenterInfo();
        
        async function getAvailableTourDates() {
            let req = fetch(`https://live.childcarecrm.com/form?formId=b42a0ab3-0e2f-443b-ba55-bed7e2c55200&customerId=f1e0c921c46684f267d2eb52aa13f518&centerId=${centerInfo.ccrmId}`)
            let res = await req;
            return res.json()
        }
        let availableTourDates = await getAvailableTourDates()

        center = centerInfo,
        periodStart = new Date(availableTourDates.fields.tourTime.field.start)
	    periodEnd = new Date(availableTourDates.fields.tourTime.field.end)
	    timeslots = availableTourDates.fields.tourTime.field.timeslots
        availableTimeslots = getAvailableTimeSlots()
	}

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
        let date = periodStart;
        while (date.getDate() != periodEnd.getDate()) {
            availableTimeslots.push(getDayTimeSlots(date.getMonth(), date.getDate()));
            date.setDate(date.getDate() + 1)
        }

        return availableTimeslots;
    }
</script>

<section>
    <h3 class="dark-blue">Select A Center</h3>
    <menu>
        <select bind:value={selectedCenter}>
            <option value="" disabled>Select A Location</option>
            {#each dojos as dojo}
                <option>{dojo}</option>
            {/each}
        </select>
         <button class="primary-btn" on:click={(event) => {
            event.preventDefault();
            loadAvailableDates(selectedCenter)
            }}>NEXT</button>
    </menu>
    {#if availableTimeslots}
        <span>
            <h4>{periodStart.toLocaleDateString()} - {periodEnd.toLocaleDateString()}</h4>
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
    {:else}
        <b>Select a center to view available timeslots.</b>
    {/if}
</section>

<style lang="scss">
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4em 10vw;
        flex-direction: column;
        gap: 1em;
    }
</style>