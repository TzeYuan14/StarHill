import Login from '../components/Login';
import { useRouter } from 'next/router';

export default function LoginPage(){
    
    const router = useRouter();

    async function addLoginHandler(enteredLoginData){
        const response = await fetch('/api/loginForm', {
            method: 'POST',
            body: JSON.stringify(enteredLoginData),
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          const data = await response.json();
      
          console.log(data);

  
        router.push('/home');
    }

    return(
        <div>
            <Login onAddLogin={addLoginHandler}/>
        </div>
    )
}