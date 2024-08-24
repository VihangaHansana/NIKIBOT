const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = readEnv();
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
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
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
await con.sendMessage (from,{img:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e);
reply($'{e}')
})

  
