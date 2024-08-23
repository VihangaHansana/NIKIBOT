const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {   
menu: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''


};


for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = '👋 *Hello ${pushname}*
  > *DOWNLOAD COMMANDS* ⬇️
  
  ${menu.download}

  > *MAIN COMMANDS* 🌟

  ${menu.main}

  > *GROUP COMMANDS* 🪮

  ${main.group}

  > *OWNER COMMANDS* 👻

    ${main.owner}

  > *CONVERT COMMANDS* 📔

  ${main.convert}

  > *SEARCH COMMANDS* 🌐

  ${main.search}
  
 * POWERED BY NIKI BOT ❤️‍🩹*

     '
await con.sendMessage (from,{img:{url:"https://telegra.ph/file/a6613fc154a69d1ce94d4.jpg"},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e);
reply($'{e}')
})

  
