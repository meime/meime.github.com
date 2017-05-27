window.onload = function(){
	//背景音乐
	var oMusic = document.getElementById('music');
	oMusic.src = 'sunshine.mp3';		
	//oMusic.play();
	//banner部分
	var oBan = document.getElementById('banner');
	var oBanList = oBan.children[0];
	var R=5;
	var C=10;
	for(var r=0; r<R; r++){
		for(var c=0; c<C; c++){
			var oSpan=document.createElement('span');
			oSpan.style.width=oBanList.offsetWidth/C+'px';
			oSpan.style.height=oBanList.offsetHeight/R+'px';
			oBanList.appendChild(oSpan);
			oSpan.style.left=c*oSpan.offsetWidth+'px';
			oSpan.style.top=r*oSpan.offsetHeight+'px';
			oSpan.style.backgroundPosition='-'+c*oSpan.offsetWidth+'px -'+r*oSpan.offsetHeight+'px';
		}
	}
	var iNow=0;
	var bReady=true;
	function tab(){
		var aSpan=oBanList.children;
		for(var i=0; i<aSpan.length; i++){
			aSpan[i].style.transition='1s all ease';
			//span的中心点
			var sX = aSpan[i].offsetLeft+aSpan[i].offsetWidth/2
			var sY = aSpan[i].offsetTop+aSpan[i].offsetHeight/2
			//div的中心点
			var divX = oBanList.offsetWidth/2;
			var divY = oBanList.offsetHeight/2;
			//每个span距离div的距离
			var disX = (sX-divX)*Math.random();
			var disY = (sY-divY)*Math.random();				
			aSpan[i].style.WebkitTransform='perspective(800px) translateX('+disX+'px) translateY('+disY+'px) rotateX('+(Math.random()*360+180)+'deg) rotateY('+(Math.random()*360+180)+'deg)';		
			aSpan[i].style.opacity=0;
		}
		aSpan[0].addEventListener('transitionend',function(){
			bReady=true;
			for(var i=0; i<aSpan.length; i++){
				aSpan[i].style.transition='none';
				aSpan[i].style.transform='perspective(800px) translateX(0px) translateY(0px) rotateX(0deg) rotateY(0deg)';
				aSpan[i].style.opacity=1;
				aSpan[i].style.backgroundImage='url(img/banner'+iNow%6+'.jpg)';
				oBanList.style.background='url(img/banner'+(iNow+1)%6+'.jpg)';
			}
		},false);
	}
	setInterval(function(){
		if(bReady==false)return;
		bReady=false;
		tab();
		iNow++;	
	},1000);	
	//作品
	function hoverGo(obj){
		var oS = obj.children[0];
		obj.onmouseover = function(){
			oS.style.WebkitTransform = 'translateY(200px)';	
		};
		obj.onmouseout = function(){
			oS.style.WebkitTransform = 'translateY(-200px)';	
		};	
	}
	var workList = document.getElementById('work_list');
	var oUl = workList.children[0];
	var aLi = oUl.getElementsByTagName('li');;
	for(var i=0;i<aLi.length;i++){		
			hoverGo(aLi[i]);
	}
	//娱乐
	function hoverGo2(obj){
		var oS = obj.children[0];
		obj.onmouseover = function(){
			oS.style.WebkitTransformOrigin='left bottom';
			oS.style.WebkitTransform = 'rotate(90deg)';	
		};
		obj.onmouseout = function(){
			oS.style.WebkitTransform = 'rotate(0deg)';	
		};	
	}
	var playList = document.getElementById('play_list');
	var oUl2 = playList.children[0];
	var aLi2 = oUl2.getElementsByTagName('li');;
	for(var i=0;i<aLi2.length;i++){		
			hoverGo2(aLi2[i]);
	}
	//关于我
	var aboutNav = document.getElementById('about_nav');
	var aNav = aboutNav.children;
	var aboutDetail = document.getElementById('about_detail');
	var aDetail = aboutDetail.children;
	for(var i=0;i<aNav.length;i++){	
		(function(index){
			aNav[index].onclick = function(){
				for(var j=0;j<aDetail.length;j++){
					aDetail[j].style.WebkitTransform = ' rotate(180deg)';
					aDetail[j].style.opacity = '0';
				}	
				setTimeout(function(){
					aDetail[index].style.WebkitTransform = ' rotate(0deg)';
					aDetail[index].style.opacity = '1';
				},1000);
			};	
			
				
				
		})(i);	
		
	}
	//立方体
	var oConDetail = document.getElementById('contact_detail');
	var x =0;
	oConDetail.onmousedown = function(ev){
		var disX = ev.clientX - x;	
		document.onmousemove = function(ev){
			x = ev.clientX - disX;	
			oConDetail.style.WebkitTransform = 'perspective(800px) rotateY('+x/5+'deg)';
		};
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
		};
		return false;
	};
	
	setInterval(function(){
		x-=3;
		oConDetail.style.WebkitTransform = 'perspective(800px)  rotateY('+x/5+'deg)';
	},30);
	//回到顶部
	var oBack = document.getElementById('back_top');
	var timer_top = null;
	var bOk = false;		
	document.onscroll=function(){
		//区分是人滚的还是js滚的，如果是人滚的就停
		if(bOk){
			clearInterval(timer_top);
		}
		bOk = true;

		var scrollT = document.documentElement.scrollTop||document.body.scrollTop;
		if(scrollT>0){
			oBack.style.display='block';
		}else{
			oBack.style.display='none';
		}
	};
	oBack.onclick=function(){
		var start = document.documentElement.scrollTop||document.body.scrollTop;
		var dis = 0-start;
		var count = Math.floor(2000/30);
		var n = 0;
		clearInterval(timer_top);
		timer_top = setInterval(function(){
			bOk = false;
			n++;
			var a = 1-n/count;
			var cur = start+dis*(1-Math.pow(a,3));
			document.documentElement.scrollTop=document.body.scrollTop=cur;
			if(n==count){
				clearInterval(timer_top);
			}
		},30);
		//document.documentElement.scrollTop=document.body.scrollTop=0;
	};
	
};