var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var babel       = require('gulp-babel');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

// Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("src/js/bootstrap"))
        .pipe(browserSync.stream());
});

// Copy files into dist folder
gulp.task('copy', function() {
    return gulp.src([
        'src/*.html',
        'src/**/*.jpg',
        'src/**/*.png',
        'src/**/*.svg',
        'src/**/*.css',
        'src/**/**/*.**.js'
    ])
    .pipe(gulp.dest('dist'));
});

// Process javascript into babel
gulp.task('processJs', function() {
    return gulp.src('src/js/*.js')
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))
    .pipe(gulp.dest('dist/js'));
});

// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', function() {

    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], gulp.series('sass'));
    gulp.watch(['src/*.html', 'src/*.js']).on('change', browserSync.reload);
}));

gulp.task('default', gulp.parallel('js', 'serve', 'copy', 'processJs'));