<script context="module">
  export const OFFCANVAS_ID = 'offCanvasMenu' 
</script>

<script>
import { onMount } from "svelte";

  import { _ } from "svelte-i18n";
  import LanguageSelection from "./LanguageSelection.svelte";
  import Links from "./Links.svelte";
  import SocialLinks from "./SocialLinks.svelte";
  
  let bsOffcanvas

  onMount(() => {
    bsOffcanvas = new bootstrap.Offcanvas(document.getElementById(OFFCANVAS_ID))
  })
</script>

<div id={OFFCANVAS_ID} class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" aria-labelledby="sidebarTitle">
  <div class="offcanvas-header">
    <h1 id="sidebarTitle">{$_('menu')}</h1>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body d-flex flex-column" on:click={() => { bsOffcanvas.hide() }}>
    <Links class="flex-column fs-4" />
    <LanguageSelection class="m-0 mt-3 align-self-center" />
    <SocialLinks class="position-absolute end-0 bottom-0" />
  </div>
</div>

<style>
  .offcanvas :global(.language-selection img) {
    height: 2rem;
  }

  h1::after {
    background-color: var(--bs-warning);
  }
</style>