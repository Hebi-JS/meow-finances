<script lang="ts">
    import type { Users } from "$lib/types/users";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props()

    // Workaround for having at least some type safety 
    const users: Users = data.users
</script>

<div class="h-svh p-4">
    <header class="flex justify-between items-center">
        <h1 class="text-3xl font-bold">Meow Finances</h1>

        <a href="/app/settings" tabindex="-1">
            <button class="flex flex-col justify-center items-center w-16 h-16 rounded-full text-sm transition-all hover:bg-gray-800 focus:outline-2 focus:outline-gray-600">
                <img src="#" alt="Cog Icon" />
                <span>Settings</span>
            </button>
        </a>
    </header>

    <main>
        {#each users as user}
            <a href="/app/{user.firstname}-{user.lastname}">
                <button tabindex="0">
                    <h2>{user.firstname} {user.lastname}</h2>
                    <p>{user.balance}</p>
                </button>
            </a>
        {/each}

        <div>
            <button>
                <img src="#" alt="Pencil Icon" />
                <span>Edit</span>
            </button>
            
            <button>Open</button>

            <button>
                <img src="#" alt="Plus Icon" />
                <span>New</span>
            </button>
        </div>
    </main>
</div>