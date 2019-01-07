const PORT = 8080;

const inquirer = require("inquirer");

const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: PORT });

async function prompt(wsConnection) {
    let chatCommand;

    const questions = [
        {
            type: "input",
            name: "chat",
            message: "Text to send (or type <exit> for exit)"
        }
    ];

    return await
                inquirer
                        .prompt(questions)
                        .then(answers => {

                            chatCommand = answers.chat;
                            wsConnection.send(chatCommand);

                            return chatCommand
                        });
}

wss.on("connection", async function connection(wsConnection) {


    wsConnection.on("message", function incoming(message) {
        console.log("\nreceived: %s\n", message);
    });

    let inputText = "";

    while (inputText !== "exit") {
        inputText = await prompt(wsConnection)
    }

    process.exit()
});

console.log(`Starting on port ${PORT}`);