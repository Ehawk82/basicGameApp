var gameStuffs,cTypeName,rTypeName,eTypeName;

cTypeName = ["HUMANITY","GREY","PRIDE"];
rTypeName = ["VEGA","JULE","DARCOS","PLANET YORK","KEPLAR 20B"];
eTypeName = ["SPIRAL","SOMBRERO","PINWHEEL"];

var navAss = ["🔁","🔧","🧪","➕","🔒","🔒","🔒","🔒"];
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
		    c = (+ctype - 1),r = (+rtype - 1),e = (+etype - 1),
		    lvlHolder = createEle("div");

		var planet = createEle("div");

		planet.innerHTML = "&nbsp;";
		planet.className = "planet";

		cTypeHolder.innerHTML = cTypeName[c];
		cTypeHolder.className = "cTypeHolder";

		rTypeHolder.innerHTML = rTypeName[r];
		rTypeHolder.className = "rTypeHolder";

		eTypeHolder.innerHTML = eTypeName[e];
		eTypeHolder.className = "eTypeHolder";

		lvlHolder.innerHTML = bbb.loadFiles[i].gLevel;
		lvlHolder.className = "lvlHolder"; 

		nameIn.innerHTML = bbb.loadFiles[i].name;
		nameIn.className = "nameIn";

		nameholder.append(nameIn,cTypeHolder,rTypeHolder,eTypeHolder,lvlHolder);
		nameholder.className = "nameholder";

		gameConsole.append(nameholder,planet);
		setTimeout(function(){
			gameConsole.onload = gameStuffs.renderPlanet(planet,i);
		},100);
	},
	renderPlanet: function(planet,i){
		var bbb = parseLS("bGAuser"),
		    rt = bbb.loadFiles[i].rType, clr;

		var gameConsole = bySel(".gameConsole"),
			hW = gameConsole.offsetWidth / 2,
			hMw = bbb.loadFiles[i].matter / 2,
			hH = gameConsole.offsetHeight / 2,
			hMh = bbb.loadFiles[i].matter / 2;

		if(rt === "1"){
			clr = "#22606E";
		}
		if(rt === "2"){
			clr = "#634F1F";
		}
		if(rt === "3"){
			clr = "#302E66";
		}
		if(rt === "4"){
			clr = "#626E22";
		}
		if(rt === "5"){
			clr = "#1F572D";
		}
		console.log(rt);
		console.log(clr);
		planet.style.backgroundColor = clr;
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

			bbb.loadFiles[i].moves = bbb.loadFiles[i].moves + bbb.loadFiles[i].gLevel;

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
			var cycleBtn = bySel("#cycleBtn"),
				lvlHolder = bySel(".lvlHolder");
			navBtns.disabled = true;
			navBtns.innerHTML = "⏳";

			if(bbb.loadFiles[i].matter === 10 || bbb.loadFiles[i].matter === 20 || bbb.loadFiles[i].matter === 30 || bbb.loadFiles[i].matter === 40 || bbb.loadFiles[i].matter === 50 || bbb.loadFiles[i].matter === 60 || bbb.loadFiles[i].matter === 70 || bbb.loadFiles[i].matter === 80 || bbb.loadFiles[i].matter === 90 || bbb.loadFiles[i].matter === 100){
				bbb.loadFiles[i].gLevel++;
		        lvlHolder.innerHTML = "Level: " + bbb.loadFiles[i].gLevel;
			}

			bbb.loadFiles[i].moves--;
			var planet = bySel(".planet");
			gameStuffs.renderMeteor(gameConsole,planet,bbb,i,k);

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
	renderMeteor: function(gameConsole,planet,bbb,i,k){
		var meteor = createEle("div"),
		    rH = gameConsole.offsetHeight,
		    rL = gameConsole.offsetWidth,
		    pL = planet.offsetHeight,
		    randTop = Math.floor(Math.random() * rH),
		    randLeft = Math.floor(Math.random() * rL),
		    randPlanet = Math.floor(Math.random() * pL),
		    operatorBool = Math.floor(Math.random() * 2),operatorBool2 = Math.floor(Math.random() * 2),op,mp;

		meteor.innerHTML = "&nbsp;";
		meteor.className = "meteor_left";
		meteor.style.top = randTop + "px";
		if(operatorBool === 0){
			op = "-";
		}else{
			op = "+";
		}
		if(operatorBool2 === 0){
			mp = "-";
		}else{
			mp = "+";
		}
		var opval = (rH / 2) + op + (randPlanet / 3.14);
		var mpval = (rL / 2) + mp + (randPlanet / 3.14);

		function addHeights(s){
		    var total= 0, s= s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
		    while(s.length){
		        total+= parseFloat(s.shift());
		    }
		    return total,meteor.style.top = total + "px";

		}
		function addWidths(t){
		    var total= 0, t= t.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
		    while(t.length){
		        total+= parseFloat(t.shift());
		    }
		    return total,meteor.style.left = total + "px";

		}
		var o = opval.toString();
		var m = mpval.toString();

		setTimeout(function(){
			addHeights(o);
			addWidths(m);
			if(bbb.loadFiles[i].matter < 500){ 
				bbb.loadFiles[i].matter++;
			}
			takeLeft(meteor);
			setTimeout(function(){
				saveLS("bGAuser",bbb);
				gameStuffs.renderPlanet(planet,i);
			},300);
			setTimeout(function(){
				gameStuffs.meteorCollide(gameConsole,planet,meteor,bbb,i,k);
			},666);
		},0);
	},
	meteorCollide: function(gameConsole,planet,meteor,bbb,i,k){
		meteor.remove();
	},
	navAssets1: function(container,gameNav,gameNav1,navToggle,gameConsole,bbb,i){
		for (var j = 0; j < navAss1.length; j++) {
			var navBtns1 = createEle("button");

			navBtns1.className = "navBtns";
			navBtns1.innerHTML = navAss1[i];

			if(j === 0){
				navBtns1.disabled = true;
			}
			if(j === 1){
				navBtns1.disabled = true;
			}
			if(j === 2){
				navBtns1.disabled = true;
			}
			if(j === 3){
				navBtns1.disabled = true;
			}
			if(j === 4){
				navBtns1.disabled = true;
			}
			if(j === 5){
				navBtns1.disabled = true;
			}
			if(j === 6){
				navBtns1.disabled = true;
			}
			if(j === 7){
				navBtns1.disabled = true;
			}

			gameNav1.append(navBtns1);
		}
	}
};