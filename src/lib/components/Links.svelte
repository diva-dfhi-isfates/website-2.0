<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { page } from '$app/stores';
  import { localisedURL } from '$lib/directives';

  export let path: string
</script>
<ul class="d-flex list-unstyled">
  <li class="nav-item">
    <a 
      class="nav-link text-dark" 
      class:active={path.includes('/members')}
      href="/members"
      use:localisedURL
    >{$_('members.title')}</a>
  </li>
  <li class="nav-item">
    <a 
      class="nav-link text-dark" 
      class:active={path.includes('/gallery')}
      href="/gallery"
      use:localisedURL
    >{$_('gallery.title')}</a>
  </li>
  <li class="nav-item">
    <a
      class="nav-link text-dark"
      class:active={path.includes('/contact')}
      href="/contact"
      use:localisedURL
    >Contact</a>
  </li>
</ul>

<style>
  .nav-link.active {
    text-decoration: underline;
  }
</style>