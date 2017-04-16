window.onload=function  () {
	//兼容性添加鼠标滚轮事件
	document.onmousewheel=fn;
	document.addEventListener('DOMMouseScroll',fn);
	var focus= $('.right_nav li');//右侧焦点
	var cartoon=$('.wu_cartoon');
	var main_bg=$('.wu_main_bg');
	
	var main_children = main_bg.children();
	var cartoonBg=cartoon.children();
	
	
	var num=0;//页面切换的索引
	var shide=document.getElementsByClassName('shide')[0];
	var wrap_lis = $('.wrap ul ').children();
	var cartoon_3lis=$('.cartoon_bg3 ul').children();
	
	var line_1=document.querySelector('.line_1');
	var line_2=document.querySelector('.line_2');
	var bg4_main = document.querySelector('.bg4_main ul');
	var bg5_lis = document.querySelectorAll('.cartoon_bg5 li');
	
	
	var onOff=true;//开关，控制切换下一页动画未结束前的延时效果(动画未完成不能切换下一屏)

	function fn(ev){
		
		var detail;
		//兼容性鼠标滚轮时间处理
		if(ev.wheelDelta){
			detail = ev.wheelDelta;
		}else{
			detail = -ev.detail;
		}
		for (var  i= 0; i < focus.length; i++) {
			focus[i].className='';
			cartoonBg[i].style.opacity=0;
			main_children[num].style.opacity=0;
		};
		if (detail<0) {
			if (onOff) {
				num++
			};
			if(num>=focus.length){
				num=4;
			}	
		}else{
			if (onOff) {
				num--;
			}
			if(num<0){
				num=0;
			}	
		}

		
		transition();
		num=num%focus.length;
		focus[num].className='active';		
		
	}
	
	
	
	for (var i = 0; i < focus.length; i++) {
		focus[i].index=i;
		focus[i].onclick=function  () {
			for (var i = 0; i < focus.length; i++) {
				focus[i].className='';
				main_children[i].style.opacity=0;
				cartoonBg[i].style.opacity=0;	
			};
			this.className='active';
			num=this.index;//将滚轮切换和焦点切换结合起来
			transition();
		}
	};

	//进出场动画封装
		function transition() {
			main_children[num].style.opacity=1;
			cartoonBg[num].style.opacity=1;	
		
			//第二屏的动画出入场控制效果
			if(num==1){
				 wrap_lis[1].className='two';
				 wrap_lis[2].className='three';
				 wrap_lis[3].className='four';
				 shide.style.left='60%';
				  setTimeout(function  () {
				  	wrap_lis[1].className='two two1';
				  	wrap_lis[2].className='three three1';
				 	wrap_lis[3].className='four four1';
				 	
				  },1100)
			}else{
				wrap_lis[1].className='twotwo'
				wrap_lis[2].className='threethree'
				wrap_lis[3].className='fourfour'
				shide.style.left='0';
			}
			//第三屏动画出入场控制效果
			if(num==2){
				 cartoon_3lis[0].className='bg3_one'
				 cartoon_3lis[1].className='bg3_two'
				 cartoon_3lis[2].className='bg3_three'
				  setTimeout(function  () {
				 cartoon_3lis[0].className='bg3_one bg3_onea';
				 cartoon_3lis[1].className='bg3_two bg3_twoa';
				 cartoon_3lis[2].className='bg3_three bg3_threea';
				
				  },1100)
			}else{
				 cartoon_3lis[0].className='bg3_oneone';
				 cartoon_3lis[1].className='bg3_twotwo';
				 cartoon_3lis[2].className='bg3_threethree';
			}
			//第四屏动画入场效果
			if(num==3){
				
				bg4_main.style.transform='scale(1.2) translateX(-40px) translateY(50px) rotateX(30deg)';
				line_1.style.marginTop='0';
				line_1.style.marginTop='0';
			}else{
				bg4_main.style.transform='scale(3.4) translateX(0px) translateY(0px) rotateX(0)' ;
				 line_1.style.marginTop='335px';
				line_1.style.marginTop='335px';
			}
			//第五屏动画入场效果
			if(num==4){
				for (var i = 0; i < bg5_lis.length; i++) {
					bg5_lis[i].style.left='50%';
				}		
			}else{
				bg5_lis[0].style.left='-50%';
				bg5_lis[1].style.left='-50%';
				bg5_lis[2].style.left='-50%';
				bg5_lis[3].style.left='150%';
				bg5_lis[4].style.left='150%';
				bg5_lis[5].style.left='150%';
			}
	
		}
}