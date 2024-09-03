import jwt from "jsonwebtoken"
import db from "../../ds.js"

const AddCookies = (id, email) =>{
    const token = jwt.sign({id: id, email: email}, "TOKEN");

    // document.cookie = "uid="+token+"; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/";

    return token;
}

const GetToken = async (auth) =>{
    const decode = jwt.verify(auth, "TOKEN");

    const response = await db.query("SELECT * FROM users WHERE id=$1",[decode.id]);
    
    return response;
}

export const functionality = {
    AddCookies,
    GetToken,
}