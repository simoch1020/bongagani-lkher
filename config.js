module.exports = {
  TOKEN: "",
  ownerID: ["1143613800298332170", ""],
  botInvite: "",
  supportServer: "",
  mongodbURL: "mongodb+srv://simoegs:simoch@cluster0.z3cjfv2.mongodb.net/?retryWrites=true&w=majority",
  status: 'simo GG',
  commandsDir: './commands',
  language: "en",
  embedColor: "00fbff",
  errorLog: "",


  sponsor: {
    status: true,
    url: "https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A",
  },

  voteManager: {
    status: false,
    api_key: "AIzaSyD4Ce3kYGG5LQhemWeIwIMadoJSBNObqB0",
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playnormal", "playlist", "queue", "resume", "save", "play", "skip", "stop", "time", "volume"],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 10000000,
      },

    },

    maxVol: 150,

  }
}
