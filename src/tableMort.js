import React from 'react';


export function TableMort(props){
  console.log(props)
  const mortTables = props.mortTables
  const descriptions = props.descriptions
  const maxRows = props.tableRows
  const dataKey = props.dataKey
  const rowInterval = 12


  
  let tableData = []
  //formatting the data for graph
  for (let step = 0; step < mortTables.length; step++){
    if (step === 0) {
      for (let row = 0; row <= maxRows; row++) {
        let data_point = {};
        data_point[descriptions[step]] = mortTables[step][row * rowInterval][dataKey];
        tableData.push(data_point);
      }
      
    } else {
      for (let row = 0; row <= maxRows; row++) {
        tableData[row][descriptions[step]] = mortTables[step][row * rowInterval][dataKey];

      }
    }
  }
  console.log(tableData)
  return (
    <div>
      <h3>{dataKey}</h3>
       <table className="table table-bordered">
                <thead>
                    <tr>
                      <th>Interval</th>
                      {
                        descriptions.map( (description) => {
                          return (
                            <th>{description}</th>
                          )
                        })
                      }
                    </tr>
                </thead>
                <tbody>
                  {
                    tableData.map( (row, index) => {
                      return (
                        <tr>
                          <td>{index*rowInterval + "months"}</td>
                          {
                            descriptions.map( (description) => {
                              return (
                                <td>
                                  {row[description]}
                                </td>
                              )
                              
                            })
                          }
                        </tr>
                      )
                    })

                  }
                </tbody>
            </table>

    </div>

        
  );
}

