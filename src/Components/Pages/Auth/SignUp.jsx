import React, { useState, useContext } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../Utility/firebase";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import {ClipLoader} from "react-spinners";
import { DataContext } from "../../DataProvider/DataProvider";
import { Type } from "../../../Utility/actiontype";


function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const [loading, setLoading] = useState({
    signIn:false,
    signUp:false
  });
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate()

// console.log(user);


  const authHandler = async (e) => {
    e.preventDefault();
    if (e.target.name === "signin") {
      setLoading ({...loading, signIn:true})
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          
          dispatch ({
            type: Type.SET_USER,
            user:userInfo.user
          });
          setLoading({...loading, signIN:false})
          navigate("/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIN: false });
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          setLoading({...loading, signUp:true})
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
            
          });
          setLoading({ ...loading, signUp: false})
           navigate("/");
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <section className="log_in">
      {/* Logo */}
      <Link to={"/"}>
        <img
          src="https://www.hatchwise.com/wp-content/uploads/2022/08/Amazon-Logo-2000-present-1024x576.jpeg"
          alt=""
        />
      </Link>

      {/* Sign up form */}
      <div className="login_container">
        <h1>Sign-In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>

          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className="login_signinButton"
          >
            {" "}
            {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        {/* agremment */}
        <p>
          By signin-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        {/* creat account button */}
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className="login_registerButton"
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
          ) : (
            "Creat Your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default SignUp;
