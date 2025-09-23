import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { UserAccounts } from "$lib/types/userAccounts";

export const load: PageServerLoad = async ({ fetch }) => {
    // TODO: Check if a user is logged in already

    // If not logged in
    // redirect(308, "/account")

    // Skips the logged-in-check and searches for user in database instead (for testing)
    const file = await fetch("/src/lib/server/database/user-accounts.json")
    const data = await file.json()

    const userAccounts: UserAccounts = data.userAccounts

    // If logged in
    redirect(308, `/app/${userAccounts[0].username}`)
};