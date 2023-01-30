
import {MongoClient, ObjectId} from 'mongodb';
import ApartmentDetail from '../../components/apartments/ApartmentDetail';
function ApartmentDetails(props) {
    return (
        <ApartmentDetail
        image={props.apartmentData.image}
        title={props.apartmentData.title}
        address={props.apartmentData.address}
        description={props.apartmentData.description}
        />

    );
}

export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb+srv://bernard:cmt322@cluster0.jjtklan.mongodb.net/?retryWrites=true&w=majority');
  const db = client.db();

  const apartmentsCollection= db.collection('apartments');

  const apartments = await apartmentsCollection.find({},{_id: 1}).toArray();

  client.close();
    return {
        fallback: blocking,
        paths: apartments.map(appartment => ({
             params: {apartmentId: appartment._id.toString() },
            })),
        
    };
}

export async function getStaticProps(context){
    //fetch data for single meetup
    const apartmentId = context.params.apartmentId;
    const client = await MongoClient.connect('mongodb+srv://bernard:cmt322@cluster0.jjtklan.mongodb.net/?retryWrites=true&w=majority');
  const db = client.db();

  const apartmentsCollection= db.collection('apartments');

  const selectedApartment = await apartmentsCollection.findOne({
    _id: ObjectId(apartmentId),
});

  client.close();

    console.log(apartmentId);

    return {
        props:{
            apartmentData: {
                id: selectedApartment._id.toString(),
                title: selectedApartment.title,
                address: selectedApartment.address,
                image: selectedApartment.image,
                description: selectedApartment.description,
            },
        },
    };
}

export default ApartmentDetails;