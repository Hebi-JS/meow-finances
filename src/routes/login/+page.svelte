<script lang="ts">
    import Button from "../lib/components/Button.svelte";
    import { pageStatus } from "../lib/stores/login-page";
    import LoginForm from "./LoginForm.svelte";
</script>

<svelte:head>
    <title>Snaids!</title>
</svelte:head>

<main class="flex flex-col gap-2 justify-center items-center h-svh bg-gray-900 text-gray-100">
    <!----------- Landing Page ----------->
    {#if $pageStatus === "account"}
        <h1 class="mb-16 text-5xl text-bold tracking-wider">Account</h1>

        <Button title="Login" type="secondary" />
        <Button title="Register" type="secondary" />
    {/if}

    <!----------- Login Page ----------->
    {#if $pageStatus === "login"}
        <LoginForm />
    {/if}

    <!----------- Registration Page ----------->
    {#if $pageStatus === "registration"}
        <LoginForm type="registration" />
    {/if}
</main>

<!-- Necessary. Don't ask why. -->
<style lang="postcss">
    @reference "tailwindcss";
</style>        