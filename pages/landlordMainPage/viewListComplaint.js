import { MongoClient } from 'mongodb';
import ListComplaint from '../../components/ListComplaint';


function ListComplaintPage(props){

    return <ListComplaint complaints={props.complaints}/>
    
}

export async function getStaticProps(){

    const client = await MongoClient.connect('mongodb+srv://admin:admin123@webproject.yqicxdc.mongodb.net/complaintForm?retryWrites=true&w=majority');
    const db = client.db();

    const complaintFormCollection = db.collection('complaintForm');

    const complaints = await complaintFormCollection.find().toArray();

    client.close();

    return{
        props: {
            complaints: complaints.map(complaint => ({
                nameTenant: complaint.nameTenant,
                emailAddress: complaint.emailAddress,
                contact: complaint.contact,
                address: complaint.address,
                category: complaint.category,
                detailForm: complaint.detailForm,
                suggestion: complaint.suggestion,
                id: complaint._id.toString(),
            }))
        }
    }
}


export default ListComplaintPage;