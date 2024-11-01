import axios from "axios";
//import { ReqResLogResponse } from "../interfaces/reqreslog.interface";

export const loginRequest = async( email: string, password: string)/*: Promise<ReqResLogResponse>*/ => {

    try{
    const {data} = await axios.post/*<ReqResLogResponse>*/('http://localhost:4205/api/auth/login', {
        email,
        password
    })
    return data.token

} catch (error){
    console.log(error);
}
}


/*
import axios from "axios";

export const loginRequest = async( email: string, password: string) => {

    return axios.post('http://localhost:4205/api/auth/login', {
        email,
        password
    })
}
*/