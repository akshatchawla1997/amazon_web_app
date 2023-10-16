// const execute = require('../config/database/querywrapperMysql');
const userService  = require('../service/userService')

class UserController{
    async getUsers(request, response, next){
        try{
           
            const result = await userService.getUsers()
            return response.status(200).send(result);
        }catch (e){
            console.log(e)
        }
    }
    async signupNewUser(request, response, next){
        try{
            const registerData = request.body;
            const result = await userService.signup(registerData)
            return result
        }catch (e){
            console.log(e)
        }
        
    }
    async loginUser(request,response, next){
        try {
            const loginData = request.body;
            const result = await userService.login(loginData)
            return result
        } catch (error) {
            console.log(error)
        }
    }

    async updateExistingUser(request, response, next){
        try {
            const updateData = request.body;
            const result = await userService.updateUser(updateData)
            return result
        } catch (error) {
            console.log(error)
        }
    }

    async deleteUser(request, response, next){
        try{
            const userid = request.params
            const result = await userService.remove(userid)
            return result
        }catch (error){
            return error
        }
    }
}

module.exports = new UserController()