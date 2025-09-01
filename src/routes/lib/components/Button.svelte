<script lang="ts">
    export const { color, title } = $props()
</script>

{#if color === "secondary"}
<button class="rounded-lg p-2 w-4/5 max-w-72 bg-gray-700 text-2xl tracking-tight active:bg-gray-800 focus:outline-2 focus:outline-gray-500">{title}</button>
{/if}

{#if color === "accent"}
<button class="rounded-lg p-2 w-4/5 max-w-72 bg-green-900 text-2xl tracking-tight active:bg-green-800 focus:outline-2 focus:outline-green-500">{title}</button>
{/if}