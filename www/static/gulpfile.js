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
    livereload = require('gulp-livereload'),
    angularTemplates = require('gulp-angular-templates');

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
if (process.env.USER == 'aleksandrgordeev') {
    sassOpts.includePaths.push('/Library/Ruby/Gems/1.8/gems/compass-0.12.6/frameworks/compass/stylesheets');
} else {
    sassOpts.includePaths.push('/Library/Ruby/Gems/2.0.0/gems/compass-0.12.6/frameworks/compass/stylesheets');
}

var dst = {
    js: 'dist/js',
    css: 'dist/css/main',
    images: 'dist/images',
    sass: './css/main',
    fonts: 'dist/fonts',
    templates: './js'
};

var paths = {
    templates: 'templates/**/*.html',
    js: [
        'vendor/jquery/dist/jquery.min.js',
        'vendor/modernizr/modernizr.js',
        'vendor/jquery.cookie/jquery.cookie.js',
        'vendor/fastclick/lib/fastclick.js',
        'vendor/foundation/js/foundation.min.js',
        'vendor/jquery-form/jquery.form.js',
        'vendor/mmodal/js/jquery.mindy.modal.js',
        'vendor/fancybox/source/jquery.fancybox.pack.js',
        'vendor/jquery.inputmask/dist/jquery.inputmask.bundle.min.js',
        'vendor/slick-carousel/slick/slick.js',
        'vendor/sticky-kit/jquery.sticky-kit.js',
        'vendor/jquery.inputmask/dist/inputmask/jquery.inputmask.js',
        'vendor/pace/pace.js',
        'vendor/underscore/underscore.js',
        'vendor/pines-notify/pnotify.core.js',
        'vendor/pines-notify/pnotify.buttons.js',
        'vendor/pines-notify/pnotify.callbacks.js',
        'vendor/pines-notify/pnotify.confirm.js',
        'vendor/pines-notify/pnotify.desktop.js',
        'vendor/pines-notify/pnotify.history.js',
        'vendor/pines-notify/pnotify.nonblock.js',

//        'vendor/angular/angular.js',
//        'vendor/angular-route/angular-route.js',
//        'vendor/angular-resource/angular-resource.js',
//        'vendor/angular-sanitize/angular-sanitize.js',
//        'vendor/angular-block-ui/dist/angular-block-ui.js',
//        'vendor/angular-cookies/angular-cookies.min.js',
//        'vendor/angular-pines-notify/src/pnotify.js',
//        'vendor/ngDialog/js/ngDialog.js',
//        'vendor/angular-foundation/mm-foundation.js',
//        'vendor/angular-foundation/mm-foundation-tpls.js',
//        'vendor/angular-youtube-mb/src/angular-youtube-embed.js',

        'js/ajax_validation.js',
        'js/comments.js',
        'js/csrf.js',
        'js/endless.js',
        'js/endless_on_scroll.js',
        'js/chat.js',
        'js/app.js'
//        'js/init.js',
//        'js/templates.js',
//        'js/main.js',
//        'js/directives/**/*.js',
//        'js/controllers/**/*.js'
    ],
    images: [
        'images/**/*'
    ],
    fonts: [
        'fonts/octicons/fonts/*'
    ],
    sass: 'scss/main/**/*.scss',
    css: [
        'vendor/slick-carousel/slick/slick.css',
        'vendor/jquery.mnotifyajax/css/jquery.mnotifyajax.css',
        'css/main/**/*.css',
        'vendor/angular-block-ui/dist/angular-block-ui.css',
        'vendor/pines-notify/pnotify.core.css',
        'vendor/pines-notify/pnotify.buttons.css',
        'vendor/pines-notify/pnotify.history.css',
        'fonts/octicons/css/octicons.css',
        'vendor/ngDialog/css/ngDialog.css',
        'vendor/ngDialog/css/ngDialog-theme-default.css'
    ]
};

gulp.task('fonts', function() {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest(dst.fonts));
});

gulp.task('js', function() {
    return gulp.src(paths.js)
        //        .pipe(uglify())
        .pipe(concat(version + '.all.js'))
        .pipe(gulp.dest(dst.js));
});

gulp.task('images', function() {
    return gulp.src(paths.images)
        .pipe(changed(dst.images))
        .pipe(cache('imagemin', imagesOpts))
        .pipe(gulp.dest(dst.images));
});

gulp.task('sass-index', function() {
    return gulp.src('scss/index/**/*.scss')
        .pipe(sass(sassOpts))
        .pipe(gulp.dest('./css/index'));
});

gulp.task('css-index', ['sass-index'], function() {
    return gulp.src('css/index/**/*.css')
        .pipe(gulp.dest('./css/index'))
        .pipe(minifyCSS(minifyOpts))
        .pipe(concat(version + '.all.css'))
        .pipe(gulp.dest('dist/css/index'));
});

gulp.task('sass', function() {
    return gulp.src('scss/main/**/*.scss')
        .pipe(sass(sassOpts))
        .pipe(gulp.dest('./css/main'));
});

gulp.task('css', ['sass'], function() {
    return gulp.src(paths.css)
        .pipe(gulp.dest('./css/main'))
        .pipe(minifyCSS(minifyOpts))
        .pipe(concat(version + '.all.css'))
        .pipe(gulp.dest('dist/css/main'));
});

gulp.task('templates', function() {
    return gulp.src(paths.templates)
        .pipe(angularTemplates({
            module: 'templates'
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest(dst.templates));
});

// Rerun the task when a file changes
gulp.task('watch', ['default'], function() {
    var server = livereload(),
        liveReloadCallback = function(file) {
            setTimeout(function() {
                server.changed(file.path);
            }, 300);
        };

    gulp.watch(paths.js, ['js']).on('change', liveReloadCallback);
    gulp.watch(paths.images, ['images']);
    gulp.watch('scss/main/**/*.scss', ['css']).on('change', liveReloadCallback);
    gulp.watch('scss/index/**/*.scss', ['css-index']).on('change', liveReloadCallback);
    gulp.watch(paths.templates, ['templates', 'js']).on('change', liveReloadCallback);
});

// Clean
gulp.task('clean', function() {
    return gulp.src(['dist/*'], {
        read: false
    }).pipe(clean());
});

gulp.task('default', ['clean'], function() {
    return gulp.start('js', 'css', 'css-index', 'images', 'fonts', 'templates');
});
