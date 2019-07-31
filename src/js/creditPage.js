var creds = {
	dev:"EHAWK",
	design:"EHAWK",
	sound:"EHAWK"
};
var credits = {
	page: function(container,items){
		var devLog = createEle("div"),
			cHead = createEle("p"),
			cStuff = createEle("div");

		cHead.innerHTML = "PROJECT DEVELOPER";

		cStuff.className = "cStuff";
		cStuff.innerHTML = creds.dev;

		devLog.className = "devLog";
		devLog.append(cHead,cStuff);

		items.append(devLog);
	}
};