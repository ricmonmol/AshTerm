/* eslint-disable import/no-anonymous-default-export */
export default {
  commands: {
    echo: {
      description: "Prints the given text to the console",
      usage: "echo <text>",
      fn: (...args) => args.join(" "),
    },
    about: {
      description: "About Me.",
      usage: "about",
      fn: () => {
        return `About Me.\n---\n
        My name is Ricardo Montecinos, I live in Tandil, Argentina.
        \nI'm a fullstack developer, I speak fluent english, I also like urban farming, 3D printing, archery, music, and a lot of other nerd stuff.\n---\n`;
      },
    },
    twitter: {
      description: "Opens my Twitter profile.",
      usage: "twitter",
      fn: () => {
        window.open("https://twitter.com/ric_montecinos", "_blank");
        return "opening twitter handle...";
      },
    },
    github: {
      description: "Opens my GitHub profile.",
      usage: "github",
      fn: () => {
        window.open("https://github.com/ricmonmol", "_blank");
        return "opening github account...";
      },
    },
    linkedin: {
      description: "Opens my LinkedIn profile.",
      usage: "LinkedIn",
      fn: () => {
        window.open(
          "https://www.linkedin.com/in/ricardo-montecinos-molina/",
          "_blank"
        );
        return "opening linkedin account...";
      },
    },
    languages: {
      description: "Languages I know.",
      usage: "languages",
      fn: () => {
        return `
                    these are the languages and tools I know.\n---\n
                    Javascript, Mongodb, Express, React, Node, Redux, Sequelize, HTML, CSS, Linux, Raspberry, Arduino.\n---\n
                `;
      },
    },
    projects: {
      description: "Projects I have worked on.",
      usage: "projects",
      fn: () => {
        return `
                    Cool projects I have worked on. You can call them by thier names as commands\n---\n
                    'cryptowatcher'   | 'monitor with CoinGecko API' - 'React'
                    'countriesapp'    | 'An App about countries' - 'React-Node-Express-Sequelize'
                    'urbanbuy'        | 'An App for ecommerce' - 'React-Node-Mongodb-Express'
                `;
      },
    },
    cryptowatcher: {
      description: "Opens deploy.",
      usage: "github",
      fn: () => {
        window.open("https://just-a-cryptowatcher.netlify.app/", "_blank");
        return "opening a external link...";
      },
    },
    countriesapp: {
      description: "Opens my project repo.",
      usage: "github",
      fn: () => {
        window.open("https://github.com/ricmonmol/countries_henry", "_blank");
        return "opening github project...";
      },
    },
    urbanbuy: {
      description: "Opens deploy.",
      usage: "github",
      fn: () => {
        window.open("https://urbanbuy.netlify.app/", "_blank");
        return "opening a external link...";
      },
    },
  },
  overwrites: {
    help: {
      description: "List all available commands",
      usage: "help",
    },
    clear: {
      description: "Clears the terminal",
      usage: "clear",
    },
  },
};
