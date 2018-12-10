var gulp=require("gulp");
var web=require("gulp-webserver");
 
 gulp.task("dev",function(){
	 return gulp.src("./src")
	 .pipe(web({
		 port:9090,
		 proxies:[{
			 source:"/users/api/all",target:"http://localhost:3000/users/api/all"
		 }]
	 }))
	 
 })