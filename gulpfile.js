import gulp from "gulp";
import sass from "gulp-sass";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const gulpSass = sass(require("sass"));

const SCSS_FILES_PATH = "./src/scss/*.scss";
const CSS_OUTPUT_FILE_PATH = "./src/assets/css";

function sassCompiler() {
    return gulp.src(SCSS_FILES_PATH)
        .pipe(gulpSass({ outputStyle: "compressed" }))
        .pipe(gulp.dest(CSS_OUTPUT_FILE_PATH));
}

gulp.task('default', sassCompiler);

