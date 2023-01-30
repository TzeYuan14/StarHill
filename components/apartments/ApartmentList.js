import ApartmentItem from './ApartmentItem';
import styles from '../../styles/Form.module.css';
import classes from './ApartmentList.module.css';
import homeStyles from '../../styles/Home.module.css';
import Link from 'next/link';

function ApartmentList(props) {
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
            <li><Link href="/home">Home</Link></li>
            <li className={styles.line}><Link href="/apartmentList">Apartment Listing</Link></li>
            <li><Link href="/contactingService">Contacting Service</Link></li>
            <li><Link href="/complaintForm" >Complaint Form</Link></li>
          </ul>
        </nav>
      </section>

      <ul className={classes.list}>
        {props.apartments.map((apartment) => (
          <ApartmentItem
            key={apartment.id}
            id={apartment.id}
            image={apartment.image}
            title={apartment.title}
            address={apartment.address}
          />
        ))}
      </ul>
    </div>
  );
}

export default ApartmentList;
