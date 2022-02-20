<script>
	import { _ } from "svelte-i18n"

	import { getPageTitle } from "$lib/utils"
	import FancyHeader from "./_components/FancyHeader.svelte"
</script>

<svelte:head>
  <title>DIVA - {getPageTitle($_('home.diva_title'))}</title>
</svelte:head>

<FancyHeader />

<section class="container" data-aos="fade-up">
  <p>La DIVA (Dfhi-Isfates Verein-Association) est l'association des étudiants du DFHI-ISFATES créée par les étudiants et pour les étudiants de l'ISFATES. Son objectif est d'animer et de dynamiser la vie étudiante des isfatessiens tout au long de l'année et de promouvoir par le biais de ses activités l'intégration des nouveaux étudiants, de créer un esprit de groupe et de cohésion. Mais, que fait la DIVA ? </p>
</section>


<style lang="scss">
  @import '../../styles/mixins';
</style>
