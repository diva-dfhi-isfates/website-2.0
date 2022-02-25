<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { page } from '$app/stores'
  import { localisedURL } from '$lib/directives'

  $: path = $page.url.pathname
</script>

<ul class={`d-flex list-unstyled ${$$restProps.class ||''}`}>
  <li class="nav-item">
    <a 
      class="nav-link text-dark" 
      class:active={path.includes('/members')}
      href="/members"
      use:localisedURL={$page}
    >{$_('members.title')}</a>
  </li>
  <li class="nav-item">
    <a 
      class="nav-link text-dark" 
      class:active={path.includes('/goodies')}
      href="/goodies"
      use:localisedURL={$page}
    >{$_('goodies.title')}</a>
  </li>
  <li class="nav-item">
    <a
      class="nav-link text-dark"
      class:active={path.includes('/contact')}
      href="/contact"
      use:localisedURL={$page}
    >Contact</a>
  </li>
</ul>

<style>
  .nav-link.active {
    text-decoration: underline;
  }
</style>