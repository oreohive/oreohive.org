
    <script lang="ts">
        export const prerender = true
        export let data: any
    </script>

    <svelte:head>
        <title>ASUS</title>
    </svelte:head>

    <body>
        <h1>ASUS</h1>
        <p>Try the following IP addresses:</p>
        <ul>
            <li><a href="192.168.1.1">192.168.1.1</a></li>
            <li><a href="192.168.2.1">192.168.2.1</a></li>
            <li><a href="10.10.1.1">10.10.1.1</a></li>
        </ul>
    </body>
