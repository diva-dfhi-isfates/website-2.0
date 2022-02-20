<script>
  import { _ } from 'svelte-i18n';

  import Emoji from 'svelte-emoji'
  import SocialLinks from "$lib/components/SocialLinks.svelte";
  import { ADDRESSES } from "$lib/constants";
  import Address from "./_components/Address.svelte";
  import { getPageTitle } from '$lib/utils';
</script>

<svelte:head>
  <title>{getPageTitle($_('contact.title'))}</title>
</svelte:head>

<section class="container">
  <h1 data-aos="fade-right">{$_('contact.title')}</h1>

  <div class="row mt-5">
    <div class="col-md-6" data-aos="fade-up">
      <h2 class="mt-3">
        <Emoji symbol="🇩🇪" />
        {$_('contact.side.german')}:
      </h2>
      <Address {...ADDRESSES.saarbrucken} />
    </div>
    <div class="col-md-6" data-aos="fade-up" data-aos-delay="50">
      <h2 class="mt-3">
        <Emoji symbol="🇫🇷" />
        {$_('contact.side.french')}:
      </h2>
      <Address {...ADDRESSES.metz} />
    </div>
  </div>
</section>

<SocialLinks class="mt-5" data-aos="fade-up" data-aos-delay="100"/>    
