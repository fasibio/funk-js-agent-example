"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funk_js_agent_1 = require("funk-js-agent");
const con = new funk_js_agent_1.funkAgent("ws://127.0.0.1:3000", "changeMe04cf242924f6b5f96");
con.connect((connection) => {
    setInterval(() => {
        const ok = connection.send([{
                attr: {
                    container: "test js con",
                    container_id: "12344",
                    hostname: "localhost",
                    namespace: "",
                    service: "",
                },
                data: [JSON.stringify({
                        level: "warn",
                        nana: "bubu",
                        message: "Test"
                    })],
                searchindex: "test-js-agent",
                time: new Date(Date.now()),
                type: funk_js_agent_1.MessageType.Log,
            }]);
        console.log("send data", ok);
    }, 3000);
});
