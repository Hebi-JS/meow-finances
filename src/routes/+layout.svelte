<script lang="ts">
    let { children } = $props();
    
    import "../app.css";
</script>

<div class="bg-gray-900 text-gray-100">
    {@render children()}
</div>
