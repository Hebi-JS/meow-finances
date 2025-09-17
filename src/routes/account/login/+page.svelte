<script lang="ts">
    
</script>

<a href="/account" tabindex="-1">
    <button class="flex flex-col justify-center items-center fixed top-8 left-8 w-16 h-16 rounded-full text-sm hover:outline-2 hover:outline-gray-600 focus:outline-2 focus:outline-gray-400">
        <img src="#" alt="Arrow Icon" />
        <span>Back</span>
    </button>
</a>

<form class="flex flex-col justify-center gap-4 p-8 h-svh text-2xl" action="POST">
    <div class="flex justify-between items-center">
        <label for="email">Email</label>
        <input
            class="p-1 rounded-lg w-2/3 bg-gray-800 hover:outline-2 hover:outline-gray-600 focus:outline-2 focus:outline-gray-400"
            type="email"
            id="email"
            name="email"
            required
        />
    </div>

    <div class="flex justify-between items-center">
        <label for="password">Password</label>
        <input
            class="p-1 rounded-lg w-2/3 bg-gray-800 hover:outline-2 hover:outline-gray-600 focus:outline-2 focus:outline-gray-400"
            type="password"
            id="password"
            name="password"
            required
        />
    </div>

    <!-- If error -->
    <div>
        <p class="text-sm text-red-400">Sorry, but this kinda doesn't work</p>
        <button class="p-2 rounded-xl w-full text-center text-2xl bg-gray-700 hover:outline-2 hover:outline-gray-600 focus:outline-2 focus:outline-gray-400" type="submit">Submit</button>
    </div>
</form>