<section>
	<span>
		<div>
			<img src="/icons/orange-belt.svg" alt="belt" />
			<span>
				<img src="/icons/green-belt.svg" alt="belt" />
				<img src="/icons/blue-belt.svg" alt="belt" />
			</span>
		</div>
	</span>
	<div>
		<h3>Coding With JavaScript</h3>
		<p>
			The intermediate belts comprise additional extracurricular activities for students and
			programming classes where your child will start writing in code with JavaScript! They will
			engage with and develop advanced problem-solving skills through engaging learning activities.
		</p>
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 4em;
		padding: 0 4em;
		flex-wrap: wrap;
		max-width: 100vw;

		span {
			display: flex;
			flex-direction: column;
			flex: 0%;
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
					justify-content: nor;
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
					display: flex;
					justify-content: center;
					align-items: center;
					align-self: center;
					
					img {
						translate: 0;
					}
				}
			}
			div {
				min-width: 250px;
			}
		}
	}
</style>
