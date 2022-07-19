import axios from "axios";
import { getValue } from "../utils/common";
import { baseUrl } from "./config";


export const signup = (payload) => {
    try{
        const res =  axios.post(baseUrl + `/signup`, payload)
        return res.data;
    }catch(error) {
        return getValue(error, ["response", "data"]);
    }
}