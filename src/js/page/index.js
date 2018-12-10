require(["./js/config.js"],function(){
	require(["mui"],function(mui){
		mui.init();
		mui('.mui-scroll-wrapper').scroll({
			
			
	   deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
	
	 //切换
		mui.ajax("/users/api/all",{
			success:function(obj){
				render(obj.data)
			}
		})
		function render(data){
			var str="";
			var img="http://localhost:9090/img/";
			data.forEach(function(item){
				str+=`<li>
					<img src="${img}${item.img}">
					<p>${item.text}</p>
					</li>`
			})
			document.querySelector("#one").innerHTML=str;
			
		}
		
		//切换
		mui(".two").on("click","li",function(){
			console.log(this);	
			mui.ajax("/users/api/all",{
				success:function(obj){
					renders(obj.data)
				}
			})
		})
		function renders(data){
			var str="";
			var img="http://localhost:9090/img/";
			data.forEach(function(item){
				str+=`<li>
					<img src="${img}${item.img}">
					<p>${item.page}</p>
					</li>`
			})
			document.querySelector("#one").innerHTML=str;
		}
		
		
		
		
		
		
	})
})