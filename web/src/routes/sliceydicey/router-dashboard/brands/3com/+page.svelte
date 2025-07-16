
    <script lang="ts">
        export const prerender = true
        export let data: any
    </script>

    <svelte:head>
        <title>3Com</title>
    </svelte:head>

    <body>
        <h1>3Com</h1>
        <p>Try the following IP addresses:</p>
        <ul>
            <li><a href="192.168.1.1">192.168.1.1</a></li>
            <li><a href="192.168.0.1.10.1">192.168.1.10.1</a></li>
        </ul>
    </body>
