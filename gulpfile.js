import browserSync from "browser-sync";
import gulp from "gulp";
import autoPrefixer from "gulp-autoprefixer";
import concat from "gulp-concat";
import sass from "gulp-sass";
import babel from "gulp-babel";
import { createRequire } from "module";
import gulpUglify from "gulp-uglify";

const WEBSITE_BASE_DIR = "./src";

const require = createRequire(import.meta.url);
const gulpSass = sass(require("sass"));
const browserSyncInstance = browserSync.create();

function sassCompiler() {
    return gulp.src(`${WEBSITE_BASE_DIR}/scss/*.scss`)
        .pipe(gulpSass({ outputStyle: "compressed" }))
        .pipe(autoPrefixer({
            overrideBrowserslist: ["last 2 versions"],
            cascade: false
        }))
        .pipe(gulp.dest(`${WEBSITE_BASE_DIR}/assets/css`))
        .pipe(browserSyncInstance.stream());
}
gulp.task("sass", sassCompiler);

function scripts() {
    return gulp.src(`${WEBSITE_BASE_DIR}/assets/js/scripts/*.js`)
        .pipe(concat('all.js'))
        .pipe(babel({
            presets: ["@babel/env"]
        }))
        .pipe(gulpUglify())
        .pipe(gulp.dest(`${WEBSITE_BASE_DIR}/assets/js/dist/`));
}
gulp.task('scripts', scripts);

function plugins() {
    return gulp
        .src([
            `${WEBSITE_BASE_DIR}/assets/js/lib/aos.min.js`,
            `${WEBSITE_BASE_DIR}/assets/js/lib/swiper.min.js`
        ])
        .pipe(concat("plugins.js"))
        .pipe(gulp.dest(`${WEBSITE_BASE_DIR}/assets/js`))
        .pipe(browserSync.stream());
}

gulp.task("plugins", plugins);

function pluginsStyles() {
    return gulp
        .src(`${WEBSITE_BASE_DIR}/assets/css/lib/*.css`)
        .pipe(concat("plugins.css"))
        .pipe(gulp.dest(`${WEBSITE_BASE_DIR}/assets/css`))
        .pipe(browserSync.stream());
}

gulp.task("pluginsStyles", pluginsStyles);

function watch() {
    gulp.watch(`${WEBSITE_BASE_DIR}/scss/*.scss`, sassCompiler);
    gulp.watch(`${WEBSITE_BASE_DIR}/*.html`).on("change", browserSyncInstance.reload);
    gulp.watch(`${WEBSITE_BASE_DIR}/assets/js/lib/*.js`, plugins);
    gulp.watch(`${WEBSITE_BASE_DIR}/assets/css/lib/*.css`, pluginsStyles);
    gulp.watch(`${WEBSITE_BASE_DIR}/assets/js/scripts/*.js`, scripts);
}
gulp.task("watch", watch);

function browser() {
    browserSyncInstance.init({
        server: {
            baseDir: WEBSITE_BASE_DIR
        }
    });
}

gulp.task("browser-sync", browser);

gulp.task("default", gulp.parallel(
    "watch",
    "browser-sync",
    "sass",
    "scripts",
    "plugins",
    "pluginsStyles"
));