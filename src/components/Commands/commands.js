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
        return `My name is Ricardo Montecinos, I live in Tandil, Argentina.
        \nI'm a fullstack developer, I speak fluent english, I also like urban farming, 3D printing, archery, music, and a lot of other nerd stuff.\n`;
      },
    },
    cv: {
      description: "Resume in english, for spanish use the flag --es",
      usage: "cv [--en|--es]",
      fn: (flags) => {
        let cvLink =
          "https://drive.google.com/file/d/1vsys26qdW2mNBypJJM7UfJaldsUCLiG0/view?usp=sharing";
        if (flags && flags.includes("--es")) {
          cvLink =
            "https://drive.google.com/file/d/1KvJHGHzaDYnrWopjULWHbVESmWA6vfhZ/view?usp=sharing";
        }
        window.open(cvLink, "_blank");
        return "opening external link...";
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
                    these are the languages and tools I know.\n
                    Javascript, Mongodb, Express, React, Node, Redux, Sequelize, HTML, CSS, Linux, Raspberry, Arduino.\n
                `;
      },
    },
    projects: {
      description: "Projects I have worked on.",
      usage: "projects",
      fn: () => {
        return `
                    Cool projects I have worked on. You can call them by thier names as commands.\n---\n
                    | Name \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0| Description\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 | Technologies
                    |------------------|------------------------------|-------------------------------
                    |'cryptowatcher'   | 'Monitor with CoinGecko API' | 'React'
                    |'countriesapp'    | 'An App about countries'\u00A0\u00A0\u00A0\u00A0 | 'React-Node-Express-Sequelize'
                    |'urbanbuy'        | 'An App for ecommerce'\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 | 'React-Node-Mongodb-Express'

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
