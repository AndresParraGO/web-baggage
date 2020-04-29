
const {dest, src, watch, parallel} = require('gulp'),
       sass = require('gulp-sass'),
       browserSync = require('browser-sync').create()
       

function server() {
  browserSync.init({
    server: {
      baseDir: './public'
    }
  })
}  
       
    
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
        .pipe(browserSync.stream())
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
  server()
  watch('./src/index.html', html).on('change', browserSync.reload)
  watch('./src/scss/**/*.scss', styles)
}