
const {dest, src, watch, parallel} = require('gulp'),
       sass = require('gulp-sass')
       
       
function styles() {
  return src('./src/scss/main.scss')
          .pipe(sass({
            outputStyle: 'compressed'
          }))
          .pipe(dest('./public/'))
}


function assets() {
  return src('./src/assets/*')
        .pipe(dest('./public'))
}



exports.styles = styles
exports.assets = assets
exports.build = parallel(assets, styles)
exports.default = () => {
  watch('./src/scss**/*.scss', styles)
}