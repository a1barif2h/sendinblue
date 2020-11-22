import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";
import googleLogo from "../../images/google.png";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [massage, setMassage] = useState();
  const handelGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setMassage(`${result.user.displayName} Login successfully!`);
      })
      .catch((error) => {
        setMassage(error.massage);
      });
  };
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#F8FAFC",
        height: "100vh",
      }}
    >
      <img
        style={{ width: "200px", marginTop: "25px" }}
        src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/common/logo-color.svg"
        alt=""
      />

      <div
        style={{
          border: "2px solid #ABABAB",
          width: "570px",
          margin: "50px auto",
          height: "450px",
          backgroundColor: "#ffffff",
          borderRadius: "5px",
        }}
      >
        {massage ? (
          <h1 style={{ color: "#69B779" }}> {massage} </h1>
        ) : (
          <div
            style={{ width: "450px", height: "148px", margin: "170px auto" }}
          >
            <h3 style={{ marginBottom: "30px" }} className="mb-3">
              Login with
            </h3>
            <button
              onClick={handelGoogleLogin}
              style={{
                width: "100%",
                outline: "none",
                borderRadius: "25px",
                fontWeight: "bold",
                padding: "10px",
                cursor: "pointer",
                border: "1px solid #ABABAB",
                background: "transparent",
                position: "relative",
              }}
            >
              <img
                style={{
                  width: "35px",
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                }}
                src={googleLogo}
                alt=""
              />
              Continue with Google
            </button>
            <p style={{ marginTop: "25px", fontWeight: "bold" }}>
              Don’t have an account?{" "}
              <span style={{ color: "#3F90FC", cursor: "pointer" }}>
                Create an account
              </span>{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
