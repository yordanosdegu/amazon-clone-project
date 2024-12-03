import React, { useContext } from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import LowerHeader from "../LowerHeader";
import { MdLocationPin } from "react-icons/md";
import { DataContext } from "../DataProvider/DataProvider";
import { Link } from "react-router-dom";
// import LowerHeader from "../LowerHeader";

import { auth } from "../../Utility/firebase";


function Header() {

  const[{user, basket}, dispatch]=useContext(DataContext)
  const totalItem = basket?.reduce((amount,item)=> {
    return item.amount + amount
  },0)




  return (
    <section className="fixed">
      <section>
        <section className="">
          <div className="header_container">
            {/* logo */}
            <div className="logo_container">
              <a href="/">
                <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="Amazon Logo"
                  className="logo"
                />
              </a>
            </div>

            <div className="delivery">
              {/* delivery */}
              <span>
                <MdLocationPin />
              </span>

              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>

            <div className="search">
              {/* search */}
              <select name="" id="">
                <option value="All"></option>
              </select>

              <input type="text" />
              <FaSearch size={25} />
            </div>

            {/* right side link */}
            <div>
              <div className="order_container">
                <a href="" className="language">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/1200px-Flag_of_the_United_States.png"
                    alt="US Flag"
                    className="flag"
                  />
                  <select name="" id="">
                    <option value="">EN</option>
                  </select>
                </a>

                {/* three components */}
                <Link to={!user && "/auth"}>
                  <div>
                    {user ? (
                      <>
                        <p>Hello {user?.email?.split("@")[0]}</p>
                        <span onClick={()=>auth.signOut()}>Sign Out</span>
                      </>
                    ) : (
                      <>
                        <p>Hello, Sign In</p>
                        <span>Account & Lists</span>
                      </>
                    )}
                  </div>
                </Link>

                {/* orders */}
                <a href="/orders">
                  <p>Returns</p>
                  <span>& Orders</span>
                </a>
              </div>

              {/* cart */}
              {/* <a href="/cart" className="cart">
                <FaCartShopping size={35} />
                <span>{totalItem}</span>
              </a> */}
              <Link to="/cart" className="cart">
                <FaCartShopping size={35} />
                <span>{totalItem}</span>
              </Link>
            </div>
          </div>
        </section>
      </section>

      <LowerHeader />
    </section>
  );
}

export default Header;
