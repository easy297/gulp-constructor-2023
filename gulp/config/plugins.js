import replace from "gulp-replace"; // Search and replace
import plumber from "gulp-plumber"; // Notify errors
import notify from "gulp-notify"; // Messages (tips)
import browserSync from 'browser-sync'; // Local Server
import ifPlugin from "gulp-if";
import newer from "gulp-newer"; // Changes tracker

export const plugins = {
    replace : replace,
    plumber: plumber,
    notify: notify,
    browserSync: browserSync,
    if: ifPlugin,
    newer: newer
}