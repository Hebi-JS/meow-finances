<script lang="ts">
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props()
</script>

<div class="grid grid-rows-[auto_minmax(0,1fr)_auto] h-svh p-4">
    <header class="flex justify-end items-center px-2 pb-6 shadow-gray-800">
        <a href="/settings" tabindex="-1">
            <button class="flex flex-col justify-center items-center rounded-full w-16 h-16 text-sm hover:outline-2 hover:outline-gray-600 focus:outline-2 focus:outline-gray-400">
                <img class="w-8 h-8" src="/icons/cog-icon.svg" alt="Cog Icon" />
                <span>Settings</span>
            </button>
        </a>
    </header>

    <main class="contents">
        <section class="flex flex-col-reverse gap-4 rounded-lg p-2 overflow-y-scroll focus:outline-2 focus:outline-gray-400">
            
        </section>

        <section class="flex justify-between px-2 font-bold">
            <h2 class="tracking-wide">Balance:</h2>
            <span class="text-red-600">0,00€</span>
        </section>

        <section class="grid grid-cols-2 gap-2 pt-6 px-2 pb-2">
            <button class="flex justify-center items-center gap-2 py-2 rounded-lg bg-gray-700 hover:outline-2 hover:outline-gray-600 focus:outline-2 focus:outline-gray-400">
                <img class="w-4 h-4" src="/icons/pencil-icon.svg" alt="Pencil Icon" />
                <span>Edit</span>
            </button>
            
            <button class="flex justify-center items-center gap-2 py-2 rounded-lg bg-red-600 hover:outline-2 hover:outline-red-500 focus:outline-2 focus:outline-red-400">
                <img class="w-4 h-4" src="/icons/bin-icon.svg" alt="Plus Icon" />
                <span>Delete</span>
            </button>

            <button class="flex justify-center items-center gap-2 col-span-2 py-2 rounded-lg bg-green-700 hover:outline-2 hover:outline-green-600 focus:outline-2 focus:outline-green-400">
                <img class="w-4 h-4" src="/icons/plus-icon.svg" alt="Plus Icon" />
                <span>New</span>
            </button>
        </section>
    </main>
</div>