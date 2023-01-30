import styles from '../../styles/Login.module.css';
import registerStyles from '../../styles/Register.module.css'
import Link from 'next/link';

export default function LandlordLogin(){
    return (
        <div className={styles.wholePage}>
            <section className={registerStyles.register}>
                <h2>Landlord Login</h2>
                <p className={registerStyles.registerText}>Please enter your credentials to login.</p>

                <form action="/api/landlordLoginForm" method="POST">
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
                <p className={registerStyles.registerText}> <Link href="/" className={styles.account}>Back to user login page</Link></p>
            </section> 
        </div>
    )
}