import { useRef } from 'react';

import styles from '../styles/Login.module.css';
import Link from 'next/link';

export default function Login(props){

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
    
        const loginData = {
            emailAddress: enteredEmail,
            password: enteredPassword
        }

        props.onAddLogin(loginData);
    }

    return(
        <div className={styles.wholePage}>
            <h2 className={styles.welcome}>Welcome to Starhill Luxury Residence</h2>

            <section className={styles.login}>
                <h2>User Login</h2>
                <p className={styles.text}>Please enter your credentials to login.</p>

                <form onSubmit={submitHandler}>
                    <div className={styles.loginForm}>
                        <div className={styles.form}>
                            <p>Email address </p>
                            <input type="text" name="email" ref={emailInputRef} placeholder="alvin@gmail.com"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                        </div>
                        
                        <div className={styles.form}>
                            <p>Password </p>
                            <input type="password"  ref={passwordInputRef} name="password" required />
                        </div>

                        <div className={styles.submitBtn}>
                            <input type="submit" value="Login" />
                        </div>
                        
                    </div>
                </form>
                    <p className={styles.text}>Not registered? <a href="/authentication/register" className={styles.account}>Create an account</a></p>

                    <p className={styles.text}><Link href="/authentication/landlordLogin" className={styles.account}>Sign in</Link> (For Landlord only)</p>
            </section> 

        </div>
    )
    
}