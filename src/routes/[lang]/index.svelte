<script>
	import { _ } from "svelte-i18n";

	import { getPageTitle } from "$lib/utils";
	import WaveSvg from "./_components/WaveSvg.svelte";
</script>

<svelte:head>
  <title>DIVA - {getPageTitle($_('home.diva_title'))}</title>
</svelte:head>

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
<h1 class="fw-bold mt-5">
  {$_('home.diva_title')}
</h1>

<section class="container">
  <p>La DIVA (Dfhi-Isfates Verein-Association) est l'association des étudiants du DFHI-ISFATES créée par les étudiants et pour les étudiants de l'ISFATES. Son objectif est d'animer et de dynamiser la vie étudiante des isfatessiens tout au long de l'année et de promouvoir par le biais de ses activités l'intégration des nouveaux étudiants, de créer un esprit de groupe et de cohésion. Mais, que fait la DIVA ? </p>
</section>


<style lang="scss">
	@import '../../styles/mixins';

	h1 {
		text-shadow: 2px 2px var(--bs-light);

		&::after {
			display: none;
		}
	}

  section {
    margin-top: 30vh;
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

    section {
      margin-top: 65vh;
    }
  }
</style>
