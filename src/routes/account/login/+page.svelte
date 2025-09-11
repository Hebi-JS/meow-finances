<script lang="ts"></script>

<form action="POST">
    <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />
    </div>

    <div>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required/>
    </div>

    <!-- If error -->
    <p>Sorry, but this kinda doesn't work</p>

    <button type="submit">Submit</button>
</form>