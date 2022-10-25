<script lang="ts">
  import Footer from "$src/components/Footer/Footer.svelte";
  import Header from "$src/components/Header/Header.svelte";
  import UserInfoContainer from "$src/components/UserInfo/UserInfoContainer.svelte";
  import QuickLinkContainer from "$src/components/QuickLinks/QuickLinkContainer.svelte";
  import TwitterFeed from "$src/components/TwitterFeeds/TwitterFeed.svelte";
</script>

<Header />

<main>
  <slot />

  <aside>
    <div class="user-info">
      <UserInfoContainer />
    </div>
    <div class="quick-links">
      <QuickLinkContainer />
    </div>
    <div class="live-feed">
      <TwitterFeed />
    </div>
  </aside>
</main>

<Footer />

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    margin: 7rem 0;
  }

  @media screen and (min-width: 720px) {
    main {
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>