<script lang="ts">
  import UserChildOne from "./UserChildOne.svelte";
  import UserChildTwo from "./UserChildTwo.svelte";
</script>

<div class="user__a">
  <span class="text">
    User Info goes here
  </span>
  <UserChildOne />
  <UserChildTwo />
</div>

<style lang="scss">
  .user__a {
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