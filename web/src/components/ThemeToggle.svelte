<!-- src/components/ThemeToggle.svelte -->

<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment'; // import browser check

  let isDark = false; // tracks if dark mode is active

  /* function to toggle dark mode */
  function toggleDark() {
      isDark = !isDark;

      if (browser) {
          document.documentElement.classList.toggle("dark", isDark);
          localStorage.setItem("theme", isDark ? "dark" : "light");
      }
  }

  // check if user has stored theme pref when component mounts
  onMount(() => {
      if (!browser) return; // return if not in browser

      const storedTheme = localStorage.getItem("theme");
      isDark = storedTheme === "dark";

      document.documentElement.classList.toggle("dark", isDark);
  });
</script>

<button on:click={toggleDark}>
  {isDark ? "light mode" : "dark mode"}
</button>
