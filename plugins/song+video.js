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

//download audio
let down = await.fg yta(url)
let downloadUrl = down.dl_url


//send audio+document massage 


await con.sendMessage (from, {audio: {url:downloadUrl}, mimetype:"audio/mpeg"},{quoted:mek})
       
}catch(e){
console.log(e)
reply('${e}')
}
})

//==============download-Video===============
cmd({
    pattern: "video",
    desc: "download videos",
    category: "download ",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or title ")
const search = await yta(q)
const data =search.video[0];
const url =data.url
let desc = '
⭐ *NIKI BOT VIDEOS DOWNLOADER * ⭐
  title : ${data.title}
  description: ${data.description}
  time:{${data.timestamp}
  ago:${data.ago}
  views: ${data.views}


MADE BY NIKI BOT 💃💗
'

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc,{quoted:mek});    
await con.sendMessage (from, {document: {url:downloadUrl}, mimetype:"audio/mpeg",fileName:data.title + ".mp3", caption:"*POWERED BY NIKI BOT 💃💗*"},{quoted:mek})

        
//download video
let down = await.fg ytv(url)
let downloadUrl = down.dl_url


//send video+document massage 


await con.sendMessage (from, {video: {url:downloadUrl}, mimetype:"video/mp4"},{quoted:mek})


await con.sendMessage (from, {document: {url:downloadUrl}, mimetype:"video/mp4",fileName:data.title + ".mp4", caption:"*POWERED BY NIKI BOT 💃💗*"},{quoted:mek})
  
}catch(e){
console.log(e)
reply('${e}')
}
})
