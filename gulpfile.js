import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
 
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Tasks import
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";

// Function to watch changes in files
function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
}

const mainTasks = gulp.parallel(copy, html);

// Running tasks
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));


// Running tasks by default
gulp.task('default', dev);