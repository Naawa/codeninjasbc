<script lang="ts">
	import { page } from '$app/stores';
	import { dojos } from '$lib/utils/dojos';
	import { superForm } from 'sveltekit-superforms';

	export let data: any;

	const { form, errors, constraints, message, enhance, delayed } = superForm(data.form, {
		delayMs: 500,
		timeoutMs: 8000
	});
</script>

<section id="inquiry">
	<p>REQUEST INFO</p>
	<div>
		<h3 class="bold-9 dark-blue">EMPOWER</h3>
		<h3 class="bold-9 dark-text">THEIR FUTURE</h3>
	</div>
	{#if $message}
		<h4>
			{$message}
		</h4>
	{:else}
		<form method="POST" action="/" use:enhance>
			<select bind:value={$form.dojo} name="dojo" {...$constraints.dojo}>
				<option value="" disabled>Select A Location</option>
				{#each dojos as dojo}
					<option>{dojo}</option>
				{/each}
			</select>
			<span>
				<input
					type="text"
					name="parentFirstName"
					placeholder="Parent First Name"
					bind:value={$form.parentFirstName}
					{...$constraints.parentFirstName}
					aria-invalid={$errors.parentFirstName ? 'true' : undefined}
				/>

				<input
					type="text"
					name="parentLastName"
					placeholder="Parent Last Name"
					bind:value={$form.parentLastName}
					{...$constraints.parentLastName}
					aria-invalid={$errors.parentLastName ? 'true' : undefined}
				/>
			</span>
			{#if $errors.parentFirstName}<span class="invalid">{$errors.name}</span>{/if}
			{#if $errors.parentLastName}<span class="invalid">{$errors.name}</span>{/if}
			<input
				type="text"
				name="contactNumber"
				placeholder="0000000000"
				bind:value={$form.contactNumber}
				{...$constraints.contactNumber}
				aria-invalid={$errors.contactNumber ? 'true' : undefined}
				maxlength="10"
			/>
			<input
				type="email"
				name="email"
				placeholder="your-email@example.com"
				bind:value={$form.email}
				{...$constraints.email}
				aria-invalid={$errors.email ? 'true' : undefined}
			/>
			<span>
				<input
					type="text"
					name="childFirstName"
					placeholder="Child First Name"
					bind:value={$form.childFirstName}
					{...$constraints.childFirstName}
					aria-invalid={$errors.childFirstName ? 'true' : undefined}
				/>

				<input
					type="text"
					name="childLastName"
					placeholder="Child Last Name"
					bind:value={$form.childLastName}
					{...$constraints.childLastName}
					aria-invalid={$errors.childLastName ? 'true' : undefined}
				/>
			</span>
			{#if $errors.childFirstName}<span class="invalid">{$errors.name}</span>{/if}
			{#if $errors.childLastName}<span class="invalid">{$errors.name}</span>{/if}
			<br />
			<button class="primary-btn">SUBMIT</button>
			{#if $delayed}
				<img src="/graphics/spinner.gif" alt="Loading spinner." />
			{/if}
		</form>
	{/if}
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
			padding: 4em 2em;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			flex-direction: column;
			gap: 1em;
			min-width: fit-content;
			width: 30vw;
			background-color: white;
			box-shadow: 0 8px 24px #0067be40;
			border-radius: 0.5em;
			z-index: 1;

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
