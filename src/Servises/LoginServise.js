import { myaxios } from "./Helper";

export const Login = (user) =>{
return myaxios.post("").then((response)=> response.data);
};