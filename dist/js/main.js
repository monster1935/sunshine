//翻转控制
		function turn(elem){
			var cls=elem.className;
			var n=elem.id.split('_')[1];
			if(!/photo_center/.test(cls)){
				return resort(n);
			}
			if(/photo_front/.test(cls)){
				cls=cls.replace('photo_front','photo_back');  

				get('#nav_'+n).className +=' i_back ';
			}else{
				cls=cls.replace('photo_back', 'photo_front');

				get('#nav_'+n).className=get('#nav_'+n).className.replace(/\s*i_back\s*/,' ');
			}
			return elem.className=cls;
		}

		//根据选择获取DOM元素
		function get(selector){
			var method=selector.substr(0,1)=="."?"getElementsByClassName":"getElementById";
			return document[method](selector.substr(1));
		}
		var data=data;



		//加载所有的海报
		function addPhotos(){
			var template=get('#wrap').innerHTML;
			var html=[];

			var nav=[];
			//输出所有的控制按钮，每一个控制按钮对应一个海报
			for(var s in data){
				var _html=template.replace('{{index}}',s)
								  .replace('{{img}}',data[s].img)
								  .replace('{{caption}}',data[s].caption)
								  .replace('{{desc}}',data[s].desc);
				html.push(_html);
				nav.push('<span id="nav_'+s+'" onclick="turn(get(\'#photo_'+s+'\'))" class="i"></span>');
			}
			html.push('<div class="nav">'+nav.join('')+'</div>');
			get('#wrap').innerHTML=html.join('');

			resort(random([0,data.length-1]));
		}

		addPhotos();

		//随机生成一个值
		function random(range){
			var max=Math.max(range[0],range[1]);
			var min=Math.min(range[0],range[1]);

			var diff=max-min;

			var number=Math.ceil(Math.random()*diff+min);

			return number;
		}

		//排序海报
		function resort(n){

			//清空中间的样式
			var _photo=get('.photo');
			var photos=[];
			for(var i=0;i<_photo.length;i++){
				_photo[i].className=_photo[i].className.replace(/\s*photo_center\s*/,' ');
				_photo[i].className=_photo[i].className.replace(/\s*photo_front\s*/,' ');
				_photo[i].className=_photo[i].className.replace(/\s*photo_back\s*/,' ');
				_photo[i].className+=' photo_front';
				_photo[i].style.left="";
				_photo[i].style.top="";
				_photo[i].style["transform"]="rotate(0deg) scale(1.5)";

				photos.push(_photo[i]);
			}
			var photo_center=get('#photo_'+n);

			photo_center.className+=' photo_center ';

			

			photo_center=photos.splice(n,1)[0];

			//把海报分为左右两个区域
			var ranges=range();
			var photos_left=photos.splice(0,Math.ceil(photos.length/2));
			var photos_right=photos;

			for(s in photos_left){
				var photo=photos_left[s];

				photo.style.left=random(ranges.left.x)+"px";
				photo.style.top=random(ranges.left.y)+"px";

				photo.style['transform']='rotate('+random([-150,150])+'deg) scale(1)';
			}
			for(var a in photos_right){
				var photo=photos_right[a];

				photo.style.left=random(ranges.right.x)+"px";
				photo.style.top=random(ranges.right.y)+"px";
				photo.style['transform']='rotate('+random([-150,150])+'deg) scale(1)';
			}


			/*控制按钮处理*/
			var navs=get('.i');
			for(var s=0;s<navs.length;s++){
				//清除之前按钮的当前样式
				navs[s].className=navs[s].className.replace(/\s*i_current\s*/,' ');
				navs[s].className=navs[s].className.replace(/\s*i_back\s*/,' ');
			}
			get('#nav_'+n).className+=" i_current ";

		}
		//计算左右分区的范围
		function range(){

			var range={ left : { x: [],y: [] }, right:{ x:[], y:[] } }; 

			var wrap={
				w:get('#wrap').clientWidth,
				h:get('#wrap').clientHeight
			};
			var photo={
				w:get('.photo')[0].clientWidth,
				h:get('.photo')[0].clientHeight
			};
			range.wrap=wrap;
			range.photo=photo;

			range.left.x=[0-photo.w,wrap.w/2-photo.w/2];
			range.left.y=[0-photo.h,wrap.h];
			range.right.x=[wrap.w/2+photo.w/2,wrap.w+photo.w];
			range.right.y=[0-photo.h,wrap.h];

			
			return range;
		}
		