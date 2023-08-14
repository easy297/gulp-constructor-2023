# Gulp


## To work use these commands

- To install all dependencies: `$ npm install`;
- To run the Gulp build process: `$ npm run dev`;
- To build the project in `"production"` mode: `$ npm run build`;

## What does Gulp do?

- compresses HTML in `production` mode;
- removes comments from HTML in `production` mode;
- collects SCSS files, adds vendor prefixes;
- removes comments from SCSS files;
- in `production` mode compresses CSS and makes a copy without compression;
- converts fonts to `.ttf`, and from `.ttf` to `woff/woff2`;
- creates a file for connecting fonts. This file is created in this path: `src/scss/config/fonts.scss`, it looks like this:

```scss
@font-face {
  font-family: Inter;
  font-display: swap;
  src: url('../fonts/Inter-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}
```

### WARNING!!!

> If there is already a `fonts.scss` file in the `src/scss/config` folder - then when adding new fonts **SHOULD DELETE** the old `fonts.scss` file. Don't worry, when you run the build again, Gulp will convert all new fonts and create a new `fonts.scss` file.

Further, what else the assembly can do:

- compresses images and converts them additionally to `.webp` format and includes them if the browser supports this format;
- copies the `/static` folder with its contents to the final assembly. That is, any files can be placed in this folder and it will be added to the final assembly;
- a separate command `$ npm run svgSprive` creates "svg sprites";
- before each start of the collector cleans the folder with the final project, so as not to collect garbage;
- with a separate command `$ npm run zip` you can archive the final folder for the customer **with the name of the project**;
- also for development, `gulp` starts the server with automatic reloading of the window in the browser when changing files in the project;
- a separate command `$ npm run deployFTP` uploads the final project to the hosting. Options for sending the project to the desired hosting are specified in the file: `gulp/config/ftp.js`.

## What does WebPack do?

- it is `webpack` in this assembly that processes JavaScript files;
- modular connection of `import/export` scripts is supported;
- when importing, there is no need to write the `.js` file extension, and if you are importing from the `index.js` file, you do not need to specify this:


I did the following assembly by the example of a youtube channel [FreelancerLifeStyle] (https://www.youtube.com/@FreelancerLifeStyle)
and github author [StarkElessar] (https://github.com/StarkElessar)
