<script>
  import { _ } from "svelte-i18n"

  import DeFrMatrice from "./DeFrMatrice.svelte"
  import WaveSvg from "./WaveSvg.svelte"
</script>

<header class="position-relative overflow-hidden">
  <div class="background position-absolute top-0 start-0 text-warning">
    <DeFrMatrice />
    <div class="wave">
      <div></div>
      <WaveSvg />
      <div class="wave-secondary position-absolute top-100 end-0">
        <WaveSvg />
      </div>
    </div>
    <img src="/assets/diva-icon-variant.svg" id="divaLogo" class="position-absolute top-100 start-50" alt=""/>
  </div>

  <h1 class="fw-bold mt-5 p-2 p-md-5" data-aos="fade-right">
    {$_('home.diva_title')}
  </h1>
</header>


<style lang="scss">
  @import '../../../styles/mixins';

  header {
    padding-bottom: 30vh;
  }

  h1 {
    text-shadow: 2px 2px var(--bs-light);

    &::after {
      display: none;
    }
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
        height: 25vh;
        background: var(--bs-warning)
      }
    }

    #divaLogo {
      transform: translate(-50%, -75%);
      width: 40vw;
    }
  }

  #beers {
    width: 30vw;
    top: 20vh;
    right: 10vw;
    opacity: .1;
  }

  #flagDE {
    left: 5%;
    bottom: 5%;
    opacity: .5;
    transform: rotate(-2deg);
    width: 20vw;
  }

  @include media-breakpoint-up(md) {
    .background {
      .wave {
        div:not(.wave-secondary) {
          height: 20vh;
        }

        div {
          height: 15vh;
        }
      }

      #divaLogo {
        width: 20vw;
      }
    }


    #beers {
      width: 15vw;
    }

    header {
      padding-bottom: 70vh;
    }
  }
</style>