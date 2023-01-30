import { MongoClient } from 'mongodb';

async function handler(req, res){
    if(req.method === 'POST'){
        const {email, password} = req.body;
        
        const client = await MongoClient.connect('mongodb+srv://admin:admin123@webproject.yqicxdc.mongodb.net/landlordLogin?retryWrites=true&w=majority');
        const db = client.db();

        const complaintFormCollection = db.collection('landlordLogin');

        const result = await complaintFormCollection.findOne(
            {landlordEmail: email, landlordPassword: password});

        if(!result){
            return res.json({error: "Landlord account is not found"});
        }

        else{
            res.redirect('/landlordMainPage/mainPage');
        }

        client.close();
    }
}

export default handler;