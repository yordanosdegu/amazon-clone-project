import React, { useContext } from "react";
import "./Cart.css";
import LayOut from "../../LayOut/LayOut";
import { DataContext } from "../../DataProvider/DataProvider";
import ProductCard from "../../Product/ProductCard";
import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { Type } from "../../../Utility/actiontype";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total =basket.reduce((amount,item)=>{
   return  item.price * item.amount + amount
  }, 0)

  const increment = (item) => {
    dispatch ({
      type:Type.ADD_TO_BASKET,
      item
     })
  }

  const decrement = (id) => {
    dispatch ({
      type : Type.REMOVE_FROM_BASKEET,
      id
    })
  }


  return (
    <LayOut>
      <section className="container">
        <div className="cart-Container">
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />

          {basket?.length == 0 ? (
            <p>Oops! No Item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className="cart_product">
                  <ProductCard
                    key={i}
                    product={item}
                    renderDesc={true}
                    renderAdd={false}
                    flex={true}
                  />

                  <div className="btn_container">
                    <button className="btn" on onClick={() => increment(item)}>
                      <IoIosArrowUp size={20} />
                    </button>
                    <span>{item.amount}</span>
                    <button className="btn" onClick={() => decrement(item.id)}>
                      <IoIosArrowDown size={20} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className="Subtotal">
            <div>
              <p>Subtotal ({basket?.length}) items</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <samll>This order contains a gift</samll>
            </span>
            <Link to="/payments"> Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
