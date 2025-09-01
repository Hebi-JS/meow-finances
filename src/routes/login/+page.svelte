<script lang="ts">
    import Button from "../lib/components/Button.svelte";
</script>

<svelte:head>
    <title>Aids!</title>
</svelte:head>

<main class="flex flex-col gap-2 justify-center items-center h-svh bg-gray-900 text-gray-100">
    <h1 class="mb-8 text-5xl text-bold tracking-wider">Account</h1>

    <Button title="Login" color="secondary" />
    <Button title="Register" color="accent" />
</main>

<style lang="postcss">
    @reference "tailwindcss";
</style>