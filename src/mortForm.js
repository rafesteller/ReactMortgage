import React from 'react';
import { monthCost, amortization_table} from './mortgageMath';
import { GraphMort } from './graphMort';
import { TableMort } from './tableMort';


export class MortForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {principal: 214544,
                      interest: 3.5,
                      years: 30,
                      submitted: false,
                      month: 0,
                      mort_tables: [],
                      descriptions: [],
                      graphYears: 5,
                    };
        this.handlePrincipal = this.handlePrincipal.bind(this);
        this.handleInterest = this.handleInterest.bind(this);
        this.handleYears = this.handleYears.bind(this);
        this.handleGraph = this.handleGraph.bind(this);
        this.handleGraphYears = this.handleGraphYears.bind(this);


    }

    handlePrincipal(event) {
        this.setState({principal: Number(event.target.value)});
    }

    handleInterest(event) {
        this.setState({interest: event.target.value});
    }

    handleYears(event) {
        this.setState({years: event.target.value});
    }

    handleGraphYears(event) {
        this.setState({graphYears: event.target.value})
    }

    handleGraph(event) {
        //console.log(this.state.interest)
        //console.log(this.state.years)
        let month_int = this.state.interest * .01 / 12;
        let due_monthly = monthCost(this.state.principal, month_int, this.state.years * 12)
        let mort_table = amortization_table(due_monthly, this.state.principal, month_int)
        let mort_tables = this.state.mort_tables.slice()
        mort_tables.push(mort_table)

        let description = "principal: " + this.state.principal + " Interest: " + this.state.interest + " Years: " + this.state.years
        let descriptions = this.state.descriptions.slice();
        descriptions.push(description)
        this.setState(
            { month: due_monthly,
              mort_tables: mort_tables,
              descriptions: descriptions,
            }
        );

        this.setState({submitted: true});
        console.log("getting graphs")

        event.preventDefault();
    }


    getGraph() {
        if (this.state.submitted) {
            return (
                <div>
                    {["tot_cost", "tot_int", "tot_mort"].map((row) => {
                        return (

                            <GraphMort 
                                mortTables={this.state.mort_tables}
                                descriptions={this.state.descriptions}
                                graphYears={this.state.graphYears}
                                dataKey={row}
                            />

                        );
                    })}
                    
                </div>
            )
        } else {
            return (
            <a>
                waiting for input
            </a>
            )
        }

    }


    getTable() {
        if (this.state.submitted) {
            return (
                <div>
                    {["tot_cost", "tot_int", "tot_mort"].map((row) => {
                        return (

                            <TableMort
                                mortTables={this.state.mort_tables}
                                descriptions={this.state.descriptions}
                                tableRows={this.state.graphYears}
                                dataKey={row}
                            />

                        );
                    })}
                    
                </div>
            )
        } else {
            return (
            <a>
            </a>
            )
        }

    }

    
    

    render() {
        return (
          <div>
            <form onSubmit={this.handleGraph}>
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
                <label>
                    Years to graph:
                    <input type="text" value={this.state.graphYears} onChange={this.handleGraphYears} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div>
                {this.getGraph()}
            </div>
            <div>
                {this.getTable()}
            </div>
          </div>
        );
    }

}



