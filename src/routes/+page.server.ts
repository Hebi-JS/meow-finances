import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    // TODO: If not logged in already
    redirect(308, "/account")

    // TODO: If logged in as user
    // redirect(308, "/app/hebi-js")
};