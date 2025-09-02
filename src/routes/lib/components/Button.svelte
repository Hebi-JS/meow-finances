<script lang="ts">
    import { pageStatus } from "../stores/login-page";

    type PageStatus = "account" | "login" | "registration"

    export const { title, type }: {
        title: string,
        type: string
    } = $props()

    const setPageStatus = (status: PageStatus): void => {
        $pageStatus = status
    }
</script>

{#if type === "secondary"}
<button class="rounded-lg p-2 w-4/5 max-w-72 bg-gray-700 text-2xl tracking-tight active:bg-gray-800 focus:outline-2 focus:outline-gray-500" onclick={() => { setPageStatus("login") }}>{title}</button>
{/if}

{#if type === "accent"}
<button class="rounded-lg p-2 w-4/5 max-w-72 bg-green-800 text-2xl tracking-tight active:bg-green-900 focus:outline-2 focus:outline-green-600">{title}</button>
{/if} 