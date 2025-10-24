module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`সরি বস, ${name} কে আবার এড করতে পারলাম না। 
সম্ভবত তিনি সেকা খেয়েছেন তাই চলে গেলেন আবার এনে লাথি দিয়ে বের করেন। 
\n──────꯭Mahiru Shina𝐭─────`, event.threadID)
   } else api.sendMessage(`শোন, ${name}, 
এখান থেকে যাইতে হলে এডমিনের পারমিশন লাগে!রে পাগল
তুই পারমিশন ছাড়া লিভ নিছোস – তোকে আবার নিনজা স্টাইলে এড দিলাম।
\n──────꯭─⃝‌‌Mahiru Shina𝐭─────`, event.threadID);
  })
 }
}
