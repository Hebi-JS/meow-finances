<script lang="ts"></script>

<form class="flex flex-col justify-center gap-4 px-8 h-svh text-2xl" action="POST">
    <div class="flex justify-between items-center">
        <label class="min-w-44" for="email">Email</label>
        <input
            class="p-1 rounded-lg w-full bg-gray-800 focus:outline-2 focus:outline-gray-600"
            type="email"
            id="email"
            name="email"
            required
        />
    </div>

    <div class="flex justify-between items-center">
        <label class="min-w-44" for="password">Password</label>
        <input
            class="p-1 rounded-lg w-full bg-gray-800 focus:outline-2 focus:outline-gray-600"
            type="password"
            id="password"
            name="password"
            required
        />
    </div>

    <div class="flex justify-between items-center">
        <label class="min-w-44" for="repeat-password">Repeat Password</label>
        <input
            class="p-1 rounded-lg w-full bg-gray-800 focus:outline-2 focus:outline-gray-600"
            type="password"
            id="repeat-password"
            name="repeat-password"
            required
        />
    </div>

    <!-- If error -->
    <div>
        <p class="text-sm text-red-400">Sorry, but this kinda doesn't work</p>
        <button class="p-2 rounded-xl w-full text-center text-2xl bg-gray-700 focus:outline-2 focus:outline-gray-600" type="submit">Submit</button>
    </div>
</form>