import { useRouter } from 'next/router';
import ComplaintForm from '../../components/NewComplaint';

function NewComplaintPage(){

  const router = useRouter();

  async function addFormHandler(enteredFormData){
    const response = await fetch('/api/complaintForm', {
      method: 'POST',
      body: JSON.stringify(enteredFormData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);

    router.push('/home');
  }

  return < ComplaintForm onAddForm={addFormHandler}/>
}

export default NewComplaintPage;