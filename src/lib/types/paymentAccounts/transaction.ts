export type Transaction = [
    {
        date: string,
        status: "Pending" | "Paid",
        description: string,
        amount: string,
        type: "Transfer" | "Subscription",
    }
]