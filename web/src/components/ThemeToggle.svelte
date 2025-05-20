<!-- src/components/ThemeToggle.svelte -->

<!-- this component is merely used for the theme toggle switch ('light'/'dark')
that appears in the navbar -->

<script>
  import { onMount } from "svelte";
  import { browser } from "$app/environment"; // import browser check (checks if in browser)

  let isDark = true; // tracks if dark mode is active

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
      if (!browser) return; // return (stop) if not in browser

      const storedTheme = localStorage.getItem("theme");
      isDark = storedTheme === "dark";

      document.documentElement.classList.toggle("dark", isDark);
  });
</script>

<button on:click={toggleDark}>
  {isDark ? "light mode" : "dark mode"}
</button>

<style>
  button {
    margin: 0px;
    gap: 0px;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    text-decoration: none;
    background-color: rgba(255, 176, 176, 0.075);
    border-width: 2x !important;
    border-color: rgba(0, 0, 0, 0.25) !important;
    border-style: solid !important;
    color: #beb7cc;
    border-radius: 6px;
  }
</style>