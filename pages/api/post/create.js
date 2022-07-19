import { dbConnect } from "../../../lib/db-connect";

export default function handler(req, res) {



    if(req.method !== "POST"){
        res.status(400).json({ message: 'Invalid Request' })
    }

// db connect
     dbConnect();


    const { name } = req.body;

    res.status(200).json({
        name
    })
}