import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewApartmentForm.module.css';
import homeStyles from '../../styles/Home.module.css';
import Link from 'next/link';


function NewApartmentForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const ApartmentData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddApartment(ApartmentData);
  }

  return (
    <div className={classes.card}>
      <Card>
        <h2 style={{textAlign: 'center', padding: '20px' }}>Adding New Apartment</h2>
        <Link href="/landlordMainPage/mainPage" className={homeStyles.signout}>Back to home</Link>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='title'>Apartment Title</label>
            <input type='text' required id='title' ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='image'>Apartment Image</label>
            <input type='url' required id='image' ref={imageInputRef} placeholder=" 'url' "/>
          </div>
          <div className={classes.control}>
            <label htmlFor='address'>Apartment Address</label>
            <input type='text' required id='address' ref={addressInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='description'>Description</label>
            <textarea
              id='description'
              required
              rows='5'
              ref={descriptionInputRef}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button>Add Apartment</button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default NewApartmentForm;
