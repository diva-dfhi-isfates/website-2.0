<script lang="ts">
  import { page } from '$app/stores'
  import Links from './Links.svelte'
  import LanguageSelection from './LanguageSelection.svelte'
  import { localisedURL } from '$lib/directives';
  
  $: path = $page.url.pathname
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

    <Links {path} />
    <LanguageSelection />
  </div>
</nav>

<style>
  img {
    width: 40px;
  }
</style>