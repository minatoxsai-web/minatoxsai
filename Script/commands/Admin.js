const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
 name: "admin",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
 description: "Show Owner Info",
 commandCategory: "info",
 usages: "admin",
 cooldowns: 2
};

module.exports.run = async function({ api, event }) {
 const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

 const callback = () => api.sendMessage({
 body: `## 🌸✨ 𝐎𝐰𝐧𝐞𝐫 𝐃𝐞𝐭𝐚𝐢𝐥𝐬 ✨🌸  

> 💖 **Name:** 𝑴𝒂𝒉𝒊𝒓𝒖 𝑺𝒉𝒊𝒏𝒂  
> 🚺 **Gender:** Female  
> ❤️ **Relation:** Single  
> 🎂 **Age:** 16  
> 🕊️ **Religion:** Islam  
> 🎓 **Education:** class 10  
> 🏡 **Address:** rongpur  

---

## 🌐💬 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐋𝐢𝐧𝐤𝐬 💬🌐  

> 📘 **Facebook:** [REDACTED]  
> 💬 **WhatsApp:** [REDACTED]  

---

## ⏰🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞 🕒⏰  
> `${time}`  

---

<p align="center">
  <img src="https://img.icons8.com/emoji/48/000000/sparkles.png" alt="sparkles"/>
  <br>
  <b>Made with 💖 by Mahiru Shina</b>
</p>

 `,
 attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
 }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/owner.jpg"));

 return request("https://i.imgur.com/idyXtoO.jpeg")
 .pipe(fs.createWriteStream(__dirname + '/cache/owner.jpg'))
 .on('close', () => callback());
};
