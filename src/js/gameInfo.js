var gameStuffs,cTypeName,rTypeName,eTypeName;

cTypeName = ["CHARACTER 1","CHARACTER 2","CHARACTER 2"];
rTypeName = ["REGION 1","REGION 2","REGION 3","REGION 4","REGION 5"];
eTypeName = ["ELEMENT 1","ELEMENT 2","ELEMENT 3"];

var navAss = ["📌","🔧","🧪","➕","🔒","🔒","🔒","🔒"];

gameStuffs = {
	assets: function(container,gameNav,gameNav1,navToggle,gameConsole,bbb,i){
		var nameholder = createEle("div"),
		    nameIn = createEle("div"),
		    cTypeHolder = createEle("div"),
		    rTypeHolder = createEle("div"),
		    eTypeHolder = createEle("div"),
		    ctype = bbb.loadFiles[i].cType,
		    rtype = bbb.loadFiles[i].rType,
		    etype = bbb.loadFiles[i].eType,
		    c = (+ctype - 1),r = (+rtype - 1),e = (+etype - 1);

		cTypeHolder.innerHTML = cTypeName[c];
		cTypeHolder.className = "cTypeHolder";

		rTypeHolder.innerHTML = rTypeName[r];
		rTypeHolder.className = "rTypeHolder";

		eTypeHolder.innerHTML = eTypeName[e];
		eTypeHolder.className = "eTypeHolder";

		nameIn.innerHTML = bbb.loadFiles[i].name;
		nameIn.className = "nameIn";

		nameholder.append(nameIn,cTypeHolder,rTypeHolder,eTypeHolder);
		nameholder.className = "nameholder";

		gameConsole.append(nameholder);
	},
	navAssets: function(container,gameNav,gameNav1,navToggle,gameConsole,bbb,i){
		for (var i = 0; i < navAss.length; i++) {
			var navBtns = createEle("button");

			navBtns.className = "navBtns";
			navBtns.innerHTML = navAss[i];

			if(i === 0){
				navBtns.disabled = false;
			}
			if(i === 1){
				navBtns.disabled = false;
			}
			if(i === 2){
				navBtns.disabled = false;
			}
			if(i === 3){
				navBtns.disabled = false;
			}
			if(i === 4){
				navBtns.disabled = true;
			}
			if(i === 5){
				navBtns.disabled = true;
			}
			if(i === 6){
				navBtns.disabled = true;
			}
			if(i === 7){
				navBtns.disabled = true;
			}


			gameNav.append(navBtns);
		}
	}
};