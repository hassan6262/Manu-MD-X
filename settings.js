//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    𝗠𝗔𝗡𝗨-𝗠𝗗  𝐁𝐎𝐓                                                 //
//                                                                                                      //
//                                         Ｖ：7.0                                                       //

//███╗░░░███╗░█████╗░███╗░░██╗██╗░░░██╗
//████╗░████║██╔══██╗████╗░██║██║░░░██║
//██╔████╔██║███████║██╔██╗██║██║░░░██║
//██║╚██╔╝██║██╔══██║██║╚████║██║░░░██║
//██║░╚═╝░██║██║░░██║██║░╚███║╚██████╔╝
//╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░

//███╗░░░███╗██████╗░
//████╗░████║██╔══██╗
//██╔████╔██║██║░░██║
//██║╚██╔╝██║██║░░██║
//██║░╚═╝░██║██████╔╝
//╚═╝░░░░░╚═╝╚═════╝░

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : ÖVÏÇ-MD
//  * @author : ÖVÏÇ Official
//  * @youtube : https://www.youtube.com/@ManulOfficialTech
//  * @description : ÖVÏÇ-MD ,A Multi-functional whatsapp user bot.
//*
//*
//base by ÖVÏÇ Official
//GitHub: @manulofficial7
//WhatsApp: +94742274855
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@ManulOfficialTech
//   * Created By Github: ÖVÏÇofficial7.
//   * Credit To ÖVÏÇ Official
//   * © 2025 ÖVÏÇ-MD-V7.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Manu-MD&SZFgxKAR#6_NyKpEpowTYlvcmjcQkc4cAaDdYLM0YAn6AHB7AKBQ", // ඔයාගෙ සෙසන් එක දාගන්න / Put Your Session_id Here !!! 💚
MONGODB: process.env.MONGODB || "mongodb+srv://manulwijethilaka42:manumd123@cluster0.le0te.mongodb.net/", // ඔයාගෙ Mongodb Url එක දාගන්න / Put Your Mongodb Url Here !!! 💚
};
