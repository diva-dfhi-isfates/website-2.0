<script lang="ts">
  import { page } from '$app/stores'
  import Links from './Links.svelte'
  import LanguageSelection from './LanguageSelection.svelte'
  import { keepQueryStrings } from '$lib/directives/keepQueryStrings';
  
  $: path = $page.url.pathname
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="d-flex justify-content-between w-100 px-3">
    <a
      class="navbar-brand fw-bold fs-3 p-0 d-flex align-items-center"
      href="/"
      use:keepQueryStrings={$page}
    >
      <img src="/assets/diva-icon.svg" alt="" class="me-2"/>
      DIVA
    </a>

    <div class="d-flex">
      <Links {path} />
      <LanguageSelection />
    </div>
  </div>
</nav>

<style>
  img {
    width: 40px;
  }
</style>