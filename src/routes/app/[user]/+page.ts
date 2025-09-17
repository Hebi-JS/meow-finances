import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const file = await fetch("/src/lib/server/database/users.json")
    const data = await file.json()

    return data
};