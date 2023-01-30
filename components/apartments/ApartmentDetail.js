import classes from './ApartmentDetail.module.css';
import mainStyles from '../../styles/LandlordPage.module.css';
import styles from '../../styles/Form.module.css';
import homeStyles from '../../styles/Home.module.css';
import Link from 'next/link';

function ApartmentDetail(props){
return (
    <div>
        <section>
            <div className={styles.logo}>
            <h3><span className={styles.starhill}>STARHILL</span> RESIDENCE</h3>
            <Link href="/" className={homeStyles.signout}>SIGN OUT</Link>
            <hr className={styles.greenline} />
            </div>

            <nav className={styles.navbar}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li className={styles.line}><Link href="/apartmentList">Apartment Listing</Link></li>
                <li><Link href="/contactingService">Contacting Service</Link></li>
                <li><Link href="/complaintForm" >Complaint Form</Link></li>
            </ul>
            </nav>
        </section>

        <section className={classes.detail}>
            <img src={props.image} 
            alt={props.title} />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>

        <div className={mainStyles.link} style={{marginLeft: '44.5%'}}>
            <a href="/bookingApartment" >Book now</a>
        </div>
        <br />
        <Link href="/apartmentList" className={classes.link}>Back to apartment list</Link>
        <br /><br /><br /><br /><br />
    </div>
);  
}
export default ApartmentDetail;