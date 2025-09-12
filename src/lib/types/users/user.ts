import type { Transaction } from "./transaction"

export type User = {
    firstname: string,
    lastname: string,
    balance: string,

    transactions: Transaction
}