var gulp = require('gulp');
var process = require('process');

var concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    changed = require('gulp-changed'),
    clean = require('gulp-clean'),
    cache = require('gulp-cached'),
    coffee = require('gulp-coffee'),
    livereload = require('gulp-livereload');

var version = '1.0.0';

var minifyOpts = {

};

var imagesOpts = {
    optimizationLevel: 5,
    progressive: true,
    interlaced: true
};

var sassOpts = {
    includePaths: [
        'vendor/foundation/scss',
        'vendor/mindy-sass/mindy'
    ]
};

var dst = {
    js: 'dist/js',
    css: 'dist/css',
    images: 'dist/images',
    sass: 'css',
    fonts: 'dist/fonts'
};

var paths = {
    js: [
        'vendor/jquery/dist/jquery.min.js',
        'vendor/modernizr/modernizr.js',
        'vendor/jquery.cookie/jquery.cookie.js',
        'vendor/fastclick/lib/fastclick.js',
        'vendor/foundation/js/foundation.min.js',
        'vendor/jquery-form/jquery.form.js',
        'vendor/mmodal/js/jquery.mindy.modal.js',
        'vendor/fancybox/source/jquery.fancybox.pack.js',
        'vendor/fancybox/source/helpers/jquery.fancybox-thumbs.js',
        'vendor/fancybox/source/helpers/jquery.fancybox-buttons.js',
        'vendor/fancybox/source/helpers/jquery.fancybox-media.js',
        'vendor/jquery.inputmask/dist/jquery.inputmask.bundle.min.js',
        'vendor/slick-carousel/slick/slick.js',
        'vendor/sticky-kit/jquery.sticky-kit.js',
        'vendor/jquery.inputmask/dist/inputmask/jquery.inputmask.js',
        'vendor/pace/pace.js',
        'vendor/underscore/underscore.js',

        'js/ajax_validation.js',
        'js/comments.js',
        'js/csrf.js',
        'js/endless.js',
        'js/endless_on_scroll.js',
        'js/chat.js',
        'js/app.js'
    ],
    coffee: 'js/**/*.coffee',
    images: [
        'images/**/*'
    ],
    fonts: [
        'fonts/Glyphico/fonts/*',
        'fonts/glyphico-social/fonts/*',
        'fonts/lato/fonts/*'
    ],
    sass: 'scss/**/*.scss',
    css: [
        'vendor/slick-carousel/slick/slick.css',
        'css/**/*.css',

        'fonts/glyphico-social/css/glyphico-social.css',
        'fonts/Glyphico/css/glyphico.css',
        'fonts/lato/css/lato.css'
    ]
};

gulp.task('fonts', function() {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest(dst.fonts))
        .pipe(livereload());
});

gulp.task('coffee', function() {
    gulp.src(paths.coffee)
        .pipe(coffee({
            bare: true
        }).on('error', function(err) {
            console.log(err);
        }))
        .pipe(gulp.dest(dst.js))
});

gulp.task('js', ['coffee'], function() {
    return gulp.src(paths.js)
        .pipe(uglify())
        .pipe(concat(version + '.all.js'))
        .pipe(gulp.dest(dst.js))
        .pipe(livereload());
});

gulp.task('images', function() {
    return gulp.src(paths.images)
        .pipe(changed(dst.images))
        .pipe(imagemin(imagesOpts))
        .pipe(gulp.dest(dst.images))
        .pipe(livereload());
});

gulp.task('sass', function() {
    return gulp.src(paths.sass)
        .pipe(sass(sassOpts))
        .pipe(gulp.dest(dst.sass));
});

gulp.task('css', ['sass'], function() {
    return gulp.src(paths.css)
        .pipe(minifyCSS(minifyOpts))
        .pipe(concat(version + '.all.css'))
        .pipe(gulp.dest(dst.css))
        .pipe(livereload());
});

// Rerun the task when a file changes
gulp.task('watch', ['default'], function() {
    livereload.listen();

    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.sass, ['css']);
});

// Clean
gulp.task('clean', function() {
    return gulp.src(['dist/*'], {
        read: false
    }).pipe(clean());
});

gulp.task('default', ['clean'], function() {
    return gulp.start('js', 'css', 'images', 'fonts');
});