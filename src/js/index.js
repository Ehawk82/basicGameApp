var myUI,stBtnName,bgauser;
/*
if (!Date.now) {
    Date.now = function() { var ts; return ts = Math.floor(Date.now() / 1000) }
}
console.log(ts);
*/
bgauser = {
	gBool: false,//is a game loaded?
	loadFiles: {},//saved game
	fileLookup: "",//current load name
	userString: "",//a string that can be parse to define inventory
	appVolume: 0.5,//global volume
	ambVolume: 0.5,//ambient volume
	musicVolume: 0.5,//music volume
	loopBool: false,//is the game loop active
	loopSpeed: 100,//the speed of the loop
	member: false,//boolean for admin controls
	collection: {},//add a nest of data here for any reason
	notes: {},//the history log of user actions
	gameTimeStamps: {//timestamps
		startingTime: "",//starting time of active game
		lastTimeOut: "",//timestamp recorded at last exit
		currentTime: "",//keeping track of current time in seconds
		diffTime: ""//return difference between last time out and current time
	},
	cheats: false//cheats of course
};
stBtnName = ["NEW","LOAD","SETTINGS","CREDITS"];//names of the buttons on the main menu

myUI = {//main User Interface
	init: function(){//initialize and startup
		LSinit("bGAuser", bgauser);//run init for localStorage item

		var bbb = parseLS("bGAuser");//call the users saved data
		myUI.loadUnits(bbb);//load the program
	},
	loadUnits: function(bbb){//load the program
		var dvContain = createEle("div"),
			startMenu = createEle("div"),
		    startPage = createEle("div"),
		    myScreen = createEle("div");

		startMenu.className = "startMenu";

		for (var i = 0; i < stBtnName.length; i++) {//create some buttons
			var startBtns = createEle("button");

			startBtns.className = "startBtns";
			startBtns.innerHTML = stBtnName[i];
			startBtns.onclick = myUI.stBtnFunc(i,startMenu,myScreen);

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
	stBtnFunc: function(i,startMenu,myScreen){
		return function(){
			
			takeFull(startMenu);
			var title = createEle("h1"), thingy
				pauseBtn = createEle("button");
			
			if(i === 0){
				thingy = "New Game";
			}

			if(i === 1){
				thingy = "LOAD GAME";
			}

			if(i === 2){
				thingy = "SETTINGS";
			}

			if(i === 3){
				thingy = "CREDITS";
			}

			pauseBtn.className = "pauseBtn";
			pauseBtn.innerHTML = "⚙";
			pauseBtn.onclick = myUI.pauseBtnFunc(startMenu,myScreen);

			title.className = "title";
			title.innerHTML = thingy;

			myScreen.append(title, pauseBtn);

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