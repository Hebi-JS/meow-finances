<script lang="ts">
    import type { Users } from "$lib/types/users";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props()

    // Workaround for having at least some type safety 
    const users: Users = data.users
</script>

<div class="h-svh">
    <header>
        <h1>Meow Finances</h1>

        <button>
            <img src="#" alt="Cog Icon" />
            <span>Settings</span>
        </button>
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