<script context="module" lang="ts">
  import { DEFAULT_LANG } from '$lib/constants';

  export async function load(): Promise<Record<string, string | number>> {
    return {
      status: 303,
      redirect: `/${DEFAULT_LANG}`,
    }
  }
</script>
