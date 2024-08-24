<script>
	import About from '../birthdays/BirthdayAbout.svelte';
</script>

<span>
    <img src="/graphics/birthdays/BirthdayParties.png" alt="Birthday parties icon." />
</span>
<section>
	<div>
		<About></About>
	</div>
</section>

<style lang="scss">
	span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 4em;
        background-image: url('/graphics/birthdays/BdayBg.svg');
        background-repeat: no-repeat;
        background-size: cover;

        img {
            height: 20em;
        }
    }
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 4em;
		padding: 2em 4em;
		flex-wrap: wrap;
		max-width: 100vw;
		background-repeat: no-repeat;
		background-size: cover;

		span {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			height: 100%;
			width: 100%;
			justify-content: end;
			gap: 1em;
		

			div {
				display: flex;
				justify-content: center;
				align-items: center;
				width: fit-content;
				align-self: flex-end;

				span {
					width: fit-content;
					display: flex;
					flex-direction: row;
					justify-content: center;
				}

				img {
					height: 5em;
					width: 5em;
					translate: -4em;
				}
			}
		}

		div {
			flex: 0%;
			display: flex;
			flex-direction: column;
			gap: 1em;
			align-items: start;
			p {
				color: #f6f7f8;
			}
			h3 {
				color: white;
			}
		}
	}

	@media (width < 800px) {
		section {
			width: fit-content;
			padding: 1em;
			span {
				div {
					align-self: center;
					span {
						justify-content: center;
						align-items: center;
						img {
							translate: 0;
						}
					}
				}
			}
			div {
				min-width: 250px;
			}
		}
	}
</style>
