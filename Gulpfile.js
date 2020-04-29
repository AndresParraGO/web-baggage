
const {dest, src, watch, parallel} = require('gulp'),
       sass = require('gulp-sass')
       
    
function html() {
  return src('./src/index.html')
        .pipe(dest('./public'))
}


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


exports.html = html
exports.styles = styles
exports.assets = assets
exports.build = parallel(assets, html, styles)

exports.default = () => {
  watch('./src/index.html', html)
  watch('./src/scss**/*.scss', styles)
}