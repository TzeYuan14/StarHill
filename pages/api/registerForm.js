import { MongoClient } from 'mongodb';

async function handler(req, res){
    
    if(req.method === 'POST'){
        const data = req.body;
    
        const client = await MongoClient.connect('mongodb+srv://admin:admin123@webproject.yqicxdc.mongodb.net/registerForm?retryWrites=true&w=majority');
        const db = client.db();

        const complaintFormCollection = db.collection('registerForm');

        const result = await complaintFormCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: "Form inserted!"});

    }
}

export default handler;