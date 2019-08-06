var myUI,stBtnName,bgauser;
/*
if (!Date.now) {
    Date.now = function() { var ts; return ts = Math.floor(Date.now() / 1000) }
}
console.log(ts);
*/
bgauser = {
	gBool: false,
	loadFiles: {},
	fileLookup: "",
	userString: "",
	appVolume: 0.5,
	ambVolume: 0.5,
	musicVolume: 0.5,
	loopBool: false,
	loopSpeed: 100,
	member: false,
	collection: {},
	notes: {},
	gameTimeStamps: {
		startingTime: "",
		lastTimeOut: "",
		currentTime: "",
		diffTime: ""
	},
	cheats: false
};
stBtnName = ["NEW","LOAD","SETTINGS","CREDITS"];

myUI = {
	init: function(){
		LSinit("bGAuser", bgauser);

		var bbb = parseLS("bGAuser");
		myUI.loadUnits(bbb);
	},
	loadUnits: function(bbb){
		var dvContain = createEle("div"),
			startMenu = createEle("div"),
		    startPage = createEle("div"),
		    myScreen = createEle("div");

		startMenu.className = "startMenu";

		for (var i = 0; i < stBtnName.length; i++) {
			var startBtns = createEle("button");

			startBtns.className = "startBtns";
			startBtns.innerHTML = stBtnName[i];
			startBtns.onclick = myUI.stBtnFunc(i,startMenu,myScreen);
			myUI.startBtnSensor(startBtns,i,bbb);

			startMenu.append(startBtns);
		}

		startPage.className = "startPage";
		startPage.append(startMenu);

		myScreen.className = "myScreen";

		dvContain.className = "dvContain";
		dvContain.append(startPage,myScreen);

		body.append(dvContain);

		setTimeout(function(){
			makeFull(startMenu);
		},666);
	},
	startBtnSensor: function(startBtns,i,bbb){
		if(i === 0){

		}
		if(i === 1){
			if(bbb.gBool === false){
				startBtns.disabled = true;
			}else{
				startBtns.disabled = false;
			}
			
		}
		if(i === 2){
			
		}
		if(i === 3){
			
		}
	},
	stBtnFunc: function(i,startMenu,myScreen){
		return function(){
			
			takeFull(startMenu);
			var title = createEle("h1"), thingy
				pauseBtn = createEle("button"),
				container = createEle("div"),
				items = createEle("div");
			
			if(i === 0){
				thingy = "NEW GAME";
				items.onload = newGameProgram.page(container,items);

			}

			if(i === 1){
				thingy = "LOAD GAME";
				items.onload = loader.page(container,items);
			}

			if(i === 2){
				thingy = "SETTINGS";
				items.onload = settings.page(container,items);
			}

			if(i === 3){
				thingy = "CREDITS";
				items.onload = credits.page(container,items);
			}

			pauseBtn.className = "pauseBtn";
			pauseBtn.innerHTML = "⚙";
			pauseBtn.onclick = myUI.pauseBtnFunc(startMenu,myScreen);

			title.className = "title";
			title.innerHTML = thingy;

			container.className = "container";
			container.append(items);

			myScreen.append(title, pauseBtn, container);

			setTimeout(function(){
				makeFull(myScreen);
			},666);
		}
	},
	pauseBtnFunc: function(startMenu,myScreen){
		return function(){
			makeFull(startMenu);
			takeFull(myScreen);
			myScreen.innerHTML = "";
		}
	}
};
window.onload = function(){
	myUI.init();
};