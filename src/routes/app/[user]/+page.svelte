<script lang="ts">
    import type { Users } from "$lib/types/users";
    import type { PageProps } from "../$types";

    let { data }: PageProps = $props()

    // Workaround for having at least some type safety 
    const users: Users = data.users
</script>

<div class="grid grid-rows-[auto_minmax(0,1fr)_auto] h-svh p-4">
    <header class="flex justify-between items-center pb-8 shadow-gray-800">
        <h1 class="text-3xl tracking-wide font-bold">Meow Finances</h1>

        <a href="/app/settings" tabindex="-1">
            <button class="rounded-full w-16 h-16 text-sm hover:outline-2 hover:outline-gray-600 focus:outline-2 focus:outline-gray-400">
                <img src="#" alt="Cog Icon" />
                <span>Settings</span>
            </button>
        </a>
    </header>

    <main class="contents">
        <section class="flex flex-col-reverse gap-4 p-2 overflow-y-scroll">
            {#each users as user}
                <a href="/app/{user.firstname}-{user.lastname}" tabindex="-1">
                    <button class="flex flex-col justify-center rounded-xl py-2 w-full hover:outline-2 hover:outline-gray-600 focus:outline-2 focus:outline-gray-400">
                        <h2 class="font-bold">{user.firstname} {user.lastname}</h2>
                        <p class="text-red-400">{user.balance}</p>
                    </button>
                </a>
            {/each}
        </section>

        <section class="grid grid-cols-2 gap-2 pt-8 px-4 pb-4">
            <button class="flex justify-center py-2 rounded-lg bg-gray-700 hover:outline-2 hover:outline-gray-600 focus:outline-2 focus:outline-gray-400">
                <img src="#" alt="Pencil Icon" />
                <span>Edit</span>
            </button>
            
            <button class="flex justify-center py-2 rounded-lg bg-gray-700 hover:outline-2 hover:outline-gray-600 focus:outline-2 focus:outline-gray-400">Open</button>

            <button class="flex justify-center col-span-2 py-2 rounded-lg bg-green-700 hover:outline-2 hover:outline-green-600 focus:outline-2 focus:outline-green-400">
                <img src="#" alt="Plus Icon" />
                <span>New</span>
            </button>
        </section>
    </main>
</div>