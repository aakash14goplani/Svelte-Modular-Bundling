<script lang="ts">
  import SocialIcons from './SocialIcons.svelte';
</script>

<footer>
  <div class="copyright">All rights reserved.</div>
  <div class="social">
    <SocialIcons />
  </div>
</footer>

<style lang="scss">
  footer {
    display: flex;
    width: 100%;
    flex-direction: column;

    .copyright {
      display: flex;
      justify-content: center;
    }

    .social {
      display: flex;
      justify-content: center;
    }
  }

  @media screen and (min-width: 720px) {
    footer {
      flex-direction: row;
      width: 90%;
      justify-content: space-evenly;
      align-items: center;
    }
  }
</style>
