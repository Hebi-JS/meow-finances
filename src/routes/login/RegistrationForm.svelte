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

    <label for="repeat-password">Repeat Password</label>
    <input type="password" name="repeat-password" id="repeat-password" />

    <Button title="Submit" type="secondary" />
</form>