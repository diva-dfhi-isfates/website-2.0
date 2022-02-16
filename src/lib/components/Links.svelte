<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { page } from '$app/stores';
  import { keepQueryStrings } from '$lib/directives/keepQueryStrings';

  export let path: string
</script>
<ul class="d-flex list-unstyled">
  <li class="nav-item">
    <a 
      class="nav-link text-dark" 
      class:active={path.includes('/members')}
      href="/members"
      use:keepQueryStrings={$page}
    >{$_('members.title')}</a>
  </li>
  <li class="nav-item">
    <a 
      class="nav-link text-dark" 
      class:active={path.includes('/gallery')}
      href="/gallery"
      use:keepQueryStrings={$page}
    >{$_('gallery.title')}</a>
  </li>
  <li class="nav-item">
    <a
      class="nav-link text-dark"
      class:active={path.includes('/contact')}
      href="/contact"
      use:keepQueryStrings={$page}
    >Contact</a>
  </li>
</ul>

<style>
  .nav-link.active {
    text-decoration: underline;
  }
</style>