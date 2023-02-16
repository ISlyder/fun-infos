const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    openAiApiKey: process.env.OPENAI_API_KEY,
    openAiOrg: process.env.OPENAI_ORG,
    mediaStackApiKey: process.env.MEDIASTACK_API_KEY,
    serverPort: 8080
}