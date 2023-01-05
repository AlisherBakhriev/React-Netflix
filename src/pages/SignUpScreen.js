import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";
function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.masseng);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.masseng);
      });
  };
  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sing In
        </button>
        <h4>
          <span className="signUpScreen_btnGray">New to Netflix? </span>
          <span className="signUpScreen_btnWhite" onClick={register}>
            Sign up now
          </span>
        </h4>
        <p>
          <span>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </span>
          <button>Learn more.</button>
        </p>
      </form>
    </div>
  );
}

export default SignUpScreen;
