import React, {useContext}from 'react'
import './Payment.css'
import LayOut from "../../LayOut/LayOut";
import { DataContext } from '../../DataProvider/DataProvider';

function Payment() {
  const [{user, basket}]= useContext (DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <LayOut>
      {/* Header */}
      <div className="payment_header">Checkout {totalItem} items</div>

      {/* Payment method */}
      <section className='payment_method'>

        {/* address */}
        <div className='flex'>
          <h3>Delivery Address</h3>
          <div>
            <div>{user.email}</div>
            <div>123 React Lane</div>
            <div>Berkeley, CA</div>
          </div>
          </div>
        <hr />

        {/* Products */}
        <div></div>
        <hr />

        {/* card form */}
        <div></div>
      </section>
    </LayOut>
  );
}

export default Payment;