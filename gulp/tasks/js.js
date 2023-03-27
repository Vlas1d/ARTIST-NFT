import webpack from "webpack-stream";
import rename from 'gulp-rename';

export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({ //виведення сповіщень про помилку у Windows
                title: "JS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'script.js',
            }
        }))

        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.stream())
}