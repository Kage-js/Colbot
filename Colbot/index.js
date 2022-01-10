
const tmi = require('tmi.js');
const options = {

  options: {
    debug: true,
  },
  connections: {
    cluster: "aws",
    reconnect: true,
  },
  identity: {
    username:name ,
    password:password ,
  },

  channels: [channelName],
};

const client = new tmi.client(options);
client.connect();
client.on('connected', (address, port,channel,user,message,self) => {
  client.action('Colbyco22', "COLBOT IS HERE!");
  if (self) return;

});
//MOD STUFF


function checkTwitchChat(channel,user,message,self){
  console.log(message)
  blockedWord = ["cat",'dog']
  //if (user["display-name"] ==="ColbotBeta") return;
  let shouldSendMessage = false
  //check messages
    //shouldSendMessage = blockedWord.some(blockedWord => message.includes(blockedWord.toLowerCase()))
    blockedWord.forEach(word =>{
      if (message.includes(word)){
        console.log(blockedWord)
        //tell user
        client.say(channel, `@${user.username}, Sorry! your message was deleted.`)
        //delete message
        client.deletemessage("Colbyco22", user.id)
        .then((data) => {
          // data returns [channel]
        }).catch((err) => {
          //
        });
        client.whisper("username", `Your message was deleted due to the use of the word ${word}`)
          .then((data) => {
              // data returns [username, message]
          }).catch((err) => {
              //
          });
      }
    })
}
  client.on("join", (channel, username, self) => {
    if(self) {
      return
    };
    if (username == "streamlabs"){                                                                                                                                                                                               
      return
    }
    cd 
    client.say("Colbyco22", ` !so ${username}`)
  })
 //FUN STUFF
client.on("chat", (channel,user,message,self) =>{
  checkTwitchChat(channel,user,message,self)
  if (message === "!assasin"){
    client.action("Colbyco22", "Colbot stalks it's prey")
    client.action("Colbyco22",`${user["display-name"]} was assasinated` )
  }

  if (message.includes("!rps")){
    console.log(user)
    message = message.toLowerCase()
    if (message.includes("!rpsgod")){
      message = message.toLowerCase()
      let hardmode = Math.random()
      if(hardmode < 0.01){
        let choices = ["Rock", "Paper", "Scissors"]
        let choice = choices[Math.floor(Math.random() *choices.length)];
        if (choice === "Rock"){
          if (message.includes("rock")){
            client.say("Colbyco22", `${user["display-name"]} I picked rock, issa draw`)
          }
          if (message.includes("paper")){
            client.say("Colbyco22", `${user["display-name"]} I picked rock, colbyc2Cry i've been defeated`)
            client.say("Colbyco22", `!addpoints ${user["display-name"]} 100000`)
          }
          if (message.includes("scissors")){
            client.say("Colbyco22", `${user["display-name"]} I picked rock, You're literally so free, boxed you like a fish`)
          }
        }
        if (choice === "Paper"){
          if (message.includes("rock")){
            client.say("Colbyco22",  `${user["display-name"]} I picked paper, You're literally so free, boxed you like a fish`)
          }
          if (message.includes("paper")){
            client.say("Colbyco22", `${user["display-name"]} I picked paper, issa draw`)
          }
          if (message.includes("scissors")){
            client.say("Colbyco22",  `${user["display-name"]} I picked paper, colbyc2Cry i've been defeated `)
            client.say("Colbyco22", `!addpoints ${user["display-name"]} 100000`)
          }
        }
        if (choice === "Scissors"){
          if (message.includes("rock")){
            client.say("Colbyco22",  `${user["display-name"]} I picked scissors, colbyc2Cry i've been defeated`)
            client.say("Colbyco22", `!addpoints  ${user["display-name"]} 100000`)
          }
          if (message.includes("paper")){
            client.say("Colbyco22", `${user["display-name"]} I picked scissors, You're literally so free, boxed you like a fish`)
          }
          if (message.includes("scissors")){
            client.say("Colbyco22", `${user["display-name"]} I picked scissors, issa draw`)
          }
        }
    }else{
      if (message.includes("rock")){
        client.say("Colbyco22", `${user["display-name"]} I picked Paper, you're trash kid gimme dem points`)
        client.say("Colbyco22", ` !removepoints ${user["display-name"]} 500`)
      }else if ( message.includes("paper")){
          client.say("Colbyco22", `${user["display-name"]} I picked Scissors, you're trash kid gimme dem points`)
          client.say("Colbyco22", ` !removepoints ${user["display-name"]} 500`)
      } else if (message.includes("scissors")){
          client.say("Colbyco22", `${user["display-name"]} I picked Rock, you're trash kid gimme dem points`)
          client.say("Colbyco22", ` !removepoints ${user["display-name"]} 500`)
      }
    }
    }else{
    let choices = ["Rock", "Paper", "Scissors"]
    let choice = choices[Math.floor(Math.random() *choices.length)];
    if (choice === "Rock"){
      if (message.includes("rock")){
        client.say("Colbyco22", `${user["display-name"]} I picked rock, issa draw`)
      }
      if (message.includes("paper")){
        client.say("Colbyco22", `${user["display-name"]} I picked rock, colbyc2Cry i've been defeated`)
        client.say("Colbyco22", `!addpoints ${user["display-name"]} 100`)
      }
      if (message.includes("scissors")){
        client.say("Colbyco22", `${user["display-name"]} I picked rock, You're literally so free, boxed you like a fish`)
      }
    }
    if (choice === "Paper"){
      if (message.includes("rock")){
          client.say("Colbyco22",  `${user["display-name"]} I picked paper, You're literally so free, boxed you like a fish`)
      }
      if (message.includes("paper")){
        client.say("Colbyco22", `${user["display-name"]} I picked paper, issa draw`)
      }
      if (message.includes("scissors")){
        client.say("Colbyco22",  `${user["display-name"]} I picked paper, colbyc2Cry i've been defeated `)
          client.say("Colbyco22", `!addpoints ${user["display-name"]} 100`)
      }
    }
    if (choice === "Scissors"){
      if (message.includes("rock")){
        client.say("Colbyco22",  `${user["display-name"]} I picked scissors, colbyc2Cry i've been defeated`)
          client.say("Colbyco22", `!addpoints  ${user["display-name"]} 100`)
      }
      if (message.includes("paper")){
        client.say("Colbyco22", `${user["display-name"]} I picked scissors, You're literally so free, boxed you like a fish`)
      }
      if (message.includes("scissors")){
        client.say("Colbyco22", `${user["display-name"]} I picked scissors, issa draw`)
      }
    }
  }
}

  if (message.toLowerCase().includes("!kitty")){
    client.action("Colbyco22", "https://www.youtube.com/watch?app=desktop&v=uHKfrz65KSU")
  }

  if(message.includes("!addpoints") && user["display-name"]=="elev8_42"){
    client.say("Colbyco22", ` !removepoints ${user["display-name"]} 9007100254740991`)
  }

  client.on('chat', function(channel, user, message, self) {
  if(message =="!testsound"){
    var audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    if(typeof Audio != "undefined") {
    client.say("Colbyco22", "OWA OWA! >:3")
  }else{
    console.log(Audio)
    client.say("Colbyco22", "Dies ist eine Testausgabe zur Funktionalität der Audioausgabe");
    //Here it should play the sound on my local PC
    audio.play();
  }
  }
});



  client.on("raided", (channel, username, viewers) => {
    console.log(channel)
    client.say("Colbyco22", ` !so ${user["display-name"]}`)
  });
});
