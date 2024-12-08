const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_22_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTczLFxuICAgICAgICA2MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MCxcbiAgICAgICAgMixcbiAgICAgICAgNjcsXG4gICAgICAgIDM0LFxuICAgICAgICA5NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDY2LFxuICAgICAgICA4MixcbiAgICAgICAgNDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNixcbiAgICAgICAgMjM1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODEsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUyLFxuICAgICAgICA1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA5OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDksXG4gICAgICAgIDU4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDEsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMixcbiAgICAgICAgMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDg3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzksXG4gICAgICAgIDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICA4LFxuICAgICAgICA5MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyOCxcbiAgICAgICAgNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODQsXG4gICAgICAgIDYwLFxuICAgICAgICA0NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVXNZOVZlSVYraWhvV3ZWVWtFUnBqV2pEYVJDQ21JVzZ0bXNmclFoUzV5OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR3BUTmx4SzNUdEtxd1hHYTk2Z1RnZ1wiLFxuICBcInBob25lSWRcIjogXCJhOThhYmZjZC1lMzM4LTRhOTgtYWVkZS1kMTJlZTg2YWVkNTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDksXG4gICAgICAzNSxcbiAgICAgIDE4NSxcbiAgICAgIDkwLFxuICAgICAgMTE2LFxuICAgICAgMTM2LFxuICAgICAgMTMyLFxuICAgICAgMTQyLFxuICAgICAgMTY1LFxuICAgICAgMTU3LFxuICAgICAgMTg5LFxuICAgICAgNDMsXG4gICAgICAxMzQsXG4gICAgICAxMjEsXG4gICAgICAyNTAsXG4gICAgICA1MixcbiAgICAgIDEwMSxcbiAgICAgIDEsXG4gICAgICA3NixcbiAgICAgIDE2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMSxcbiAgICAgIDgxLFxuICAgICAgMTUxLFxuICAgICAgMjUxLFxuICAgICAgODcsXG4gICAgICAxNTMsXG4gICAgICAxMDMsXG4gICAgICA3OSxcbiAgICAgIDE5NSxcbiAgICAgIDI1NCxcbiAgICAgIDEzOCxcbiAgICAgIDE2NSxcbiAgICAgIDYsXG4gICAgICAxODcsXG4gICAgICA3OSxcbiAgICAgIDcyLFxuICAgICAgMjEzLFxuICAgICAgNjEsXG4gICAgICAxMjMsXG4gICAgICAyMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWDhXNEY2SldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NjYzMzAwMzg5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJMYXRoeVwiLFxuICAgIFwibGlkXCI6IFwiODY3MDc0MzczMjI0OTI6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLeXZ5TEFDRUtQWDFyb0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm5sUmlicTBrcDZDT2d6RVRlQW5jSS9XdklJeXdQTTY0enQwZ000Tk4zalU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNWp4R0Q3KzloTWVLZGdTVWlBQktITVNsaXN1eHJCL3ptV051QjE3MnhWV21WNmg4bVg3R0ppVWw0amlocnU4dzcxS3Bpc2xlK28rS2N2S2tRVUdQQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiREpEd2tocUc2Y1hEZ2E2bW1tYzlaeGpFaGJxWGExeHBMY0NQbFZHVGt6Qk1NM2g3d0VldXRXdWQrRmtSZndzTjBsTllRV0IvWFVhYkxidDlRd21yQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc2NjMzMDAzODk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM2Njc3NTJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
