import styles from '../styles/Login.module.css';
import Link from 'next/link';

export default function Login(){

    return(
        <div className={styles.wholePage}>
            <h2 className={styles.welcome}>Welcome to Starhill Luxury Residence</h2>

            <section className={styles.login}>
                <h2>User Login</h2>
                <p className={styles.text}>Please enter your credentials to login.</p>

                <form action="/api/loginForm" method="POST">
                    <div className={styles.loginForm}>
                        <div className={styles.form}>
                            <p>Email address </p>
                            <input type="text" name="email" placeholder="alvin@gmail.com"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                        </div>
                        
                        <div className={styles.form}>
                            <p>Password </p>
                            <input type="password" name="password" required />
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