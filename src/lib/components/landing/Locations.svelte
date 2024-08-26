<script>
	import { locations } from '$lib/utils/dojos';
	import LocationMap from './LocationMap.svelte';
</script>

<section>
	<span>
		{#each locations as location}
			<div>
				<div>
					<img src="/icons/marker.png" alt="" />
				</div>
				<h3 class="bold-9">{location.name}</h3>
				<p>{location.address}</p>
				<a class="bold-9 ninja-green" href="tel:+1{location.phone}">{location.phone}</a>
			</div>
		{/each}
	</span>
	<LocationMap></LocationMap>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: rgb(98, 160, 193);
		background: linear-gradient(138deg, rgb(6, 80, 120) 0%, rgb(0, 52, 94) 100%);
		margin: 3em 0;
		padding: 8em 0;

		span {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(14em, 1fr));
			column-gap: 2em;
			row-gap: 3em;
			padding: 0 20vw;
			height: fit-content;
			z-index: 4;
			width: 100vw;
			
			div {
				min-width: 6em;
				padding: 3em 1em;
				border-radius: 0.5em;
				min-height: 5em;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				gap: 1em;
				background-color: rgba(168, 194, 216, 0.215);
				position: relative;
				text-align: center;

				div {
					align-self: center;
					width: fit-content;
					position: absolute;
					translate: 0 -10em;
					background-color: transparent;
					img {
						height: 6em;
						width: 100%;
						background-color: transparent;
					}
				}
			}

			h3 {
				color: rgba(255, 255, 255, 0.765);
			}
			p {
				height: 4em;
				line-height: 1.4;
				text-wrap: pretty;
				color: rgba(255, 255, 255, 0.746);
				padding: 0 1em;
			}

			a {
				font-size: large;
			}
		}
	}
</style>
