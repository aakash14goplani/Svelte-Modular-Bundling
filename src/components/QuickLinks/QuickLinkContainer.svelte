<script lang="ts">
  import QuickLink from "./QuickLink.svelte";
</script>

<div class="links__a">
  <span class="text">
    Quick Links
  </span>
  <QuickLink />
</div>

<style lang="scss">
  .links__a {
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    padding: 1rem;
    margin: 1rem;
    
      .text {
        font-size: 1.6rem;
        color: red;
      }
  }
</style>