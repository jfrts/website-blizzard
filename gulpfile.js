import browserSync from "browser-sync";
import gulp from "gulp";
import autoPrefixer from "gulp-autoprefixer";
import sass from "gulp-sass";
import { createRequire } from "module";

const SCSS_FILES_PATH = "./src/scss/*.scss";
const CSS_OUTPUT_FILE_PATH = "./src/assets/css";

const require = createRequire(import.meta.url);
const gulpSass = sass(require("sass"));
const browserSyncInstance = browserSync.create();

function sassCompiler() {
    return gulp.src(SCSS_FILES_PATH)
        .pipe(gulpSass({ outputStyle: "compressed" }))
        .pipe(autoPrefixer({
            overrideBrowserslist: ["last 2 versions"],
            cascade: false
        }))
        .pipe(gulp.dest(CSS_OUTPUT_FILE_PATH))
        .pipe(browserSyncInstance.stream());
}

gulp.task("default", sassCompiler);

function watch() {
    gulp.watch(SCSS_FILES_PATH, sassCompiler);
    gulp.watch("./src/*.html").on("change", browserSyncInstance.reload);
}

gulp.task("watch", watch);

function browser() {
    browserSyncInstance.init({
        server: {
            baseDir: "./src/"
        }
    });
}

gulp.task("browser-sync", browser);

gulp.task("default", gulp.parallel("watch", "browser-sync"));