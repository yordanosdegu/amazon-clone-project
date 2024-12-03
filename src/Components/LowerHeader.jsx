import React from 'react'
import { TiThMenu } from "react-icons/ti";

function LowerHeader () {
  return (
    <div className="lower_container">
      <ul>
        <li className='menu_tag'>
          <TiThMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Consumer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;

