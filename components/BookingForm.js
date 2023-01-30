import { useRef } from 'react';

import homeStyles from '../styles/Home.module.css';
import styles from '../styles/Form.module.css';
import Card from '../components/ui/Card';
import classes from '../components/apartments/NewApartmentForm.module.css';
import contactStyles from '../styles/Contact.module.css';
import Link from 'next/link';

export default function BookingForm(props){

    const nameInputRef = useRef();
    const phoneInputRef = useRef();
    const apartmentTypeInputRef = useRef();
    const durationInputRef = useRef();
    const noTenantsInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;
        const enteredApartmentType = apartmentTypeInputRef.current.value;
        const enteredDuration = durationInputRef.current.value;
        const enteredNoTenants = noTenantsInputRef.current.value;
    
        const bookingData = {
            nameTenant: enteredName,
            phone: enteredPhone,
            apartmentType: enteredApartmentType,
            duration: enteredDuration,
            noTenants: enteredNoTenants,
        }

        props.onAddBooking(bookingData);
    }


    return (
        <div>
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
                    <li><Link href="/complaintForm">Complaint Form</Link></li>
                </ul>
            </nav>

            <div className={classes.card}>
                <Card>
                    <h2 style={{textAlign: 'center', padding: '20px' }}>Book your Apartment</h2>

                    <form className={classes.form} onSubmit={submitHandler} >
                        <div className={classes.control}>
                            <label htmlFor='title'>Name</label>
                            <input type='text' required id='name' name="name" ref={nameInputRef}/>
                        </div>

                        <div className={classes.control}>
                            <label htmlFor='image'>Phone number</label>
                            <input type='text' required id='phone' name="phone"
                            ref={phoneInputRef} placeholder="60112345678"/>
                        </div>

                        <div className={classes.control}>
                            <label>Apartment type selection</label>
                            <select name="apartmentType" ref={apartmentTypeInputRef} className={contactStyles.control}>
                                <option value="small">3 Bedroom Small</option>
                                <option value="medium">3 Bedroom Medium</option>
                                <option value="large">3 Bedroom Large</option>
                            </select>
                        </div>

                        <div className={classes.control}>
                            <label>Duration of stay selection</label>
                            <select name="duration" ref={durationInputRef} className={contactStyles.control}>
                                <option value="6 months">6 Months</option>
                                <option value="12 months">1 Year</option>
                                <option value="more than 12 months">More than 1 Year</option>
                            </select>
                        </div>

                        <div className={classes.control}>
                            <label>No. of Tenants</label>
                            <select name="noTenants" ref={noTenantsInputRef} className={contactStyles.control}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>

                        <div className={classes.actions}>
                            <button>Book Now</button>
                        </div>
                    </form>
                </Card>
                <br /><br /><br />
            </div>

        </div>
    )
}