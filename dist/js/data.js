/*
	负责数据的格式化，将数据转换为固定的格式对象
 */


var data=[];


//描述信息字符串
var dataStr= "1、山东理工大学<br>\
<br>\
那个在不经意中，<br>\
也许就改变了我一生的男孩。<br>\
我相信总有一天，<br>\
我们会在世界的屋顶再次相遇。<br>\
不要轻易用过去来衡量生活的幸与不幸,<br>\
每个人的生命都是可以绽放美丽的，<br>\
只要你珍惜。<br>\
&nbsp;&nbsp;&nbsp;&nbsp--《木吉他的夏天》<br>\
<br>\
<br>\
2、山东理工大学流年<br>\
<br>\
我一路狂奔，渴望在拥挤匆忙的人群里找到一个和我相似的面孔，她和我有相似的命运。我可以在她的身上看到自己命运的参照，何去何从，不再那么仓皇。  ——《小妖的金色城堡》<br>\
<br>\
<br>\
3、海边<br>\
<br>\
我们就是这样苍老的，从时光的一端辗转到时光的另一端，请别说再见，不需要再见。  ——《校服的裙摆》   <br>\
<br>\
<br>\
4、海边美景<br>\
<br>\
死生契阔，与子成悦.执子之手，与子偕老.－佚名《诗经邶风击鼓》<br>\
<br>\
<br>\
5、海边人物<br>\
<br>\
君若扬路尘，妾若浊水泥，浮沈各异势，会合何时谐？－曹植《明月上高楼》<br>\
<br>\
<br>\
6、海边贝壳<br>\
<br>\
如何让你遇见我，在我最美丽的时刻.为这，我已在佛前求了五百年，求他让我们结一段尘缘.－席慕蓉《一棵开花的树》<br>\
<br>\
<br>\
7、海边倒影<br>\
<br>\
直道相思了无益，未妨惆怅是清狂.－李商隐《无题六首其三》<br>\
<br>\
<br>\
8、傻傻的我<br>\
<br>\
独自莫凭栏， 无限江山， 别时容易见时难。 流水落花春去也， 天上人间。——李煜【浪淘沙令】<br>\
<br>\
<br>\
9、看短发的我<br>\
<br>\
曾虑多情损梵行，入山又恐别倾城，世间安得双全法，不负如来不负卿。——仓央嘉措<br>\
<br>\
<br>\
10、理工大大二<br>\
<br>\
一个是阆苑仙葩，一个是美玉无瑕.若说没奇缘，今生偏又遇著他；若说有奇缘，如何心事终虚话？－曹雪芹《枉凝眉》<br>\
<br>\
<br>\
11、华山之行<br>\
<br>\
尊前拟把归期说。未语春容先惨咽。人生自是有情痴，此恨不关风与月。泪眼问花花不语，乱红飞过秋千去<br>\
12、北京之行<br>\
<br>\
此去经年，应是良辰好景虚设.便纵有，千种风情，更与何人说.－柳永《雨霖铃》<br>\
<br>\
<br>\
13、曾经的我<br>\
<br>\
一场寂寞凭谁诉.算前言，总轻负.－柳永《昼夜乐》<br>\
<br>\
<br>\
14、萨瓦迪卡<br>\
<br>\
我住长江头，君住长江尾，日日思君不见君，共饮长江水，此水几时休，此恨何时已，只愿君心似我心，定不负相思意。<br>\
<br>\
<br>\
15、毕业照<br>\
<br>\
不要因为也许会改变，就不肯说那句美丽的誓言，不要因为也许会分离，就不敢求一次倾心的相遇.－席慕蓉《印记》 <br>\
<br>\
<br>\
16、闻喜541<br>\
<br>\
都道是金玉良缘，俺只念木石前盟.空对著，山中高士晶莹雪；终不忘，世外仙姝寂寞林.－曹雪芹《终身误》<br>\
";


//格式化字符串
var d=dataStr.split('<br><br><br>');
for(var i=0,len=d.length;i<len;i++){
	var c=d[i].split('<br><br>');
	data.push({
		img:c[0].replace('、','')+'.jpg',//文件路径名
		caption:c[0].split('、')[1],
		desc:c[1]

	});
}
