<section>
	<span>
		<img src="/icons/white-belt.svg" alt="belt" />
		<img src="/icons/yellow-belt.svg" alt="belt" />
	</span>
	<div>
		<h3>Block Based Coding</h3>
        <p>
            During the White & Yellow belt stages, the kids' coding classes introduce foundational coding concepts and your child will begin developing projects through easy-to-use block-based coding in Microsoft MakeCode and educational learning games.
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
            flex: 0%;
            justify-content: end;
            gap: 1em;

			img {
				height: 5em;
				width: 5em;
                translate: -4em;
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
                justify-content: center;
                img {
                    translate: 0;
                }
            }
            div {
                min-width: 250px;
            }
        }
    }
</style>
