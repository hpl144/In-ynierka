import React from 'react'
import Parameters from './Parameters'
import { useParametersContext } from '../context/ParametersContext'
import { tableColumns, tableHeaders } from './constants';
const GeneralResult = () => {
  const {water, air, material} = useParametersContext();
  return (
    <div className='App'>
        <table>
          <th>

          </th>
          {tableColumns.map((col) => {
            return (
            <tr>{tableHeaders.map((header) => {
            return <td>{header}</td>
          })}</tr>
            )
          })}
          
          
        </table>
    </div>
  )
}

export default GeneralResult
