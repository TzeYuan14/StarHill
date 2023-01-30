import { useRef } from 'react';

import styles from '../styles/Login.module.css';
import registerStyles from '../styles/Register.module.css'
import Link from 'next/link';

export default function Registration(props){

    const usernameInputRef = useRef();
    const registerEmailInputRef = useRef();
    const registerPasswordInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredUsername = usernameInputRef.current.value;
        const enteredRegisterEmail = registerEmailInputRef.current.value;
        const enteredRegisterPassword = registerPasswordInputRef.current.value;

        const registerData = {
            username: enteredUsername,
            registerEmail: enteredRegisterEmail,
            registerPassword: enteredRegisterPassword,
        }

        props.onAddRegister(registerData);

    }

    return(
        <div className={styles.wholePage}>
            <section className={registerStyles.register}>
                <h2>Create an account</h2>
                <p className={registerStyles.registerText}>Create your account to log in Starhill Luxury Residence website</p>

                    <form onSubmit={submitHandler}>
                        <div className={styles.loginForm}>
                            <div className={styles.form}>
                                <p>Username </p>
                                <input type="text" name="username" ref={usernameInputRef} required />
                            </div>

                            <div className={styles.form}>
                                <p>Email address </p>
                                <input type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                name="email" placeholder="alvin@gmail.com" ref={registerEmailInputRef} required />
                            </div>
                            
                            <div className={styles.form}>
                                <p>Password </p>
                                <input type="password" name="password" ref={registerPasswordInputRef} required />
                            </div>

                            <div className={styles.submitBtn}>
                                <input type="submit" value="Sign up" />
                            </div>
                            
                        </div>
                    </form>
                    <p className={registerStyles.registerText}> <Link href="/" className={styles.account}>Back to login page</Link></p>
            </section> 
        </div>
    )
}