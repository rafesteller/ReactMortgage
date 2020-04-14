export function monthCost(p, i, n) {
    console.log("principal is");
    console.log(p)
    console.log("interest per month is ")
    console.log(i)
    console.log("months: ")
    console.log(n)

    return (p * ( i* Math.pow(1 + i, n) ) / (Math.pow(1 + i, n) - 1) )

}

export function amortization_table(due, balance, interest, ...args) {
    let mort_table = []
        console.log(balance)
        console.log(due)
        due = Math.round(due)
        let month = 0
        console.log(args)
        let tot_int = 0;
        let tot_mort = 0;
        if (args.length === 3) {
            month = args[0]
            tot_int = args[1]
            tot_mort = args[2]
        }
        
        while (balance > 0 && month < 500) {
            let m_interest = Math.round(balance * interest)
            let m_amortization = due - m_interest
            balance = balance - m_amortization
            tot_mort += m_amortization
            tot_int += m_interest
            mort_table.push(
                {
                    month: month,
                    payed: due,
                    interest: m_interest,
                    amortization: m_amortization,
                    balance: balance,
                    tot_int: tot_int,
                    tot_mort: tot_mort,
                    tot_cost: tot_mort + tot_int
                }
            )
            /*
            if ((month % 12) === 0) {
                console.log(
                    {
                        month: month,
                        payed: due,
                        interest: m_interest,
                        amortization: m_amortization,
                        balance: balance,
                    }  
                )
            }
            */
            month = month + 1
        }

    return mort_table
}