import {FunkAgent, MessageType} from 'funk-agent'


const con = new FunkAgent("ws://127.0.0.1:3000","changeMe04cf242924f6b5f96")
setInterval(() => {
  con.send([{
    attr: {
      container: "test js con",
      container_id: "12344",
      hostname: "localhost",
      namespace:"",
      service: "",
    },
    data:[JSON.stringify({
      level: "warn",
      nana: "bubu",
      message: "Test"
    })],
    searchindex: "test-js-agent",
    time: new Date(Date.now()),
    type: MessageType.Log,
  }])
}, 3000)
