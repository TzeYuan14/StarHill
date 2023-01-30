import { MongoClient } from 'mongodb';

// /api/complaintForm
// If request to send to this url, it will trigger the function in this file


async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;
        
        const client = await MongoClient.connect('mongodb+srv://admin:admin123@webproject.yqicxdc.mongodb.net/complaintForm?retryWrites=true&w=majority');
        const db = client.db();

        const complaintFormCollection = db.collection('complaintForm');

        const result = await complaintFormCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: "Form inserted!"});

    }
}

export default handler;