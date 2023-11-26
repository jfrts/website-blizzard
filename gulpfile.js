import gulp from "gulp";
import autoPrefixer from "gulp-autoprefixer";
import sass from "gulp-sass";
import { createRequire } from "module";

const SCSS_FILES_PATH = "./src/scss/*.scss";
const CSS_OUTPUT_FILE_PATH = "./src/assets/css";

const require = createRequire(import.meta.url);
const gulpSass = sass(require("sass"));

function sassCompiler() {
    return gulp.src(SCSS_FILES_PATH)
        .pipe(gulpSass({ outputStyle: "compressed" }))
        .pipe(autoPrefixer({
            overrideBrowserslist: ["last 2 versions"],
            cascade: false
        }))
        .pipe(gulp.dest(CSS_OUTPUT_FILE_PATH));
}

gulp.task("default", sassCompiler);

function watch() {
    gulp.watch(SCSS_FILES_PATH, sassCompiler);
}

gulp.task("default", watch);