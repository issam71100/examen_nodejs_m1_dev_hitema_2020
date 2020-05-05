const fs = require('fs');

module.exports.decodeHexFileContent = (filePath) => {
    return new Promise((resolve, reject) => {
        // To be implemented!
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            const convert = Buffer.from(content, 'hex').toString('utf8');
            resolve(convert);
        } catch (error) {
            reject(error)
        }
    });
}
