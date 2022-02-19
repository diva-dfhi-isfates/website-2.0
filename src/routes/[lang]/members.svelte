<script context="module" lang="ts">
  import { locale, _ } from "svelte-i18n";
  import { get } from "svelte/store";

  import { getDivaMembers } from "$lib/api";
  import { ROLES } from "$lib/constants";

  const getSortedMembersByRole = (members) => {
    return members.sort((a, b) => {
      const aOrderIndex = ROLES.indexOf(a.role)
      const bOrderIndex = ROLES.indexOf(b.role)

      return aOrderIndex - bOrderIndex
    })
  }

  export async function load({ url }) { // keep unused url to trigger data reload when language change
    let members = await getDivaMembers(get(locale));

    members = getSortedMembersByRole(members)

    return {
			props: {
				members
			}
		};
	}
</script>

<script>
  import LeafCrownIcon from '$lib/components/icons/LeafCrown.svelte'

  export let members
</script>

<h1>{$_('members.page_title')}</h1>

<ul class="mt-5 row row-cols-1 row-cols-md-3 g-4 list-unstyled">
  {#each members as member}
    <li class="col" data-aos="fade-up">
      <div class="h-100 d-flex flex-column align-items-center">
        <div class="position-relative avatar">
          <img src={member.profile?.url} class="card-img-top rounded-pill" alt="">
          <LeafCrownIcon />          
        </div>
        <div class="card-body mt-3">
          <h2 class="card-title text-center fs-5">
            <span class="badge rounded-pill text-light bg-primary">{$_(`members.roles.${member.role}`)}</span>
          </h2>
          <p class="text-center fw-bold">
            {member.firstname} {member.lastname}
          </p>
          <p class="card-text p-2 lh-sm border rounded">
            {@html member.description.html}
          </p>
        </div>
      </div>
    </li>
  {/each}
</ul>


<style>
  img {
    width: 150px;
    height: 150px;
  }

  .card-text {
    max-height: 7rem;
    overflow: scroll;
  }

  .card-text :global(p) {
    margin: 0;
  }

  .avatar :global(svg) {
    position: absolute;
    width: 130%;
    height: 100%;
    top: 10%;
    left: -15%;
    z-index: -1;
  }
</style>