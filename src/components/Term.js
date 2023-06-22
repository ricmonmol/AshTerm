import Terminal from "react-console-emulator";
import commands from "../components/Commands/commands.js";
import React from "react";

export default function Term() {
  const cmds = commands.commands;
  const owrs = commands.overwrites;
  const terminal = React.createRef();
  const prompt = "ricardo@ricardoterm:~$ ";

  return (
    <Terminal
      ref={terminal}
      welcomeMessage={[
        "Hey, my name is Ricardo, welcome to my portfolio!",
        "This is a terminal emulator made with React.",
        "Type 'help' to see a list of commands.",
      ]}
      commands={{
        clear: {
          description: "Clears the terminal",
          usage: "clear",
          fn: () => {
            terminal.current.clearStdout();
          },
        },
        help: {
          description: "List all available commands",
          usage: "help",
          fn: () => {
            return `
                            ${Object.keys(owrs)
                              .map(
                                (cmd) =>
                                  `${cmd}${" ".repeat(
                                    Math.max(0, 14 - cmd.length)
                                  )} | ${owrs[cmd].description}${" ".repeat(
                                    Math.max(
                                      0,
                                      39 - owrs[cmd].description.length
                                    )
                                  )}`
                              )
                              .join("\n")}
                            ${Object.keys(cmds)
                              .map(
                                (cmd) =>
                                  `${cmd}${" ".repeat(
                                    Math.max(0, 14 - cmd.length)
                                  )} | ${cmds[cmd].description}${" ".repeat(
                                    Math.max(
                                      0,
                                      39 - cmds[cmd].description.length
                                    )
                                  )}`
                              )
                              .join("\n")}
                        `;
          },
        },
        ...cmds,
      }}
      promptLabel={prompt}
      autoFocus
      style={{
        backgroundColor: null,
        minHeight: null,
        maxHeight: null,
        overflow: "auto",
        height: "100%",
        width: "100%",
      }}
      styleEchoBack="fullInherit"
      contentStyle={{
        color: "#55FFFF",
        fontWeight: "normal",
        paddingLeft: null,
      }} // Text colour
      promptLabelStyle={{ color: "#55FF55", fontWeight: "normal" }} // Prompt label colour
      inputTextStyle={{ color: "#ffffff", fontWeight: "normal" }}
      messageStyle={{
        color: "#55FFFF",
        fontWeight: "normal",
        paddingLeft: null,
      }}
      scrollBehavior="auto"
      noDefaults
    />
  );
}
