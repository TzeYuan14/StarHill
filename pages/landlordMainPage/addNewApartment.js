// our-domain.com/new-apartment
import { useRouter } from 'next/router';
import NewApartmentForm from '../../components/apartments/NewApartmentForm';

function NewApartmentPage() {
    const router = useRouter();

    async function addApartmentHandler(enteredApartmentData){
        const response= await fetch('/api/new-apartment', {
            method: 'POST',
            body: JSON.stringify(enteredApartmentData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data= await response.json();
        console.log(data);

        router.push('/landlordMainPage/mainPage');
    }
    return <NewApartmentForm onAddApartment ={addApartmentHandler}/>
}

export default NewApartmentPage;