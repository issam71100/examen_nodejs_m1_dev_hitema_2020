const crypto = require('crypto');

function sha1Encode(data) {
    // To be implemented!
    const sha1Encode = crypto.createHash('sha1');
    sha1Encode.update(data);
    return sha1Encode.digest('hex');
}

module.exports.digestAuth = (request, response, next) => {
    // To be implemented!

    const authorization = request.headers.authorization;  // 'Basic xxxx'
    const encoded = authorization.replace('Basic ', '');

    const decoded = Buffer.from(encoded, 'base64').toString('utf8');

    const authentication = decoded.split(':');

    console.log( authentication[0],  authentication[1]);
    const isValid = authentication[0] === 'node'
        && authentication[1] ===  sha1Encode('password');
    
    // si pas authentifié
    const HTTP_CODE_UNAUTHORIZED = 401; 
    isValid ? next() : response.sendStatus(HTTP_CODE_UNAUTHORIZED);
}