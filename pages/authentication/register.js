import { useRouter } from 'next/router';
import Registration from '../../components/Registration';

export default function RegisterPage(){

    const router = useRouter();

    async function addRegisterHandler(enteredRegisterData){
        const response = await fetch('/api/registerForm', {
            method: 'POST',
            body: JSON.stringify(enteredRegisterData),
            headers: {
            'Content-Type': 'application/json'
            }
        })

        const data = await response.json();
        console.log(data);

        router.push('/');
    }


    return <Registration onAddRegister={addRegisterHandler}/>
}