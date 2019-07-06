function shake(obj,attr,callback){
		var arr = [];

		for(var i=20;i>0;i-=2){
			arr.push(i,-i);
		}
		arr.push(0);
		// console.log(arr);
		var num = 0;
		var n = css(obj,attr);
		var timer = setInterval(function(){
			obj.style[attr] = n+arr[num]+'px';
			num=num+5;
			if(num >= arr.length){	
				clearInterval(timer);
				callback&&callback();//???
			}
		}, 30);
	}
	function css(obj,attr){
		return parseFloat(obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr]);
	}