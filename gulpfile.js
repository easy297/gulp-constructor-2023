import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
 
global.app = {
    isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Tasks import
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import {images} from "./gulp/tasks/images.js";
// import {otfToTtf, ttfToWoff, fontsStyle} from "./gulp/tasks/fonts.js";
// import {svgSprive} from "./gulp/tasks/svgSprive.js";
// import {zip} from "./gulp/tasks/zip.js";
// import {ftp} from "./gulp/tasks/ftp.js";

// Function to watch changes in files
function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, images);
}

const mainTasks = gulp.parallel(copy, html, scss, js, images);

// Running tasks
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));


// Running tasks by default
gulp.task('default', dev);