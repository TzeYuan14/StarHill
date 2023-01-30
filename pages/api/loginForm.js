import { MongoClient } from 'mongodb';

async function handler(req, res){
    if(req.method === 'POST'){
        const {email, password} = req.body;
        
        const client = await MongoClient.connect('mongodb+srv://admin:admin123@webproject.yqicxdc.mongodb.net/registerForm?retryWrites=true&w=majority');
        const db = client.db();

        const complaintFormCollection = db.collection('registerForm');

        const result = await complaintFormCollection.findOne(
            {registerEmail: email, registerPassword: password});

        if(!result){
            return res.json({error: "User is not found"});
        }

        else{
            res.redirect('/home');
        }

        client.close();
    }
}

export default handler;