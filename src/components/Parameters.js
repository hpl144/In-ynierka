import React, { useContext, useState } from 'react';
import GeneralResult from './GeneralResult';
import { useParametersContext } from '../context/ParametersContext';
import { Link } from 'react-router-dom';

const Parameters = (props) => {
  const {setWater, setAir, setMaterial} = useParametersContext();

  const handleChange = (event) => {
    setMaterial(event.target.value)
  }

  return (
    <div className='App-background'>
      <h1>Provide parameters</h1>
      <form>
        <label htmlFor="waterInlet">Water inlet temperature: </label><br/>
        <input type="number" name="waterInlet" className='App-input' onChange={(event) => setWater(Number(event.target.value))}/><br/>
        <label htmlFor="airInlet">Air inlet temperature: </label><br/>
        <input type="number" name="airInlet" className='App-input' onChange={(event) => setAir(Number(event.target.value))}/><br/>

        <label htmlFor="material">Choose material</label><br/>
        <select name="material" id="material" className='App-input' onChange={handleChange}>
          <option value="steel">Steel</option>
          <option value="aluminum">Aluminum</option>
          <option value="cooper">Cooper</option>
          <option value="alloy">Alloy</option>
        </select><br/>
        <Link to="/generalresult"><button className="App-calculatebutton" >Calculate</button></Link>
      </form>
    </div>
  );
}

export default Parameters;