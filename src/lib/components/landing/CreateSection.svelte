<script>
	import BlockBased from './progression/BlockBased.svelte';
	import JavaScript from './progression/JavaScript.svelte';
	import ProgressionHeader from './progression/ProgressionHeader.svelte';
	import Unity from './progression/Unity.svelte';
</script>

<section id="courses">	
	<span>
		<img src="/graphics/landing/cbg2.webp" alt="" />
		<img src="/graphics/landing/ccf.webp" alt="" />
		<div>
			<img src="/graphics/landing/createFocus.jpg" alt="" />
		</div>
		<div>
			<p>AGES 8 TO 14</p>
			<span>
				<h4>CODE NINJAS</h4>
				<h1 class="bold-9">COURSES</h1>
			</span>
			<p>
				“CREATE” is Code Ninjas’ core coding for kids program for children ages 8 - 14 to study
				coding through learning activities, including building video games. The self-paced coding
				academy uses a belt system, like martial arts, with each level providing learning activities
				for kids that introduce new coding challenges and projects to keep learning engaging and
				progressively complex.
			</p>
		</div>
	</span>
	<ProgressionHeader></ProgressionHeader>
	<BlockBased></BlockBased>
    <JavaScript></JavaScript>
    <Unity></Unity>
</section>

<style lang="scss">
	section {
		display: flex;
        flex-direction: column;
		flex-wrap: wrap;
		gap: 0em;
		padding: 6em;
		background: rgb(98, 160, 193);
		background: linear-gradient(138deg, rgb(20, 136, 199) 0%, rgb(0, 52, 94) 100%);
		width: 100%;
		position: relative;
		overflow: hidden;

        span {
            display: flex;
            gap: 4em;
            flex-wrap: wrap;
            padding: 0 4em;
        }

		img {
			position: absolute;
			top: 0;
			left: 0;
			min-height: 100%;
			min-width: 100%;
			opacity: 0.4;
		}

		div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex: 0%;
			position: relative;

			p {
				min-width: 350px;
				width: 25em;
				max-width: 30vw;
				margin: 0.5em 0;
				color: #f6f7f8;

				&:first-of-type {
					min-width: fit-content;
					color: #70c9e8;
				}
			}

			span {
                display: block;
                padding: 0;
				h1 {
					color: #8eecff;
					width: fit-content;
				}

				h4 {
					font-weight: 600;
					color: #f6f7f8;
					width: fit-content;
				}
			}

			img {
				position: absolute;
				min-height: auto;
				min-width: 175px;
				height: auto;
				width: 24em;
				max-width: 80vw;
				top: auto;
				left: auto;
				align-self: end;
				box-shadow: 0 0 20px 1px rgba(37, 37, 37, 0.253);
				border-radius: 1em;
				opacity: 1;
				rotate: 5deg;
			}
		}
	}

	@media (width < 1000px) {
		section {
			flex-direction: column;
			padding: 4em 1em 3em;
			gap: 2em;

			div {
                display: flex;
				flex-direction: row;
				align-items: center;
				min-height: 200px;

				&:last-of-type {
					flex-direction: column;
				}

				p {
					text-align: center;
					width: 50%;
					max-width: 90vw;
					margin: 0;

					&:first-of-type {
						z-index: 1;
						width: fit-content;
					}
				}
			}

			span {
				display: flex;
				flex-direction: column;
				align-items: center;
                gap: 2em;
                padding: 0;
			}

			img {
				&:last-of-type {
					max-height: 200px;
					width: auto;
				}
			}
		}
	}
</style>
