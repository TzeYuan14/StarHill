import { useRef } from 'react';

import styles from '../styles/Form.module.css';
import homeStyles from '../styles/Home.module.css';
import contactStyles from '../styles/Contact.module.css';
import backgroundImg from '../public/img/roomservice.jpg';
import Link from 'next/link';
import Image from 'next/image';
import {useState} from 'react';

export default function ContactForm(props){

    const [value, setValue] = useState('');

    const handleChange = event => {
      const result = event.target.value.replace(/\D/g, '');
      setValue(result);
    };
  
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const phoneInputRef = useRef();
    const apartmentNumInputRef = useRef();
    const serviceTypeInputRef = useRef();
    const addDetailInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;
        const enteredApartmentNum = apartmentNumInputRef.current.value;
        const enteredServiceType = serviceTypeInputRef.current.value;
        const enteredAddDetail = addDetailInputRef.current.value;
    
        const serviceData = {
            nameTenant: enteredName,
            emailAddress: enteredEmail,
            phone: enteredPhone,
            apartmentNum: enteredApartmentNum,
            serviceType: enteredServiceType,
            addDetails: enteredAddDetail,
        }

        props.onAddService(serviceData);
    }
   

    
 
    return(
        <div>
            <div className={styles.logo}>
                <h3><span className={styles.starhill}>STARHILL</span> RESIDENCE</h3>
                <Link href="/" className={homeStyles.signout}>SIGN OUT</Link>
                <hr className={styles.greenline} />
            </div>

            <nav className={styles.navbar}>
                <ul>
                    <li><Link href="/home">Home</Link></li>
                    <li><Link href="/apartmentList">Apartment Listing</Link></li>
                    <li className={styles.line}><Link href="/contactingService">Contacting Service</Link></li>
                    <li><Link href="/complaintForm">Complaint Form</Link></li>
                </ul>
            </nav>

            <Image 
                priority src={backgroundImg}
                className={contactStyles.backgroundImg} height={1200} alt=""
            />

            <div className={contactStyles.rectangleForm}>
                <h2>Contacting Service Form</h2>
                <hr className={contactStyles.whiteline} />

                <form onSubmit={submitHandler}>
                    <div className={styles.form}>
                        <label>Name of Tenant</label>
                        <br />
                        <input type="text" id="nameTenant" name="nameTenant" 
                        ref={nameInputRef} required />
                    </div>

                    <div className={styles.formLeftRight}>
                        <div className={styles.formLeft}>
                            <label>Email Address</label>
                            <br />
                            <input type="text" 
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            id="email" name="email" ref={emailInputRef}
                            placeholder="alvin@gmail.com" required/>
                        </div>

                        <div className={styles.formRight}>
                            <label>Phone Number</label>
                            <br />
                            <input type="text" 
                            value={value}
                            onChange={handleChange} ref={phoneInputRef}
                            id="phone" name="phone" placeholder="60112345678" required />
                        </div>

                    </div>

                    <div className={styles.form}>
                        <label>Apartment Number</label>
                        <br />
                        <input type="text" id="apartmentNumber" name="apartmentNumber" 
                        ref={apartmentNumInputRef} required />
                    </div>

                    <div className={styles.form}>
                        <label>Service Type</label>
                        <br />
                        <select name="serviceType" ref={serviceTypeInputRef} className={contactStyles.control}>
                            <option value="maintenance">Maintenance</option>
                            <option value="cleaning">Cleaning</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className={styles.form}>
                        <label>Additional Details</label>
                        <br />
                        <textarea id="addDetails" name="addDetails" 
                        ref={addDetailInputRef} required></textarea>
                    </div>

                     <div className={styles.submitBtn}>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>

            
        </div>
    )
}