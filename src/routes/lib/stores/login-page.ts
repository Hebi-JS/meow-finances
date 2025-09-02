import { writable } from "svelte/store";

let pageStatus = writable("account")

export { pageStatus }