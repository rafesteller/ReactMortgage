import React from 'react';
import { monthCost, amortization_table} from './mortgageMath'

export class RateForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {principal: 214544,
                      interest: 3.5,
                      years: 30,
                      submitted: false,
                      month: 0,
                      mort_table: []
                    };
        this.handlePrincipal = this.handlePrincipal.bind(this);
        this.handleInterest = this.handleInterest.bind(this);
        this.handleYears = this.handleYears.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updatePayment = this.updatePayment.bind(this);


    }

    handlePrincipal(event) {
        this.setState({principal: event.target.value});
    }

    handleInterest(event) {
        this.setState({interest: event.target.value});
    }

    handleYears(event) {
        this.setState({years: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state.interest)
        console.log(this.state.years)
        let month_int = this.state.interest * .01 / 12;
        let due_monthly = monthCost(this.state.principal, month_int, this.state.years * 12)
        let mort_table = amortization_table(due_monthly, this.state.principal, month_int)
        this.setState(
            { month: due_monthly,
              mort_table: mort_table
            }
        );

        this.setState({submitted: true});

    


        event.preventDefault();
    }

    getCost() {
        if (this.state.submitted) {
            let total = this.state.month * this.state.years * 12
            return <h3>Total loan cost is: {total}</h3>
        } else {
            return <h3>Total loan cost is: </h3>
        }
    }

    getAmortizationTable() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Payed</th>
                        <th>Interest</th>
                        <th>Amortization</th>
                        <th>Tot Inter.</th>
                        <th>Tot Amort</th>
                        <th>Tot Cost</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.mort_table.map((row, i) => {
                        return (

                            <TableRow 
                                key = {i}
                                month ={row.month}
                                payed = {row.payed}
                                interest = {row.interest}
                                amortization = {row.amortization}
                                tot_int = {row.tot_int}
                                tot_mort = {row.tot_mort}
                                balance = {row.balance}
                                onChange = {this.updatePayment}
                            />

                        );
                    })}
                </tbody>
            </table>
          );

    }

    updatePayment( payment, month){
        console.log("change")
        console.log( month)
        console.log( payment)
        payment = Number(payment)
        let mort_table = this.state.mort_table.slice(0,month)
        const old_month = this.state.mort_table[month]
        console.log(old_month)
        const new_amort = payment - old_month.interest
        console.log(new_amort)
        console.log("old mort: " + old_month.amortization)
        const new_balance = old_month.balance - (new_amort - old_month.amortization)
        console.log(new_balance)
        const new_mort_tot = old_month.tot_mort + (new_amort - old_month.amortization)
        console.log(mort_table)

        mort_table.push(
            {
                month: month,
                payed: payment,
                interest: old_month.interest,
                amortization: new_amort,
                balance: new_balance,
                tot_int: old_month.tot_int,
                tot_mort: new_mort_tot
            }
        )

        let month_int = this.state.interest * .01 / 12;
        let due_monthly = monthCost(this.state.principal, month_int, this.state.years * 12)
        mort_table = mort_table.concat(
             amortization_table(due_monthly, new_balance, month_int, month + 1,old_month.tot_int ,new_mort_tot)
        )
        this.setState(
            {mort_table: mort_table}
        )


        
    }
    

    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                Principal:
                <input type="text" value={this.state.principal} onChange={this.handlePrincipal} /> 
                </label>
                <label>
                Interest %:
                <input type="text" value={this.state.interest} onChange={this.handleInterest}/>
                </label>
                <label>
                Years:
                <input type="text" value={this.state.years} onChange={this.handleYears} /> 
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div>
                {this.getCost()}
            </div>
            <div>
                {this.getAmortizationTable()}
            </div>
          </div>
        );
    }

}


class TableRow extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            payed: this.props.payed,
        }
        this.handlePay = this.handlePay.bind(this);
        this.update = this.update.bind(this);
    }

    handlePay(event) {
        this.setState(
            {payed: event.target.value}
        )
    }

    update(event) {
        this.props.onChange(event.target.value, this.props.month)
    }


    render() {
        let month = this.props.month
        let interest = this.props.interest
        let amortization = this.props.amortization
        let tot_int = this.props.tot_int
        let tot_mort = this.props.tot_mort
        let balance = this.props.balance
        return (
        <tr>
            <td>{month}</td>
            <td>
                <input row={month} value={this.state.payed} onChange={this.handlePay} onBlur={this.update}/>
            </td>
            <td>{interest}</td>
            <td>{amortization}</td>
            <td>{tot_int}</td>
            <td>{tot_mort}</td>
            <td>{tot_mort + tot_int}</td>
            <td>{balance}</td>
        </tr>
        )
    }
}


