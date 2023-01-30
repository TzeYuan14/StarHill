import LandlordLoginFormPage from "../../components/LandlordLoginFormPage";
import { useRouter } from 'next/router';

export default function LandlordLogin(){

    const router = useRouter();

    async function addLandlordLoginHandler(enteredLandlordLoginData){
        const response = await fetch('/api/landlordLoginForm', {
            method: 'POST',
            body: JSON.stringify(enteredLandlordLoginData),
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          const data = await response.json();
      
          console.log(data);

        router.push('/landlordMainPage/mainPage');
    }

    return (
        <LandlordLoginFormPage onAddLandlordLogin={addLandlordLoginHandler} />
    )
}