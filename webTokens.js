const jwt = require("jsonwebtoken")
require("dotenv").config() // read SECRET key from .env file

// Generate and Sign a JWT Token
const generateAndSignJWT = () => {
    const userId = 123
    const admin = true

    const token  = jwt.sign({id: userId, isAdmin: admin}, process.env.SECRET)
    console.log(token)

}

generateAndSignJWT()

let generatedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTI2OTkyMDR9.l0el6Mc_BUR6NbzhTZLnvRVxllKVfN5z9BnIvxaaF3E" 
let otherToken = "random string"

const verifyToken = () => {
    try {
        const decodedToken = jwt.verify(generatedToken, process.env.SECRET)
        console.log(decodedToken)
        console.log("Vaild Token")
    } catch {
        console.log("Invaild Token")
    }
}

verifyToken()
