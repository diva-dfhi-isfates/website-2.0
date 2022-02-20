<script lang="ts">
  import { EMAIL, SOCIALS } from "$lib/constants"
  import EnvelopeIcon from "./icons/Envelope.svelte"
  import FacebookIcon from "./icons/Facebook.svelte"
  import InstagramIcon from "./icons/Instagram.svelte"
</script>

<ul {...$$restProps} class={`list-unstyled d-flex justify-content-center ${$$restProps.class}`}>
  <li class="m-2">
    <a
      href={`mailto:${EMAIL}`}
      title="email"
      aria-label="email"
      class="p-3 text-light d-inline-block rounded-circle gmail"
    >
      <EnvelopeIcon />
    </a>
  </li>
  <li class="m-2">
    <a
      href={SOCIALS.facebook.url}
      target="_blank"
      title={SOCIALS.facebook.tag}
      aria-label={SOCIALS.facebook.tag}
      class="p-3 text-light d-inline-block rounded-circle facebook"
    >
      <FacebookIcon />
    </a>
  </li>
  <li class="m-2">
    <a
      href={SOCIALS.instagram.url}
      target="_blank"
      title={SOCIALS.instagram.tag}
      aria-label={SOCIALS.instagram.tag}
      class="col p-3 text-light d-inline-block rounded-circle instagram"
    >
      <InstagramIcon />
    </a>
  </li>
</ul>

<style lang="scss">
  @import '../../styles/mixins';

  li :global(svg) {
    width: 1.6rem;
    height: 1.6rem;
  }

  .gmail {
    background-color: var(--color-gmail);
  }

  .facebook {
    background-color: var(--color-facebook);
  }

  .instagram {
    background-color: var(--color-instagram);
  }

  @include media-breakpoint-up(md) {
    li :global(svg) {
      width: 2rem;
      height: 2rem;
    }
  }
</style>