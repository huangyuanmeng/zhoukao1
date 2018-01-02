var gulp = require('gulp');
var webserver = require('gulp-webserver');
var minjs = require('gulp-uglify');//压缩js
var concat = require("gulp-concat");//合并文件
var sass = require('gulp-sass');//sass编译
var rename = require('gulp-rename');//重命名
var path = require('path');
var fs = require('fs');
//压缩js
gulp.task('minjs',function(){
    gulp.src('./js/date_format.js')
    .pipe(minjs())
    .pipe(gulp.dest('newsjs'))
})
//拷贝
gulp.task('copy',function(){
    gulp.src('./index.html')
    .pipe(gulp.dest('newhtml'))
})
//合并
gulp.task('concat',function(){
    gulp.src(['./Content/style.css','./Content/style2.css'])
    .pipe(concat('stylez.css'))
    .pipe(gulp.dest('Concat'))
})
//起服务
gulp.task('server',function(){
    gulp.src('.')
    .pipe(webserver({
        host:"localhost",
        port:8080,
        fallback:"index.html",
        open:true,
        livereload:true
    }))
})
gulp.task('default',['server','minjs','concat','copy'])