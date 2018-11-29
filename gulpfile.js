var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css');
 
gulp.task('default', function() {
  // if you have multiple template files, change the index.html to the template file name and run the build.sh file again
  // * make sure to rename each output file or they will override each other
  return gulp.src('./public/index.html')
    .pipe(inlineCss({
      applyStyleTags: true,
      applyLinkTags: true,
      removeStyleTags: true,
      removeLinkTags: true
    }))
    // change the dest to where you want your final file
    .pipe(gulp.dest('test/'));
});