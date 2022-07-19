import { dbConnect } from "../../../lib/db-connect";
import User from "../../../lib/models/user";
import { errorHandler, responseHandler, validateAllOnce } from "../../../utils/common";
import bcrypt from "bcrypt";

export default function handler(req, res){
    
    if(req.method !== "POST"){
        // return error
        errorHandler("Invalid Request Type", res);

    }else{
         
    try{
        const { name, email, password } = req.body;
         validateAllOnce(req.body);

        //  create db connection
        dbConnect();

        const hashPassword = bcrypt.hash(req.password, 8);

        const user = new User({
            ...req.body,
            password: hashPaassword
        });


        const saveUser =  user.save();
        if(saveUser){ 
            const userDoc = saveUser.doc();
            delete userDoc.password;
            responseHandler(userDoc, res, 201);
        }else{
            errorHandler('Something went wrong', res);
        }


    }catch(error){
        errorHandler(error, res);
    }
    }
   
}