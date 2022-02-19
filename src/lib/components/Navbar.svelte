<script lang="ts">
  import Links from './Links.svelte'
  import LanguageSelection from './LanguageSelection.svelte'
  import { localisedURL } from '$lib/directives'
  import { screen } from '$lib/stores';
  import BurgerIcon from './icons/Burger.svelte';
  import MobileMenuSidebar, { OFFCANVAS_ID } from './MobileMenuSidebar.svelte';
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom border-warning border-4 sticky-top">
  <div class="d-flex justify-content-between w-100 px-3">
    <a
      class="navbar-brand fw-bold fs-3 p-0 d-flex align-items-center"
      href="/"
      use:localisedURL
    >
      <img src="/assets/diva-icon.svg" alt="" class="me-2"/>
      DIVA
    </a>

    {#if $screen.device !== 'mobile'}
      <Links />
      <LanguageSelection />
    {:else}
      <button
        class="burger btn p-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target={`#${OFFCANVAS_ID}`}
        aria-controls="offcanvasRight"
      >
        <BurgerIcon />
      </button>
      <MobileMenuSidebar />
    {/if}

  </div>
</nav>

<style>
  img {
    width: 40px;
  }
  
  .burger :global(svg) {
    width: 2rem;
    height: 2rem;
  } 
</style>