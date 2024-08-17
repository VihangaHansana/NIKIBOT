const {cmd , commands} = require('../command')

const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "song",
    desc: "download songs",
    category: "download ",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or title ")
const search = await yts(q)
const data =search.video[0];
const url =data.url
let desc = '
⭐ *NIKI BOT SONG DOWNLOADER * ⭐
  title : ${data.title}
  description: ${data.description}
  time:{${data.timestamp}
  ago:${data.ago}
  views: ${data.views}


MADE BY NIKI BOT 💃💗
'

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc,{quoted:mek});     
}catch(e){
console.log(e)
reply('${e}')
}
})
