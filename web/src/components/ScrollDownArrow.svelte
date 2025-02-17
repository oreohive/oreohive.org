<!-- src/components/ScrollDownArrow.svelte -->

<!-- attribution: adapted from geekboots.com/css/animated-scroll-down-arrow -->

<section>
  <div>
    <ul id="downArrow">
        <li style="--i:1"></li>
        <li style="--i:2"></li>
        <li style="--i:3"></li>
    </ul>
  </div>

</section>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #292929;
  }

  section {
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
  }

  ul#downArrow {
    position: relative;
    width: 42px;
    display: flex;
    align-items: center;
    flex-flow: column;
  }

  ul#downArrow li {
    list-style: none;
    width: 4px;
    height: 4px;
    background-color: #000000;
    border-radius: 0%;
    margin-bottom: 12px;
    animation: ani 1s infinite ease-in-out;
    animation-delay: calc(0.25s * var(--i));
  }

  ul#downArrow::before,
  ul#downArrow::after {
    position: absolute;
    content: "";
    background-color: #000000;
    width: 31px;
    height: 3px;
    bottom: -16px;
    border-radius: 12px;
  }

  ul#downArrow::before {
    right: 0;
    transform: rotate(-45deg);
    transform-origin: center right;
  }

  ul#downArrow::after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: center left;
  }

  @keyframes ani {
    0% {
      opacity: 0;
      transform: scale(0.75) translateY(-5px);
    }

    50% {
      opacity: 0.5;
      transform: scale(1) translateY(20px);
    }

    100% {
      opacity: 0;
      transform: scale(0.75) translateY(40px);
    }
  }
</style>
