<script lang="ts">
    import Button from "../lib/components/Button.svelte";

    export const { type }: { type: string } = $props()
</script>

<button>
    <img src="" alt="back" />
</button>

<form action="">
    <label for="email">Email</label>
    <input type="email" name="email" id="email" />

    <label for="password">Password</label>
    <input type="password" name="password" id="password" />

    <Button title="Submit" type="secondary" />
</form>