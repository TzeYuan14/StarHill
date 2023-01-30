import {MongoClient} from 'mongodb';

// /api/new-apartment
// POST/api/new-apartment

async function handler(req, res){
    if (req.method === 'POST') {
        const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://bernard:cmt322@cluster0.jjtklan.mongodb.net/?retryWrites=true&w=majority');
    const db = client.db();

    const apartmentsCollection= db.collection('apartments');
    const result = await apartmentsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({message: 'Apartment added'});
    }// secure place to run this code as in this file the code will not exposed to the user
}
export default handler;