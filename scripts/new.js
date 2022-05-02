#! /usr/bin/env node
import shell from "shelljs";
import chalk from "chalk";
import meow from "meow";
import fs from "fs";

const log = console.log;

const cli = meow(
  `
	Usage
	  $ npm run create <input>

	Options
	  --year, -y  Set the year
	  --region, -r  Set the region

	Examples
	  $  npm run create
	  🌈 unicorns 🌈
`,
  {
    importMeta: import.meta,
    input: ["region", "year"],
  }
);

// Bomb if git doesn't exist
if (!shell.which("git")) {
  shell.echo("Sorry, this script requires git");
  shell.exit(1);
}

// Bomb if git doesn't exist
if (!shell.which("vercel")) {
  shell.echo("Sorry, this script requires vercel");
  shell.exit(1);
}

const region = cli.input[0];
const year = cli.input[1];

const nowjsontemplate = {
  name: `barcamp-${region.toLowerCase()}-${year}`,
  version: 2,
  builds: [
    {
      use: "@now/static",
      config: {
        distDir: "_site",
      },
    },
  ],
  alias: [`${region}-${year}.barcamp.events`],
  routes: [{ src: "^/(.*)", dest: "_site/$1" }],
};

const path = `./${region}/${year}`;

fs.stat(path, (error, stats) => {
  // If a directory already exists here...
  if (!error) {
    console.error(`${chalk.red.bold("Error!")} The directory ${path} is not an empty directory.`);
    return;
  }

  console.log(`${chalk.blue.bold("Cloning")} ./_template into ${path}`);

  fs.stat(`${path}/..`, (error, stats) => {
    if (!error) {
      shell.mkdir("-p", `${path}/..`);
    }
  });

  shell.cp("-R", "./_template", path);

  console.log(`${chalk.blue.bold("Writing")} Vercel config to ${path}/now.json`);

  fs.writeFile(`${path}/now.json`, JSON.stringify(nowjsontemplate, null, " "), (err) => {
    if (err) {
      console.error(err);
    }

    console.log(`${chalk.blue.bold("Deploying")} ${path} to vercel`);

    shell.cd(path);
    shell.exec("vercel --confirm --scope=barcamp", { silent: true });

    console.log(`${chalk.green.bold("Done!")} The Vercel site's URL is now copied to your clipboard!`);
  });
});
