var myUI, stBtnName;

stBtnName = ["NEW","LOAD","SETTINGS","CREDITS"];

myUI = {
	init: function(){
		myUI.loadUnits();
	},
	loadUnits: function(){
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