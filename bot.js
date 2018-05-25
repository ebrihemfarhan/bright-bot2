const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
 
  }
});

client.on('ready', function(){
    var ms = 60000 ;
    var setGame = ['!.help | !.invite'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[By ebra7im],`http://www.twitch.tv/GamerzBot`);
    }, ms);

});




client.login('NDQ5NDIxNjM4MTk5NjcyODUy.DenqWw.m00mTMpItH-4RXDezHyhyYt_GJs');
