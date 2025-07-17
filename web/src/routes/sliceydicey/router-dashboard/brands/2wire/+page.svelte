
    <script lang="ts">
        export const prerender = true
        export let data: any
    </script>

    <svelte:head>
        <title>2Wire</title>
    </svelte:head>

    <body>
        <h1>2Wire</h1>
        <p>Try the following IP addresses:</p>
        <ul>
            <li><a href="192.168.1.1">192.168.1.1</a></li>
            <li><a href="192.168.0.1">192.168.0.1</a></li>
            <li><a href="192.168.1.254">192.168.1.254</a></li>
            <li><a href="10.0.0.138">10.0.0.138</a></li>
        </ul>
    </body>
