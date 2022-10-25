<script lang="ts">
  import MegaNavigation from "./MegaNavigation.svelte";
  import GlobalSearch from "./GlobalSearch.svelte";
</script>

<header>
  <nav>
    <MegaNavigation mode="header" />
  </nav>
  <div class="global-search">
    <GlobalSearch />
  </div>
</header>

<style lang="scss">
  header {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 1rem;

    nav {
      display: flex;
      border-bottom: 1px solid rgba(255, 62, 0, 0.1);
      font-weight: 500;
      padding: 0 1rem;
    }

    .global-search {
      margin-top: 1rem;
    }
  }

  @media screen and (min-width: 720px) {
    header {
      width: 90%;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .global-search {
        margin-top: 0;
      }
    }
  }
</style>