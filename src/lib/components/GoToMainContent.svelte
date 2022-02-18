<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { MAIN_CONTENT_ID } from '$lib/constants';
</script>

<a
  href={`./#${MAIN_CONTENT_ID}`}
  class="position-absolute top-0 start-0 btn btn-outline-dark bg-light m-2 visually-hidden-focusable"
>
  {$_('goto_main_content')}
</a>

<style lang="scss">
  a {
    z-index: 100000;
  }
</style>
