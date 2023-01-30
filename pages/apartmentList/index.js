import {MongoClient} from 'mongodb';
import ApartmentList from "../../components/apartments/ApartmentList";

function NewApartmentPage(props) {
    
    return <ApartmentList apartments={props.apartments}/>
}

export async function getStaticProps() {
    //fetch data from an API
    const client = await MongoClient.connect('mongodb+srv://bernard:cmt322@cluster0.jjtklan.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db();
  
    const apartmentsCollection= db.collection('apartments');
  
    const apartments= await apartmentsCollection.find().toArray();
  
    client.close();
  
    return {
      props: {
        apartments: apartments.map(apartment =>({
          title: apartment.title,
          address: apartment.address,
          image:apartment.image,
          id: apartment._id.toString(),
        }))
      },
      revalidate: 10
    };
  }

export default NewApartmentPage;