import React, { useState } from "react";
import styles from"./Login.module.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";



const Login = ({authType}) => {

  const[signUpbtn,setSignUpBtn]=useState(false)

 
  return (
    <>
      
          <div className={styles.loginContainer}>
            <div className={styles.loginHeader}>Login</div>
            <div className={styles.loginInput}>
              <TextField
                className={styles.loginInput}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ background: "white" }}
              />
            </div>
            <div className={styles.loginInput}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Password"
                variant="outlined"
                sx={{ background: "white" }}
              />
            </div>
            <div className={styles.cusBtn}>
              Sign in
              {/* <Button
                variant="contained"
                fullWidth
                
                sx={{ background: "hwb(162 51% 2%)",fontSize:"1.2rem" }}
              >
                Login
              </Button> */}
              {/* <button className="cusBtn" text="hello">Sign in</button> */}
            </div>
            <div>
              <span className={styles.sgnUpTxt}>Dont have an account yet?</span>
              <span className={styles.sgnUpBtn} onClick={authType}>
                Sign up
              </span>
            </div>
          </div>
          <div className={styles.banner}></div>
      
    </>
  );
};

export default Login;
