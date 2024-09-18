<script lang="ts">
	import AvailableTourDateSelector from '$lib/components/forms/tour/AvailableTourDateSelector.svelte';
	import { getLocation, locations, type Dojo } from '$lib/utils/dojos.js';
	import { superForm } from 'sveltekit-superforms';
	import Heading from '$lib/components/forms/tour/Heading.svelte';

	export let data;
	const { form, errors, constraints, message, enhance, delayed } = superForm(data.form, {
		delayMs: 500,
		timeoutMs: 8000
	});

	let availableTourDates: any;
	let dojo: Dojo | undefined;

	async function loadAvailableTourDates(center: string) {
		const req = await fetch(`/api/${center}`);
		const res = await req.json();
		return res.availableTourDates.fields.tourTime.field;
	}

	$: {
		dojo = getLocation($form.selectedCenter);
	}
</script>

<svelte:head>
	<title>Free Session!</title>
	<meta name="description" content="Book a free session!" />
</svelte:head>

<section>
	<Heading></Heading>
	<h3>{$form.selectedTourDate}</h3>
	{#if $message}
		<h4>
			{$message}
		</h4>
	{:else}
		{#if !$form.selectedCenter}
			<select bind:value={$form.selectedCenter} name="dojo" {...$constraints.selectedCenter}>
				<option value="" disabled>Select A Location</option>
				{#each locations as location}
					{#if location.name != "Burnaby South"}
						<option value={location.crm}>{location.name}</option>
					{/if}
				{/each}
			</select>
			<p>
				Choose a center to schedule a free demo session where you can bring your child to build a
				game with one of our Code Senseis and experience what it's like to be at Code Ninjas!
			</p>
		{/if}
		{#if $form.selectedCenter}
			{#if new Date($form.selectedTourDate).toLocaleDateString() == 'Invalid Date'}
				<select bind:value={$form.selectedCenter} name="dojo" {...$constraints.selectedCenter}>
					<option value="" disabled>Select A Location</option>
					{#each locations as location}
						{#if location.name != 'Burnaby South'}
							<option value={location.crm}>{location.name}</option>
						{/if}
					{/each}
				</select>
			{/if}
			{#if !$form.selectedTourDate}
				{#await (availableTourDates = loadAvailableTourDates($form.selectedCenter))}
					<h4>Loading available tour dates...</h4>
				{:then tourDatePeriod}
					<AvailableTourDateSelector
						{tourDatePeriod}
						bind:selectedTourDate={$form.selectedTourDate}
					></AvailableTourDateSelector>
				{/await}
			{:else}
				<div>
					<h3 class="dark-blue">{dojo?.name}</h3>
					<b class="dark-blue">{dojo?.address}</b>
					<b class="dark-blue">{dojo?.phone}</b>
				</div>
				<span>
					<div>
						<button
							class="round-left"
							on:click={() => {
								$form.selectedTourDate = '';
							}}
						>
							<img src="/icons/arrow.svg" alt="Left" />
						</button>
						<b>Go Back</b>
					</div>
					<div>
						<h4 class="dark-text">
							Scheduled for {new Date($form.selectedTourDate).toLocaleString().split(",", 1)[0]}
						</h4>
						<h4 class="ninja-blue">
							{new Date($form.selectedTourDate).toLocaleString().split(",")[1]}
						</h4>
					</div>
				</span>
				<form method="POST" action="/tour" use:enhance>
					<h5 class="dark-text bold-9">Child Information:</h5>
					<span>
						<input
							type="text"
							name="childFirstName"
							placeholder="First Name"
							bind:value={$form.childFirstName}
							{...$constraints.childFirstName}
							aria-invalid={$errors.childFirstName ? 'true' : undefined}
						/>
						<input
							type="text"
							name="childLastName"
							placeholder="Last Name"
							bind:value={$form.childLastName}
							{...$constraints.childLastName}
							aria-invalid={$errors.childLastName ? 'true' : undefined}
						/>
					</span>
					{#if $errors.childFirstName}<span class="invalid">{$errors.childFirstName}</span>{/if}
					{#if $errors.childLastName}<span class="invalid">{$errors.childLastName}</span>{/if}
					<span>
						<input
							type="number"
							name="childBirthDay"
							placeholder="DD"
							min="01"
							max="31"
							minlength="2"
							maxlength="2"
							bind:value={$form.childBirthDay}
							{...$constraints.childBirthDay}
							aria-invalid={$errors.childBirthDay ? 'true' : undefined}
						/>
						<input
							type="number"
							name="childBirthMonth"
							placeholder="MM"
							min="01"
							max="12"
							minlength="2"
							maxlength="2"
							bind:value={$form.childBirthMonth}
							{...$constraints.childBirthMonth}
							aria-invalid={$errors.childLastName ? 'true' : undefined}
						/>
						<input
							type="number"
							name="childBirthYear"
							placeholder="YYYY"
							min="2006"
							max="2018"
							minlength="4"
							maxlength="4"
							bind:value={$form.childBirthYear}
							{...$constraints.childBirthYear}
							aria-invalid={$errors.childBirthYear ? 'true' : undefined}
						/>
					</span>
					<br />
					<h5 class="dark-text bold-9">Parent Information:</h5>
					<span>
						<input
							type="text"
							name="parentFirstName"
							placeholder="First Name"
							bind:value={$form.parentFirstName}
							{...$constraints.parentFirstName}
							aria-invalid={$errors.parentFirstName ? 'true' : undefined}
						/>

						<input
							type="text"
							name="parentLastName"
							placeholder="Last Name"
							bind:value={$form.parentLastName}
							{...$constraints.parentLastName}
							aria-invalid={$errors.parentLastName ? 'true' : undefined}
						/>
					</span>
					{#if $errors.parentFirstName}<span class="invalid">{$errors.parentFirstName}</span>{/if}
					{#if $errors.parentLastName}<span class="invalid">{$errors.parentFirstName}</span>{/if}
					<input
						type="text"
						name="parentPhone"
						placeholder="(000) 000 0000"
						bind:value={$form.parentPhone}
						{...$constraints.parentPhone}
						aria-invalid={$errors.parentPhone ? 'true' : undefined}
					/>
					{#if $errors.parentPhone}<span class="invalid">{$errors.parentPhone}</span>{/if}
					<input
						type="email"
						name="parentEmail"
						placeholder="email@example.com"
						bind:value={$form.parentEmail}
						{...$constraints.parentEmail}
						aria-invalid={$errors.parentEmail ? 'true' : undefined}
					/>
					<br />
					<h5 class="dark-text bold-9">Additional Information:</h5>
					<textarea
						name="comments"
						placeholder="Comments, questions..."
						maxlength="500"
						bind:value={$form.comments}
						{...$constraints.comments}
						aria-invalid={$errors.comments ? 'true' : undefined}
					/>
					<input
						type="text"
						style="display: none;"
						name="selectedCenter"
						bind:value={$form.selectedCenter}
					/>
					<input
						type="text"
						style="display: none;"
						name="selectedTourDate"
						bind:value={$form.selectedTourDate}
					/>
					<button class="primary-btn">SUBMIT</button>
					{#if $delayed}
						<img src="/graphics/spinner.gif" alt="Loading spinner." />
					{/if}
				</form>
			{/if}
		{/if}
	{/if}
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2em 0;
		gap: 2em;
		min-height: calc(100vh - 4em);

		p {
			width: clamp(275px, 35em, 40vw);
			text-align: center;
		}

		span {
			display: flex;
			justify-content: space-between;
			margin: auto;
			width: clamp(275px, 35em, 40vw);
			margin: 0 auto;

			div {
				display: flex;
				justify-content: center;
				width: fit-content;
				padding: 0;
				gap: 1em;

				h4 {
					text-align: right;
					width: 100%;
				}
			}
			&::-webkit-scrollbar {
				width: 7px;
			}
			&::-webkit-scrollbar-thumb {
				background-color: rgba(0, 0, 0, 0.4);
				border-radius: 10rem;
				border: 1px solid #fff;
			}

			&::-webkit-scrollbar-track-piece:start {
				background: transparent;
			}

			&::-webkit-scrollbar-track-piece:end {
				background: transparent;
			}
		}

		select {
			max-width: 20em;
		}

		div {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			padding: 0 2em;
			gap: 0.5em;
			width: fit-content;
			flex-direction: column;
			text-align: center;

			b {
				text-wrap: balance;
			}
		}

		form {
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: clamp(275px, 35em, 40vw);
			gap: 1em;

			span {
				display: flex;
				width: 100%;
				gap: 1em;
			}

			button {
				margin: 1em 0;
			}

			textarea {
				padding: 1.618em;
				height: 10em;
			}
		}
	}
</style>
