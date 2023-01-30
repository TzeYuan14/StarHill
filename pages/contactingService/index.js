import ServiceForm from '../../components/ServiceForm'
import { useRouter } from 'next/router';

export default function ContactingServicePage(){

    const router = useRouter();

    async function addServiceHandler(enteredServiceData){
        const response = await fetch('/api/serviceForm', {
            method: 'POST',
            body: JSON.stringify(enteredServiceData),
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          const data = await response.json();
      
          console.log(data);

          router.push('/home');
    }


    return <ServiceForm onAddService={addServiceHandler}/>
}