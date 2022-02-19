<script>
import WaveSvg from "./_components/WaveSvg.svelte";

</script>
<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="background position-absolute top-0 start-0 text-warning">
		<div data-aos="fade-down" class="wave">
			<div></div>
			<WaveSvg />
			<div class="wave-secondary position-absolute top-100 end-0">
				<WaveSvg />
			</div>
		</div>
		<img src="/assets/diva-icon-variant.svg" class="position-absolute top-100 start-50" alt="" data-aos="fade-up"/>
	</div>
	<h1 class="fw-bold mt-2 mt-md-5">L’association étudiante de l’ISFATES</h1>
</section>

<style lang="scss">
	@import '../../styles/mixins';

	h1 {
		text-shadow: 2px 2px var(--bs-light);
	}

	.background div:not(.wave-secondary) > :global(svg) {
		transform: translateY(-10px);
		width: 100vw;
	}

	.background {
		z-index: -1;

		.wave {
			&-secondary {
				width: 50%;
				color: var(--bs-primary);
				transform: rotateY(180deg) translate(0, -140%);
				z-index: -1;
			}

			div:not(.wave-secondary) {
				height: 30vh;
				background: var(--bs-warning)
			}
		}

		img {
			transform: translate(-50%, -75%);
			width: 40vw;
		}
	}

	@include media-breakpoint-up(md) {
		.background {
			.wave {
				div {
					height: 15vh;
				}
			}

			img {
				width: 20vw;
			}
		}
  }
</style>
