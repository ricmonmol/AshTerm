/* eslint-disable import/no-anonymous-default-export */
function generateParagraph(data) {
  const rows = data.map((item) => {
    return Object.entries(item)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
  });

  return rows.join("\n---\n");
}
function cv(flags) {
  let cvLink =
    "https://drive.google.com/file/d/1vsys26qdW2mNBypJJM7UfJaldsUCLiG0/view?usp=sharing";
  if (flags && flags.includes("--es")) {
    cvLink =
      "https://drive.google.com/file/d/1KvJHGHzaDYnrWopjULWHbVESmWA6vfhZ/view?usp=sharing";
  }
  window.open(cvLink, "_blank");
  return "opening external link...";
}

export default {
  commands: {
    echo: {
      description: "Prints the given text to the console",
      usage: "echo <text>",
      fn: (...args) => args.join(" "),
    },
    about: {
      description: "About Me",
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
        return cv(flags);
      },
    },
    twitter: {
      description: "Opens my Twitter profile",
      usage: "twitter",
      fn: () => {
        window.open("https://twitter.com/ric_montecinos", "_blank");
        return "opening twitter handle...";
      },
    },
    spotify: {
      description: "Some songs I like",
      usage: "spotify",
      fn: () => {
        return (
          /*eslint-disable*/
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/09yjK1OemA1x4445C3OtEl?utm_source=generator&theme=0"
            width="50%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          /*eslint-enable*/
        );
      },
    },
    linkedin: {
      description: "Opens my LinkedIn profile",
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
      description: "Languages I know",
      usage: "languages",
      fn: () => {
        return `
                    these are the languages and tools I know.\n
                    Javascript, Mongodb, Express, React, Node, Redux, Sequelize, HTML, CSS, Linux, Raspberry, Arduino.\n
                `;
      },
    },
    github: {
      description: "Opens my GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com/ricmonmol", "_blank");
        return "opening github account...";
      },
    },
    projects: {
      description: "Projects I have worked on",
      usage: "projects",
      fn: () => {
        const projectData = [
          {
            name: "cryptowatcher",
            description: "Crypto monitor based on CoinGecko API",
            technologies: "React",
          },
          {
            name: "countriesapp",
            description: "An App about countries",
            technologies: "React, Node, Express, Sequelize, CSS Styles Modules",
          },
          {
            name: "urbanbuy",
            description: "An App for ecommerce managment",
            technologies: "React, Node, Mongodb, Express, Auth0",
          },
          {
            name: "rictermm",
            description:
              "A terminal styled protfolio, the one you are looking at right now",
            technologies: "React, Console-Emulator",
          },
        ];
        return `These are the project I have worked on, you can call them using their name as commands. 
          \n---\n${generateParagraph(projectData)}`;
      },
    },
    cryptowatcher: {
      description: "Opens deploy",
      usage: "github",
      fn: () => {
        window.open("https://just-a-cryptowatcher.netlify.app/", "_blank");
        return "opening a external link...";
      },
    },
    countriesapp: {
      description: "Opens my project repo",
      usage: "github",
      fn: () => {
        window.open("https://github.com/ricmonmol/countries_henry", "_blank");
        return "opening github project...";
      },
    },
    urbanbuy: {
      description: "Opens deploy",
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
