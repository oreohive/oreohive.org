<!-- src/routes/error-pages/404/+page.svelte -->

<!-- i'm sure there must be a more elegant way to do this but it'll do for now lmao
beats the previous solution of literally redirecting to https://youtu.be/dQw4w9WgXcQ, which was hardcoded 
skull emoji moment -->

<script>
    function navigateToHome() {
        window.location.href = 'https://www.oreohive.org';
    }
</script>

<div class="container">
  <div class="centre-container">
    <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">
      <img
        src="https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif"
        alt="rickrolled"
      />
    </a>
    <h1>404 - page not found... yet!!!</h1>
    <p>oops, sorry!! the page you're looking for doesn't exist yet.</p>
    <p>
      this website is still in its super early pages; if you got here from
      clicking one of our buttons, please report this to us! we'd appreciate it
      :))
    </p>
    <h2>
      we have yet to build everything out; we appreciate your patience as we
      work hard!
    </h2>
    <p>- the bees</p>
    <button on:click={navigateToHome}>go home!</button>

    
  </div>
</div>

<style>
  .centre-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 0px;
  }
</style>
