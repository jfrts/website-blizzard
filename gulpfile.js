import browserSync from "browser-sync";
import gulp from "gulp";
import autoPrefixer from "gulp-autoprefixer";
import concat from "gulp-concat";
import sass from "gulp-sass";
import { createRequire } from "module";

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
    return gulp.src('./src/assets/js/scripts/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./src/assets/js/scripts/dist/'));
}
gulp.task('scripts', scripts);

function watch() {
    gulp.watch(`${WEBSITE_BASE_DIR}/scss/*.scss`, sassCompiler);
    gulp.watch(`${WEBSITE_BASE_DIR}/*.html`).on("change", browserSyncInstance.reload);
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

gulp.task("default", gulp.parallel("watch", "browser-sync", "sass", "scripts"));