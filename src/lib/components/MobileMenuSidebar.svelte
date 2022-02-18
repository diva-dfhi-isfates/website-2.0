<script>
  import { _ } from "svelte-i18n";
  import LanguageSelection from "./LanguageSelection.svelte";
  import Links from "./Links.svelte";
</script>

<div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="sidebar" aria-labelledby="sidebarTitle">
  <div class="offcanvas-header">
    <h1 id="sidebarTitle">{$_('menu')}</h1>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body d-flex flex-column">
    <Links class="flex-column"/>
    <LanguageSelection class="m-0 mt-3 align-self-center"/>
  </div>
</div>

<style>
  h1::after {
    background-color: var(--bs-warning);
  }
</style>