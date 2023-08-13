import fileinclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";

export const html = () => {
    return app.gulp.src(app.path.src.html)
      .pipe(fileinclude())
      .pipe(app.plugins.replace(/@img\//g, 'img/'))
      .pipe(webpHtmlNosvg())
      .pipe(
        versionNumber({
            
        })
      )
      .pipe(app.gulp.dest(app.path.build.html))
}