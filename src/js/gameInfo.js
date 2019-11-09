var gameStuffs,cTypeName,rTypeName,eTypeName;

cTypeName = ["HUMANITY","GREY","PRIDE"];
rTypeName = ["VEGA","JULE","DARCOS","PLANET YORK","KEPLAR 20B"];
eTypeName = ["SPIRAL","SOMRERO","PINWHEEL"];

var navAss = ["🔵","🔧","🧪","➕","🔒","🔒","🔒","🔒"];
var navAss1 = ["🔒","🔒","🔒","🔒","🔒","🔒","🔒","🔒"];

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

		var planet = createEle("div");

		planet.innerHTML = "&nbsp;";
		planet.className = "planet";

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

		gameConsole.append(nameholder,planet);
		setTimeout(function(){
			gameConsole.onload = gameStuffs.renderPlanet(planet,i);
		},100);
	},
	renderPlanet: function(planet,i){
		var bbb = parseLS("bGAuser");

		var gameConsole = bySel(".gameConsole"),
			hW = gameConsole.offsetWidth / 2,
			hMw = bbb.loadFiles[i].matter / 2,
			hH = gameConsole.offsetHeight / 2,
			hMh = bbb.loadFiles[i].matter / 2;

		planet.style.left = (hW - hMw) + "px";
		planet.style.top = (hH - hMw) + "px";
		planet.style.height = bbb.loadFiles[i].matter + "px";
		planet.style.width = bbb.loadFiles[i].matter + "px";
	},
	navAssets: function(container,gameNav,gameNav1,navToggle,gameConsole,bbb,i){
		for (var k = 0; k < navAss.length; k++) {
			var navBtns = createEle("button");

			navBtns.className = "navBtns";
			navBtns.innerHTML = navAss[k];

			if(k === 0) {
				navBtns.id = "cycleBtn";
				if(bbb.loadFiles[i].moves === 0){
					navBtns.disabled = false;
				} else {
					navBtns.disabled = true;
				}
				navBtns.onclick = gameStuffs.cycle(navBtns,container,gameNav,gameNav1,navToggle,gameConsole,bbb,i,k);
			}

			if(k === 1) {
				navBtns.disabled = false;
				navBtns.onclick = gameStuffs.tools(navBtns,container,gameNav,gameNav1,navToggle,gameConsole,bbb,i,k);
			}

			if(k === 2) {
				navBtns.disabled = false;
				navBtns.onclick = gameStuffs.research(navBtns,container,gameNav,gameNav1,navToggle,gameConsole,bbb,i,k);
			}

			if(k === 3) {
				navBtns.id = "addBtn";
				if(bbb.loadFiles[i].moves > 0){
					navBtns.disabled = false;
				} else {
					navBtns.disabled = true;
				}
				navBtns.onclick = gameStuffs.addition(navBtns,container,gameNav,gameNav1,navToggle,gameConsole,bbb,i,k);
			}
			if(k === 4) {
				navBtns.disabled = true;
			}

			if(k === 5) {
				navBtns.disabled = true;
			}

			if(k === 6) {
				navBtns.disabled = true;
			}

			if(k === 7) {
				navBtns.disabled = true;
			}

			gameNav.append(navBtns);
		}
	},
	cycle: function(navBtns,container,gameNav,gameNav1,navToggle,gameConsole,bbb,i,k) {
		return function(){
			var addBtn = bySel("#addBtn");
			navBtns.disabled = true;
			navBtns.innerHTML = "⏳";

			bbb.loadFiles[i].moves++;

			setTimeout(function(){
				saveLS("bGAuser",bbb);
				if(bbb.loadFiles[i].moves === 0){
					navBtns.disabled = false;
					addBtn.disabled = true;
				} else {
					navBtns.disabled = true;
					addBtn.disabled = false;
				}
				navBtns.innerHTML = navAss[k];
			},1000);
		}
	},
	tools: function(navBtns,container,gameNav,gameNav1,navToggle,gameConsole,bbb,i,k) {
		return function(){
			var toolPage = createEle("div"),
				toolXOutBtn = createEle("button");

			toolXOutBtn.innerHTML = "❌";
			toolXOutBtn.className = "toolXOutBtn";
			toolXOutBtn.onclick = gameStuffs.toolsXOutFunc(toolPage);
			
			toolPage.innerHTML = "<h1>TOOLS<h1>";
			toolPage.className = "toolPage";
			toolPage.append(toolXOutBtn);

			container.append(toolPage);

			setTimeout(function(){
				makeFull(toolPage);
			},0);
		}
	},
	toolsXOutFunc: function(toolPage){
		return function(){
			takeFull(toolPage);
			setTimeout(function(){
				toolPage.remove();
			},666);
		}
	},
	research: function(navBtns,container,gameNav,gameNav1,navToggle,gameConsole,bbb,i,k) {
		return function(){
			var resPage = createEle("div"),
				resXOutBtn = createEle("button");

			resXOutBtn.innerHTML = "❌";
			resXOutBtn.className = "resXOutBtn";
			resXOutBtn.onclick = gameStuffs.resXOutFunc(resPage);
			
			resPage.innerHTML = "<h1>RESEARCH<h1>";
			resPage.className = "resPage";
			resPage.append(resXOutBtn);

			container.append(resPage);

			setTimeout(function(){
				makeFull(resPage);
			},0);
		}
	},
	resXOutFunc: function(resPage,k){
		return function(){
			takeFull(resPage);
			setTimeout(function(){
				resPage.remove();
			},666);
		}
	},
	addition: function(navBtns,container,gameNav,gameNav1,navToggle,gameConsole,bbb,i,k) {
		return function(){
			var cycleBtn = bySel("#cycleBtn");
			navBtns.disabled = true;
			navBtns.innerHTML = "⏳";

			bbb.loadFiles[i].moves--;

			setTimeout(function(){
				saveLS("bGAuser",bbb);
				if(bbb.loadFiles[i].moves > 0){
					navBtns.disabled = false;
					cycleBtn.disabled = true;
				} else {
					navBtns.disabled = true;
					cycleBtn.disabled = false;
				}
				navBtns.innerHTML = navAss[k];
			},1000);
		}
	},
	navAssets1: function(container,gameNav,gameNav1,navToggle,gameConsole,bbb,i){
		for (var i = 0; i < navAss1.length; i++) {
			var navBtns1 = createEle("button");

			navBtns1.className = "navBtns";
			navBtns1.innerHTML = navAss1[i];

			if(i === 0){
				navBtns1.disabled = true;
			}
			if(i === 1){
				navBtns1.disabled = true;
			}
			if(i === 2){
				navBtns1.disabled = true;
			}
			if(i === 3){
				navBtns1.disabled = true;
			}
			if(i === 4){
				navBtns1.disabled = true;
			}
			if(i === 5){
				navBtns1.disabled = true;
			}
			if(i === 6){
				navBtns1.disabled = true;
			}
			if(i === 7){
				navBtns1.disabled = true;
			}

			gameNav1.append(navBtns1);
		}
	}
};