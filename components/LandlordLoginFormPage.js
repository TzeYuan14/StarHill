import { useRef } from 'react';

import styles from '../styles/Login.module.css';
import registerStyles from '../styles/Register.module.css'
import Link from 'next/link';


export default function LandlordLoginFormPage(props){

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
    
        const landlordLoginData = {
            emailAddress: enteredEmail,
            password: enteredPassword
        }

        props.onAddLandlordLogin(landlordLoginData);
    }

    return(
        <div className={styles.wholePage}>
            <section className={registerStyles.register}>
                <h2>Landlord Login</h2>
                <p className={registerStyles.registerText}>Please enter your credentials to login.</p>

                <form onSubmit={submitHandler}>
                    <div className={styles.loginForm}>
                        <div className={styles.form}>
                            <p>Email address </p>
                            <input type="text" name="email" ref={emailInputRef} placeholder="alvin@gmail.com"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                        </div>
                        
                        <div className={styles.form}>
                            <p>Password </p>
                            <input type="password" name="password" ref={passwordInputRef} required />
                        </div>

                        <div className={styles.submitBtn}>
                            <input type="submit" value="Login" />
                        </div>
                        
                    </div>
                </form>
                <p className={registerStyles.registerText}> <Link href="/" className={styles.account}>Back to user login page</Link></p>
            </section> 
        </div>
    )
}