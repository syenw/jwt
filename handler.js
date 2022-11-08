const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

// Set up Global Configuration Access
dotenv.config()

module.exports = {
    GenerateJWT: async function(req, res, next){
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        let data = {
            time: Date(),
            userId: 1,
        }
    
        const token = jwt.sign(data, jwtSecretKey);
    
        res.send(token);
    },
    ValidateJWT: async function(req, res, next){
        let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
        let jwtSecretKey = process.env.JWT_SECRET_KEY;

        try {
            const token = req.header(tokenHeaderKey)
            const verified = jwt.verify(token, jwtSecretKey)

            if (verified) {
                return res.send('Succesfully verified')
            }
            else {
                return res.status(401).send(error)
            }
        } catch (error) {
            return res.status(401).send(error);
        }
    }
}