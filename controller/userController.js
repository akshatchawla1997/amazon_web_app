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
            if (result.success) {
                // User registration was successful
                response.status(200).json(result);
              } else {
                // User registration failed, return an error response
                response.status(400).json(result);
              }
            } catch (e) {
              // Handle unexpected errors
              console.error(e);
              response.status(500).json({ success: false, error: 500, message: "Internal server error" });
            }
        }catch (e){
           return e
        }
    async loginUser(request,response, next){
        try {
            const loginData = request.body;
            const result = await userService.login(loginData)
            if (result.success){
                response.status(200).json(result);
            }else{
                response.status(400).json(result);
            }
        } catch (error) {
            console.log(error);
            response.status(500).json({ success: false, error: 500, message: "Internal server error" });
        }
    }

    async updateExistingUser(request, response, next){
        try {
            const updateData = request.body;
            const result = await userService.updateUser(updateData)
            if (result.success){
                response.status(200).json(result);
            }else{
                response.status(400).json(result);
            }
        } catch (error) {
            console.log(error);
            response.status(500).json({ success: false, error: 500, message: "Internal server error" });
        }
    }

    async deleteUser(request, response, next){
        try{
            const userid = request.params
            const result = await userService.remove(userid)
            if (result.success){
                response.status(200).json(result);
            }else{
                response.status(400).json(result);
            }
        } catch (error) {
            console.log(error);
            response.status(500).json({ success: false, error: 500, message: "Internal server error" });
        }
    }
}

module.exports = new UserController()