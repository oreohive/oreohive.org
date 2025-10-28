<!-- src/components/KofiPanel.svelte -->

<script lang="ts">
        import Panel from "$components/Panel.svelte";
</script>

<div class="panel-container">
        <Panel
                panel_width="190px;"
                colour="#2b313b"
                href="https://ko-fi.com/oreohive"
                img_url=""
                desc="ko-fi"
        >
                <!-- 'img=url=""' removes default value of /logo.webp -->
                <iframe
                        src="/widgets/ko-fi-widget.html"
                        width="200"
                        height="56"
                        style="position: absolute; border-style: none; border-radius: 12px; margin: 0px; gap: 0px; padding: 0px; down: 32px; "
                        title="ko-fi.com/oreohive"
                >
                </iframe>
        </Panel>
</div>
