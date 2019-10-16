var creds = {
	dev:"<a href='https://github.com/Ehawk82' target='_blank'>EHAWK</a>",
	design:"EHAWK",
	sound:"EHAWK"
};
var credits = {
	page: function(container,items){
		var devLog = createEle("div"),
			cHead = createEle("p"),
			cpyRghtHolder = createEle("h6");
			cStuff = createEle("div");

		cHead.innerHTML = "PROJECT DEVELOPMENT";

		cStuff.className = "cStuff";
		cStuff.innerHTML = creds.dev;

		cpyRghtHolder.innerHTML = "<a href='https://raw.githubusercontent.com/Ehawk82/basicGameApp/master/LICENSE' target='_blank'>MIT LICENSE</a> = Ehawk LLC - &copy; 2020"
		cpyRghtHolder.className = "cpyRghtHolder";

		devLog.className = "devLog";
		devLog.append(cHead,cStuff,cpyRghtHolder);

		items.append(devLog);
	}
};