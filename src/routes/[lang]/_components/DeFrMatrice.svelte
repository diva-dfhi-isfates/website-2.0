<script>
  const rows = Array(20).fill(undefined)
  const cols = Array(50).fill(undefined)
</script>

<div class="matrice position-absolute" data-aos="fade-right">
  {#each rows as row}
    <div class="d-flex">
      {#each cols as col}
        <div class="dot rounded-circle m-1"></div>
      {/each}
    </div>
  {/each}
</div>

<style lang="scss">
  @import '../../../styles/mixins';

  .matrice {
    top: 2%;
    left: -5%;
    transform: rotate(-8deg);
    z-index: -2;

    & > div {
      .dot {
        background: black;

        &:nth-child(2n) {
          background: var(--color-flag-de-red);
        }
        &:nth-child(3n) {
          background: var(--color-flag-de-gold);
        }
      }

      &:nth-child(2n) {
        .dot {
          background: var(--color-flag-fr-red);

          &:nth-child(2n) {
            background: var(--color-flag-fr-blue);
          }
          &:nth-child(3n) {
            background: white;
          }
        }
      }
    }
  }


  .dot {
    width: 6px;
    height: 6px;
    background: black;
  }

  @include media-breakpoint-up(md) {
    .matrice {
      top: 60%;
    }
  }
</style>