const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/chamathkadinidu08-oss/WEB---PAIR/blob/main/Images/Alive.jpeg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 PANTHER-MD is Online & Active😍*",
BOT_OWNER: '94707435575',  // Replace with the owner's phone number



};
