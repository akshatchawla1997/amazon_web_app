// import { Jwt } from "jsonwebtoken";

// import { decryptedData, encryptedData, generateJwtToken } from "../common/crpto";
const crypto = require("../common/crpto"); // Replace 'crypto' with the appropriate module name
const { execute } = require("../config/database/querywrapperMysql");

// Now, you can use the imported modules as needed
const decryptedData = crypto.decryptedData;
const encryptedData = crypto.encryptedData;
const generateJwtToken = crypto.generateJwtToken;

class userService{
    async signup(registerData){
        return new Promise(async(resolve, reject)=>{
            try {
                const checkUser = 'select email_id from users where emailid = ?'
                const isUserExist = await execute( checkUser, [registerData.email])
                if(isUserExist){
                    resolve({"success":false, error:402, "message":"try with different mail"})
                }else{
                    const payload = {
                        email:registerData.email,
                        password:registerData.password
                    }
                    const jwttoken = generateJwtToken(payload, "##$$ecomm$$##",'1hr')
                    cipherText = encryptedData(registerData.password)
                    registerquery = "insert into users (first_name, last_name, password, mobile_number, email_id, created_at, updated_at)value(?,?,?,?,?,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);";
                    const insertResult = await execute(registerquery, [registerData.firstname,registerData.lastname, registerData.cipherText, registerData.email ])
                    return resolve({"success":true, "data":insertResult, "web_token":jwttoken, message:"data inserted successfully"})
                }
            }catch(e){
                reject(e);
            }
        })
    }

    async login(userData){
        return new Promise(async(resolve, reject)=>{
            try{
                const checkUser = 'select email_id, password from users where emailid = ?'
                const isUserExist = execute(checkUser, [userData.email])
                if(isUserExist){
                    cipherText = encryptedData(registerData.password)
                    if (cipherText === isUserExist[0].password){
                        const payload = {
                            email:userData.email,
                            password:userData.password
                        }
                        const jwttoken = generateJwtToken(payload, "##$$ecomm$$##",'1hr')
                        return resolve({"status":201,"success":true,"web_token":jwttoken, message:"Login successfully"})
                    }else{
                        return resolve({"status":400,"success":false, message:"check userid/password as something went wrong"})
                    }
                }
            }catch(e){
                reject(e)
            }
        })
    }
    async updateUser(userUpdateData, id){
        return new Promise((resolve, reject)=>{
            try{
                const updateQuery = "update users set ? where id = ?";
                const result = execute(updateQuery, [userUpdateData, id])
                if(result[0]){
                    return resolve({"status":201,"success":true, message:"user updated successfully"})
                }else{
                    return {"status":400,"success":false, message:"user not found"}
                }
            }catch(e){
                return reject(e)
            }
        })
    }
    async getUsers(){
        return new Promise(async(resolve, reject)=>{
            const userList = "select * from users"
            const result = await execute(userList, [])
            if(result[0]){
                return resolve({"status":"200", "data":result ,"success":true})
            }else{
                return reject({"status":"204", "success":false})
            }
        })
    }

    async remove(id){
        return new Promise( async(resolve, reject)=>{
            const deletesQuery = "DELETE FROM users WHERE id = ?"
            const result = await execute(deletesQuery, [id])
            if(result[0]){
                return resolve({"status":200,"success":true, "message":"user deleted successfully"})
            }else{
                return reject({"status":"204", "success":false, "message":"No such user found"})
            }

        })
    }
}


module.exports = new userService()