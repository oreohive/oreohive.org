<script>
        import { enhance } from '$app/forms';
        import { browser } from '$app/environment';

        function accept_locally() {
                if (browser) {
                        localStorage.setItem('accepted_terms', 'true');
                }
        }

        export const prerender = false;
</script>

<p>oreohive.org/onboarding</p>
<h1>welcome to oreohive.org</h1>

<form method="post" action="?/accept" use:enhance on:submit={accept_locally}>
        <button type="submit" name="accept">
                i accept the oreohive organisation's terms & ethics of use
        </button>
</form>
<p>nb! you may need to review and accept updates in the future.</p>
