<script lang="ts">
    let { children } = $props();
</script>

<div>
    <header>
        <h1>Meow Finances</h1>

        <div>
            <img src="#" alt="Cog Icon" />
            <span>Settings</span>
        </div>
    </header>

    <main>
        {@render children()}

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