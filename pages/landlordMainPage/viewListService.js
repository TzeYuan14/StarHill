import { MongoClient } from 'mongodb';
import ListService from '../../components/viewListService/ListService';

function ListServicePage(props){
    
    return <ListService services={props.services} />
}

export async function getStaticProps(){

    const client = await MongoClient.connect('mongodb+srv://admin:admin123@webproject.yqicxdc.mongodb.net/contactingServiceForm?retryWrites=true&w=majority');
    const db = client.db();

    const serviceFormCollection = db.collection('serviceForm');

    const services = await serviceFormCollection.find().toArray();

    client.close();

    return{
        props: {
            services: services.map(service => ({
                nameTenant: service.nameTenant,
                emailAddress: service.emailAddress,
                phone: service.phone,
                apartmentNum: service.apartmentNum,
                serviceType: service.serviceType,
                addDetails: service.addDetails,
                id: service._id.toString(),
            }))
        }
    }
}


export default ListServicePage;
