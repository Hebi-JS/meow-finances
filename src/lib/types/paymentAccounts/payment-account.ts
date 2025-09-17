import type { Transaction } from "./transaction"

export type PaymentAccount = {
    name: string,
    balance: string,

    transactions: Array<Transaction>
}