<section>
	<span>
		<div>
			<span>
				<img src="/icons/purple-belt.svg" alt="belt" />
				<img src="/icons/brown-belt.svg" alt="belt" />
			</span>
			<span>
				<img src="/icons/red-belt.svg" alt="belt" />
				<img src="/icons/black-belt.svg" alt="belt" />
			</span>
		</div>
	</span>
	<div>
		<h3>Profiecieny In Unity</h3>
		<p>
			On the road to Black Belt, your child will develop their original video game using Unity, a
			platform that professional video games are developed on, including roblox game coding and
			minecraft coding! That’s right. We’re using roblox for education!
		</p>
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 4em;
		padding: 2em 4em;
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
