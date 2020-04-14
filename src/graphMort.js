import React from 'react';
//import { monthCost, amortization_table} from './mortgageMath'

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';


const colors = ['black', 'blue', 'fuchsia', 'gray', 'green', 
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
'silver', 'teal', 'white', 'yellow']

export function GraphMort(props){
  console.log(props)
  const mortTables = props.mortTables
  const descriptions = props.descriptions
  const graphSlots = 12 * props.graphYears
  const dataKey = props.dataKey


  //getting max number of month
  let max_month = 0;
  for (let step = 0; step < mortTables.length; step++) {
    if (max_month < mortTables[step].length) {
      max_month = mortTables[step].length
    }
  }
  
  let graphData = []
  //formatting the data for graph
  for (let step = 0; step < mortTables.length; step++){
    if (step === 0) {
      for (let month = 0; month < graphSlots; month++) {
        let data_point = {};
        data_point[descriptions[step]] = mortTables[step][month][dataKey];
        graphData.push(data_point);
      }
      
    } else {
      for (let month = 0; month < graphSlots; month++) {
        graphData[month][descriptions[step]] = mortTables[step][month][dataKey];

      }
    }
  }
  console.log(graphData)
  return (
    <div>
      <h3>The {dataKey} for {graphSlots / 12} years</h3>
      <LineChart width={730} height={250} data={graphData}
           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              
        <XAxis />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="bottom" height={36}/>
        {descriptions.map((row, i) => {
                        return (

                          <Line type="monotone" dataKey={row} fillOpacity={1} stroke={colors[i]}/>


                        );
                    })}
      </LineChart>

    </div>

        
  );
}

