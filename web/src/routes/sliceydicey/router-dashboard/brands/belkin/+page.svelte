
    <script lang="ts">
        export const prerender = true
        export let data: any
    </script>

    <svelte:head>
        <title>Belkin</title>
    </svelte:head>

    <body>
        <h1>Belkin</h1>
        <ul>
            <li><a href="192.168.1.1">192.168.1.1</a></li>
            <li><a href="192.168.2.1">192.168.2.1</a></li>
            <li><a href="10.0.0.2">10.0.0.2</a></li>
            <li><a href="10.1.1.1">10.1.1.1</a></li>
        </ul>
    </body>
