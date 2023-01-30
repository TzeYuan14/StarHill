import { useRef } from 'react';

import Link from 'next/link';
import homeStyles from '../styles/Home.module.css';
import styles from '../styles/Form.module.css';
import Image from 'next/image';
import backgroundImg from '../public/img/apartment.jpg';
import {useState} from 'react';

export default function ComplaintForm(props) {

  const [value, setValue] = useState('');

  const handleChange = event => {
    const result = event.target.value.replace(/\D/g, '');
    setValue(result);
  };


  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const contactInputRef = useRef();
  const addressInputRef = useRef();
  const categoryInputRef = useRef();
  const detailInputRef = useRef();
  const suggestionInputRef = useRef();

  function submitHandler(event){
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredContact = contactInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value;
    const enteredDetail = detailInputRef.current.value;
    const enteredSuggestion = suggestionInputRef.current.value;

    const formData = {
      nameTenant: enteredName,
      emailAddress: enteredEmail,
      contact: enteredContact,
      address: enteredAddress,
      category: enteredCategory,
      detailForm: enteredDetail,
      suggestion: enteredSuggestion,
    }

    props.onAddForm(formData);
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
            <li><Link href="/contactingService">Contacting Service</Link></li>
            <li className={styles.line}><Link href="#">Complaint Form</Link></li>
          </ul>
        </nav>

        <Image 
          priority src={backgroundImg}
          className={styles.backgroundImg} height={1500} alt=""
        />

        <div className={styles.rectangleForm}>
          <h2>Tenant Complaint Form</h2>
          <hr className={styles.whiteline} />

          <form onSubmit={submitHandler}>
            <div className={styles.form}>
              <label>Name of Tenant</label>
              <br />
              <input type="text" id="nameTenant" name="nameTenant" ref={nameInputRef} required />
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
                <label>Contact Number</label>
                <br />
                <input type="text" 
                value={value}
                onChange={handleChange} ref={contactInputRef}
                id="contact" name="contact" placeholder="60112345678" required />
              </div>
            </div>

            <div className={styles.form}>
              <label>Apartment Address</label>
              <br />
              <input type="text" id="address" name="address" ref={addressInputRef} required />
            </div>
           
            <div className={styles.form}>
              <label>Category of Complaint</label>
              <br />
              <input type="text" id="category" name="category" ref={categoryInputRef} required 
              placeholder="maintenance problems, noisy neighbors, pest invasion, etc." />
            </div>

            <div className={styles.form}>
              <label>Details of Complaint</label>
              <br />
              <textarea id="details" name="details" ref={detailInputRef} required></textarea>
            </div>

            <div className={styles.form}>
              <label>Suggestion(s)</label>
              <br />
              <textarea id="suggestion" name="suggestion" ref={suggestionInputRef} required></textarea>
            </div>

            <div className={styles.submitBtn}>
                <input type="submit" value="Submit"/>
            </div>                     
          </form>
        </div>

      </div>
    );      
}