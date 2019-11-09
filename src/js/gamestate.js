var game = {
	init: function(bbb,x,i){
		var container = bySel(".container"),
			gFile = createEle("div"),
			myScreen = bySel(".myScreen_full");
		var bbb = parseLS("bGAuser");

		var progressBar = createEle("div"),
			progressPage = createEle("div"),
			myBar = createEle("div"),
			gameFrame = createEle("div"),
			gameNav = createEle("div"),
			gameNav1 = createEle("div"),
			navToggle = createEle("button"),
			gameConsole = createEle("div");

		gameConsole.onload = gameStuffs.assets(container,gameNav,gameNav1,navToggle,gameConsole,bbb,i);
		gameConsole.className = "gameConsole";
		gameConsole.style.backgroundImage ="url(src/assets/backgrounds/space" + bbb.loadFiles[i].rType + ".jpg)";

		navToggle.innerHTML = "↔️";
		navToggle.className = "navToggle";
		navToggle.onclick = game.tgglNav(gameNav,gameNav1);
		
		gameNav.className = "gameNav_full";
		gameNav.onload = gameStuffs.navAssets(container,gameNav,gameNav1,navToggle,gameConsole,bbb,i);

		gameNav1.className = "gameNav";
		gameNav1.onload = gameStuffs.navAssets1(container,gameNav,gameNav1,navToggle,gameConsole,bbb,i);

		gameFrame.className = "gameFrame";
		gameFrame.append(gameNav,gameNav1,gameConsole);

		myBar.className = "myBar";
		myBar.innerHTML = "&nbsp;";
		myBar.style.width = "0%";

		progressBar.className = "progressBar";
		progressBar.append(myBar);

		progressPage.className = "progressPage";
		progressPage.append(progressBar);

		bbb.loopBool = true;
		saveLS("bGAuser", bbb);

		gFile.className = "gFile";
		gFile.append(gameFrame,progressPage);

		setTimeout(function(){
			container.append(gFile);
			game.loader(progressPage,myBar,gFile);
			setTimeout(function(){
				makeFull(gFile);
				myScreen.append(navToggle);
			},666);
		},50);
	},
	renderPlanet: function(planet){
		var gameConsole = bySel(".gameConsole");


		console.log(gameConsole.offsetWidth);
	},
	tgglNav: function(gameNav,gameNav1) {
		return function(){
			if (gameNav.className === "gameNav") {
				makeFull(gameNav);
				takeFull(gameNav1);
			} else {
				takeFull(gameNav);
				makeFull(gameNav1);
			}
		}
	},
	loader: function(progressPage,myBar,gFile) {
		setTimeout(function(){
			makeFull(progressPage);
			gFile.onload = game.counter(progressPage,myBar);
		},1);
	},
	counter: function(progressPage,myBar){
		var i = 0;
		setTimeout(function(){
			if (i == 0) {
			    i = 1;
			    var width = 1;
			    var id = setInterval(frame, 1);
			    function frame() {
			      if (width >= 100) {
			        clearInterval(id);
			        i = 0;
			        takeFull(progressPage);
			        setTimeout(function(){
			        	progressPage.remove();
			        },1000);
			      } else {
			        width = width + .1;
			        myBar.style.width = width + "%";
			      }
			    }
	  		}
  		},333);
	}
}