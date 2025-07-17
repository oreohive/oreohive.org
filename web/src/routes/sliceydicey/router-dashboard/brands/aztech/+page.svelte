
    <script lang="ts">
        export const prerender = true
        export let data: any
    </script>

    <svelte:head>
        <title>Aztech</title>
    </svelte:head>

    <body>
        <h1>Aztech</h1>
        <p>Try the following IP addresses:</p>
        <ul>
            <li><a href="192.168.1.1">192.168.1.1</a></li>
            <li><a href="192.168.2.1">192.168.2.1</a></li>
            <li><a href="192.168.1.254">192.186.1.254</a></li>
            <li><a href="192.168.254.254">192.186.254.254</a></li>
        </ul>
    </body>
