import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';
import rename from 'gulp-rename';

export const images = () => {
    return app.gulp.src(app.path.src.images, { sourcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({ //виведення сповіщень про помилку у Windows
                title: "IMAGES",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 4
        }))
        .pipe(webp())
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.gulp.src(app.path.src.images))
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true,
            optimizationLevel: 4
        }))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.gulp.src(app.path.src.svg))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browserSync.stream())
}