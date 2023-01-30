import BookingForm from '../../components/BookingForm';
import { useRouter } from 'next/router';

function BookingApartmentPage(){

    const router = useRouter();

    async function addBookingHandler(enteredBookingData){
        const response = await fetch('/api/bookingForm', {
          method: 'POST',
          body: JSON.stringify(enteredBookingData),
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        const data = await response.json();
        console.log(data);
 
        router.push('/home');
      }

    return(
        <BookingForm onAddBooking={addBookingHandler}/>
    )

}

export default BookingApartmentPage;