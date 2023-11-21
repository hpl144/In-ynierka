import React from 'react'
import Parameters from './Parameters'
import { useParametersContext } from '../context/ParametersContext'
const GeneralResult = () => {
  const {water, air, material} = useParametersContext();
  return (
    <div className='App'>
        {water+air}
        <span>{material}</span>
    </div>
  )
}

export default GeneralResult
