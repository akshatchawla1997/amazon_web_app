const crypto_js = require('crypto-js')
const jwt = require('jsonwebtoken');

const encryptedData = async (password)=>{
        try{
            const secret_key = "#@maz0nPRimeIndia#"
            const cipherText = crypto_js.AES.encrypt(password, secret_key).toString()
            const originalText = cipherText.toString(CryptoJS.enc.Utf8);
            return originalText
        }catch(e){
            return e
        }   
}

const decryptedData = async (cipherText)=>{
        try{
            const secret_key = "#@maz0nPRimeIndia#"
            const cipherText = crypto_js.AES.decrypt(cipherText, secret_key).toString()
            return cipherText
        }catch(e){
            return e
        }
}

function generateJwtToken(payload, secretKey, expiresIn) {
    // Create the JWT token with the provided payload and secret key
    return jwt.sign(payload, secretKey, { expiresIn });
  }
  

module.exports = {
    encryptedData,
    decryptedData,
    generateJwtToken
}
