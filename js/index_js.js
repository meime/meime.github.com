'use strict'
/**hover样式封装函数**/
function hover(ulId){
	var hover = document.getElementById(ulId);
	var oLi = hover.getElementsByTagName('li');
	for(var i=0;i<oLi.length;i++){
		oLi[i].onmouseover = function(){
			for(var i=0;i<oLi.length;i++){
				oLi[i].className = '';
			}
			this.className = 'hover';
		};
	}
	
}

/**选项卡封装**/
function tab(navId,conId){
	var oNav = document.getElementById(navId);
	var oNavli = oNav.getElementsByTagName('li');
    var oCon = document.getElementById(conId);
	var oUl = oCon.getElementsByTagName('ul');
	for(var i=0;i<oNavli.length;i++){
		oNavli[i].index = i;
		oNavli[i].onmouseover = function(){
			for(var i=0;i<oNavli.length;i++){
				oUl[i].style.display = 'none';	
			}
			oUl[this.index].style.display = 'block';
		};
	}
	
}
window.onload= function(){
	/**header搜索框**/
	var oSearch =document.getElementById('search');
	var oInp =document.getElementById('inp_list');
	oSearch.onclick = function(){
		if(oInp.style.display=='block'){
			oInp.style.display='none';
		}else{
		    oInp.style.display='block';
		}
	};
	/**banner背景图变换**/
	var aBtn = document.getElementById('banbtn_list');
	var aBtn_list = aBtn.getElementsByTagName('li');
	var oBanner = document.getElementById('banner_bg');
	var banCon = document.getElementById('banner_con');
	var banConlist = banCon.getElementsByTagName('li');
	var num = 0;
	var time = null;
	for(var i=0;i<aBtn_list.length;i++){
		//给每个按钮加一个自定义属性
		aBtn_list[i].index=i;
		aBtn_list[i].abc=i+1;
		aBtn_list[i].onmouseover = function(){
			for(var j=0;j<aBtn_list.length;j++){
				aBtn_list[j].className='';	
				}
			for(var j=0;j<banConlist.length;j++){
				 banConlist[j].className='';
				}	
			banConlist[this.index].className ='show_banner_con';
			this.className='show';			
		    oBanner.style.background= 'url(img/banner'+this.abc+'.jpg)' + 'no-repeat center 0';		
		};
		
	}
	time = setInterval(function(){
		num++;
		for(var j=0;j<aBtn_list.length;j++){
			aBtn_list[j].className='';	
		}
		for(var j=0;j<banConlist.length;j++){
			 banConlist[j].className='';
		}
		oBanner.style.background= 'url(img/banner'+(num%9+1)+'.jpg)' + 'no-repeat center 0';
		
		banConlist[num%9].className ='show_banner_con';
		aBtn_list[num%9].className='show';
	},2000);
	oBanner.onmouseover = function(){
		clearInterval(time);
	};
	oBanner.onmouseout = function(){
		time = setInterval(function(){
			num++;
			oBanner.style.background= 'url(img/banner'+(num%9+1)+'.jpg)' + 'no-repeat center 0';
			banConlist[num%9].className ='show_banner_con';
			aBtn_list[num%9].className='show';
		},2000);
	};
	/**今日热门jshover**/	
	hover('hot_hover');
	hover('hot_hover2');	
	/**网络院线hover**/	
	hover('wlyx_hover');
    hover('wlyx_hover_r');
	/**电视剧hover**/	
	tab('nav1','con1');
	hover('dsj_hover1');
	hover('dsj_hover2');
	hover('dsj_hover3');
	hover('dsj_hover4');
	hover('dsj_hover5');
	hover('dsj_hover6');
	hover('dsj_hover7');
	hover('dsj_hover_r');
	/**电影hover**/
	tab('nav2','con2');
	hover('dy_hover1');
	hover('dy_hover2');
	hover('dy_hover3');
	hover('dy_hover4');
	hover('dy_hover5');
	hover('dy_hover6');
	hover('dy_hover7');	
	hover('dy_hover_r');
	/**综艺hover**/
	tab('nav_zy','con_zy');
	hover('zy_hover1')
	hover('zy_hover2')
	hover('zy_hover3')
	hover('zy_hover4')
	hover('zy_hover_r');
	/**动漫hover**/
	tab('nav_dm','con_dm');
	hover('dm_hover1')
	hover('dm_hover2')
	hover('dm_hover3')
	hover('dm_hover4')	
	/**独家策划hover**/
	tab('nav_djch','con_djch');
	hover('djch_hover1')
	hover('djch_hover2')
	hover('djch_hover3')
	hover('djch_hover4')
	hover('djch_hover5')
	hover('djch_hover6')
};
