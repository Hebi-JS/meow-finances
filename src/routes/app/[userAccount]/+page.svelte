<script lang="ts">
    import type { PaymentAccounts } from "$lib/types/paymentAccounts";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props()

    // Workaround for having at least some type safety 
    const paymentAccounts: PaymentAccounts = data.paymentAccounts
</script>

<div class="grid grid-rows-[auto_minmax(0,1fr)_auto] h-svh p-4">
    <header class="flex justify-between items-center px-2 pb-6 shadow-gray-800">
        <h1 class="text-3xl tracking-wide font-bold">Meow Finances</h1>

        <a href="/settings" tabindex="-1">
            <button class="flex flex-col justify-center items-center rounded-full w-16 h-16 text-sm hover:outline-2 hover:outline-gray-600 focus:outline-2 focus:outline-gray-400">
                <img class="w-8 h-8" src="/icons/cog-icon.svg" alt="Cog Icon" />
                <span>Settings</span>
            </button>
        </a>
    </header>

    <main class="contents">
        <section class="flex flex-col-reverse gap-4 rounded-lg p-2 overflow-y-scroll focus:outline-2 focus:outline-gray-400">
            {#each paymentAccounts as paymentAccount}
                <a href="/app/{paymentAccount.name.toLowerCase()}" tabindex="-1">
                    <button class="flex flex-col justify-center rounded-xl py-2 w-full hover:outline-2 hover:outline-gray-600 focus:outline-2 focus:outline-gray-400">
                        <h2>{paymentAccount.name}</h2>
                        <p class="text-red-400">{paymentAccount.balance}</p>
                    </button>
                </a>
            {/each}
        </section>

        <section class="grid grid-cols-2 gap-2 pt-6 px-2 pb-2">
            <button class="flex justify-center items-center gap-2 py-2 rounded-lg bg-gray-700 hover:outline-2 hover:outline-gray-600 focus:outline-2 focus:outline-gray-400">
                <img class="w-4 h-4" src="/icons/pencil-icon.svg" alt="Pencil Icon" />
                <span>Edit</span>
            </button>
            
            <button class="flex justify-center py-2 rounded-lg bg-gray-700 hover:outline-2 hover:outline-gray-600 focus:outline-2 focus:outline-gray-400">Open</button>

            <button class="flex justify-center items-center gap-2 col-span-2 py-2 rounded-lg bg-green-700 hover:outline-2 hover:outline-green-600 focus:outline-2 focus:outline-green-400">
                <img class="w-4 h-4" src="/icons/plus-icon.svg" alt="Plus Icon" />
                <span>New</span>
            </button>
        </section>
    </main>
</div>