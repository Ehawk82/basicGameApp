var myUI,stBtnName,bgauser; /* global variables */
/*
if (!Date.now) {
    Date.now = function() { var ts; return ts = Math.floor(Date.now() / 1000) }
}
console.log(ts);
*/
/* user json */
bgauser = {                    
	gBool: false, /* boolean for game active/deactive status */
	loadFiles: [], /* a place for game files */
	fileLookup: 0, /* tracking how many saved games there are */
	userString: "", /* a random strting */
	appVolume: 0.5, /* main volume */
	ambVolume: 0.5, /* ambient volume */
	musicVolume: 0.5, /* music volume */
	loopBool: false, /* if there is a loop. use this to turn on/off */
	loopSpeed: 100, /* if there is a loop. set speed */
	member: false, /* detect user member status */
	level: 1, /* user global level */
	collection: {}, /* collected objects get stored here */
	notes: {}, /* any notes to display to the user */
	gameTimeStamps: {
		startingTime: "",
		lastTimeOut: "",
		currentTime: "",
		diffTime: ""
	},
	cheats: false /* for cheats and to speed up testing */
};
stBtnName = ["NEW","LOAD","SETTINGS","CREDITS"]; /* the names of the start buttons */

/* the main user interface begins here */
myUI = {
	init: function(){
		LSinit("bGAuser", bgauser); /* initialize and name the template user json */

		var bbb = parseLS("bGAuser"); /* call it and name it */
		myUI.loadUnits(bbb); /* starting basic load */
	},
	loadUnits: function(bbb){
		/* hooking start buttons */
		var dvContain = createEle("div"),
			startMenu = createEle("div"),
		    startPage = createEle("div"),
		    myScreen = createEle("div");

		startMenu.className = "startMenu";

		for (var i = 0; i < stBtnName.length; i++) {
			var startBtns = createEle("button");

			startBtns.className = "startBtns";
			startBtns.innerHTML = stBtnName[i];
			startBtns.onclick = myUI.stBtnFunc(i,startMenu,myScreen,bbb); /* onclicks all point to stBtnFunc */
			myUI.startBtnSensor(startBtns,i,bbb); /* sensing start buttons */

			startMenu.append(startBtns);
		}

		startPage.className = "startPage";
		startPage.append(startMenu);

		myScreen.className = "myScreen";

		dvContain.className = "dvContain";
		dvContain.append(startPage,myScreen);

		body.append(dvContain);

		setTimeout(function(){
			makeFull(startMenu); /* startMenu slides in */
		},100);
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
	stBtnFunc: function(i,startMenu,myScreen,bbb){
		return function(){
			takeFull(startMenu); /* moves the start menu out of frame */
			var title = createEle("h1"),
				thingy,
				pauseBtn = createEle("button"),
				container = createEle("div"),
				items = createEle("div");
			
			if(i === 0){
				thingy = "NEW GAME";
				items.onload = newGameProgram.page(container,items,bbb);
			}

			if(i === 1){
				thingy = "LOAD GAME";
				items.onload = loader.page(container,items,bbb);
			}

			if(i === 2){
				thingy = "SETTINGS";
				items.onload = settings.page(container,items,bbb);
			}

			if(i === 3){
				thingy = "CREDITS";
				items.onload = credits.page(container,items,bbb);
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
			},333);
		}
	},
	pauseBtnFunc: function(startMenu,myScreen){
		return function(){
			var bbb = parseLS("bGAuser");
			if(bbb.loopBool === true){
				//console.log(bbb.activeFile);
			}
			makeFull(startMenu);
			takeFull(myScreen);
			myScreen.innerHTML = "";
		}
	}
};
window.onload = function(){
	myUI.init();
};