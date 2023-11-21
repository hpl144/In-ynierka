import React, { useContext, useState } from 'react';
import GeneralResult from './GeneralResult';
import { useParametersContext } from '../context/ParametersContext';
import { Link } from 'react-router-dom';
import { inputTitlesAirParameters, inputTitlesFinParameters, inputTitlesHeat, inputTitlesTubeParameters } from './constants';
import './paramaters.css'

const Parameters = (props) => {
  const {setWater, setAir, setMaterial} = useParametersContext();

  const handleChange = (event) => {
    setMaterial(event.target.value)
  }

  return (
    <div className='App-background'>
      <div>
        <h3>Heat Exchanger geometrical parameters:</h3>
        {inputTitlesHeat.map((input) => {
          return (
            <div className='input-container'>
              <span>{input.title}</span>
              {input.type === 'select' ? 
              <select></select>: 
              <input type='text'/>}
            </div>
          )
        })}
        <h3>Tube paramaters:</h3>
        {inputTitlesTubeParameters.map((input) => {
          return (
            <div className='input-container'>
              <span>{input.title}</span>
              {input.type === 'select' ? 
              <select></select>: 
              <input type='text'/>}
            </div>
          )
        })}
        <h3>Fins paramaters:</h3>
        {inputTitlesFinParameters.map((input) => {
          return (
            <div className='input-container'>
              <span>{input.title}</span>
              {input.type === 'select' ? 
              <select>
                <option>1</option>
              </select>: 
              <input type='text'/>}
              
            </div>
          )
        })}
        <h3>Air paramaters:</h3>
        {inputTitlesAirParameters.map((input) => {
          return (
            <div className='input-container'>
              <span>{input.title}</span>
              {input.type === 'select' ? 
              <select></select>: 
              <input type='text'/>}
            </div>
          )
        })}
      </div>
      <button type='submit'>Oblicz</button>
    </div>
  );
}

export default Parameters;