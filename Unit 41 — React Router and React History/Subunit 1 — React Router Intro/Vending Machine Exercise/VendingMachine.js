import React from 'react'
import Candy from './Candy'
import { Link } from "react-router-dom";
import Soda from './Soda'
import Chips from './Chips'

function VendingMachine() {
  return (
    <div className='vendingMachine'>
      <h1>Vending Machine</h1>
      <Link to='/candy'><Candy /></Link>
      <Link to='/soda'><Soda /></Link>
      <Link to='/chips'><Chips /></Link>

    </div>
  )
}

export default VendingMachine
