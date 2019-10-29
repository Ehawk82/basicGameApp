var labelNames = ["MAIN","MUSIC","AMBIENT"];

var settings = {
	page: function(container,items,bbb){
		var settContainer = createEle("div"),
			sLabel = createEle("p"),
			sStuff = createEle("div"),
			lsLabel = createEle("p"),
			lsStuff = createEle("div"),
			lsClr = createEle("button"),
			lsClrItemsBtn = createEle("button"),
			fsToggle = createEle("button"),
			chtLabel = createEle("span"),
			controlsLabel = createEle("div"),
			cheatsToggle = createEle("input");

		lsLabel.innerHTML = "APPLICATION";
		lsLabel.className = "lsLabel";

		lsClrItemsBtn.innerHTML = "SAVED GAMES";
		lsClrItemsBtn.className = "lsClrItemsBtn";
		lsClrItemsBtn.onclick = settings.loadSavedGames(lsClrItemsBtn,settContainer);

		lsClr.innerHTML = "CLEAR ALL DATA";
		lsClr.className = "lsClr";
		lsClr.onclick = settings.loadWarnPage(settContainer);

		fsToggle.innerHTML = "FULL SCREEN MODE";
		fsToggle.className = "fsToggle";
		fsToggle.onclick = openFullscreen();

		chtLabel.innerHTML = "CHEATS ";
		chtLabel.append(cheatsToggle);

		cheatsToggle.type = "checkbox";
		cheatsToggle.checked = bbb.cheats;
		cheatsToggle.onclick = settings.cheatFunc(cheatsToggle,bbb);

		controlsLabel.innerHTML = "CONTROLS";
		controlsLabel.className = "controlsLabel";
		controlsLabel.onclick = settings.controlsFunc(controlsLabel,settContainer);

		lsStuff.className = "lsStuff";
		lsStuff.append(lsClr,lsClrItemsBtn,fsToggle,chtLabel,controlsLabel);

		for (var i = 0; i < 3; i++) {
			var rngs = createEle("input"),
			    lbls = createEle("label");

			var pingName;

			lbls.innerHTML = labelNames[i];
			lbls.className = "labels";

			rngs.className = "ranges";
			rngs.type = "range";
			rngs.max = 1;
			rngs.min = 0;
			rngs.step = .001;

			if (i === 0) {
				pingName = bbb.appVolume;
				rngs.value = pingName;
			}
			if (i === 1) {
				pingName = bbb.musicVolume;
				rngs.value = pingName;
			}
			if (i === 2) {
				pingName = bbb.ambVolume;
				rngs.value = pingName;
			}
			rngs.onchange = settings.soundFunc(rngs,i,bbb);

			sStuff.append(lbls,rngs);
		}
	
		sLabel.innerHTML = "SOUND SETTINGS";

		sStuff.className = "cStuff";

		settContainer.className = "settContainer";
		settContainer.append(sLabel,sStuff,lsLabel,lsStuff);

		items.append(settContainer);
	},
	loadSavedGames: function(lsClrItemsBtn,settContainer) {
		return function(){
			lsClrItemsBtn.onclick = null;
			var bbb = parseLS("bGAuser");
			var saveGamesPage = createEle("div"),
			    bLD_length = bbb.loadFiles.length;

			saveGamesPage.className = "saveGamesPage";
			
			for (var i = 0; i < bLD_length; i++) {
				var sgItems = createEle("p");

				sgItems.innerHTML = bbb.loadFiles[i].name;
				sgItems.onclick = settings.evalLoadFile(i,bbb,bLD_length,sgItems,settContainer);

				saveGamesPage.append(sgItems)
			};

			settContainer.append(saveGamesPage);

			setTimeout(function(){
				makeFull(saveGamesPage);
			},0);
		}
	},
	evalLoadFile: function(i,bbb,bLD_length,sgItems,settContainer) {
		return function(){
			var areaNames = [" ","Desert","Marsh","Plains","Tundra","Grasslands"];
			var charNames = [" ","Warrior","Range","Mounted"];
			var elemNames = [" ","Fire","Water","Air"];
			var tableInfo = [
				[
					[
						"Level",
						"Character",
						"Region",
						"Element"
					],
					[
						bbb.level,
						charNames[bbb.loadFiles[i].cType],
						areaNames[bbb.loadFiles[i].rType],
						elemNames[bbb.loadFiles[i].eType]
					]
				],
				[
					[
						" ",
						" ",
						" ",
						"&nbsp;"
					],
					[
						" ",
						" ",
						" ",
						"<button id='deleteBtn'>DELETE</button>"
					]
				]
			];

			sgItems.onclick = null;
			var gameFilePage = createEle("div"),
				giTable = createEle("table"),
				indexCodeHolder = createEle("div");

			const indexCode = createEle("span");

			indexCode.innerHTML = i + 1;

			indexCodeHolder.innerHTML = "File no: ";
			indexCodeHolder.className = "indexCodeHolder";
			indexCodeHolder.append(indexCode);

			for (var h = 0; h < 2; h++) {
				var th = createEle("th");

				for (var k = 0; k < 4; k++) {
					var tr = createEle("tr");

					for (var j = 0; j < 2; j++) {
						var td = createEle("td");

						td.innerHTML = tableInfo[h][j][k];

						tr.append(td);
					}

					th.append(tr);
				}
				giTable.append(th);
			}

			gameFilePage.innerHTML = "<h2>" + bbb.loadFiles[i].name + "</h2>";
			gameFilePage.className = "gameFilePage";
			gameFilePage.append(giTable,indexCodeHolder);

			settContainer.append(gameFilePage);
			setTimeout(function(){
				makeFull(gameFilePage);

				var deleteBtn = bySel("#deleteBtn");

				deleteBtn.onclick = settings.evalDeleteFunc(i,bbb,bLD_length,sgItems,settContainer);
			},0);
		}
	},
	evalDeleteFunc: function(i,bbb,bLD_length,sgItems,settContainer){
		return function(){
			var bArr = [];

			var bL = bbb.loadFiles;
			for (var k = 0; k < bLD_length; k++) {
				var bLjsp = JSON.stringify(bL[k]);
				if(k > i || k < i){
					bArr.push(bLjsp);
				}
			}
			//var myFile = {bArr};

			//bbb.fileLookup = +bbb.fileLookup - +1;
			//bbb.loadFiles = myFile;

			//saveLS("bGAuser", bbb);
			//location.reload();
/*needs help*/
		}
	},
	controlsFunc: function(controlsLabel,settContainer){
		return function(){
			controlsLabel.onclick = null;
			var controlPage = createEle("div");

			controlPage.innerHTML = "&nbsp;";
			controlPage.className = "controlPage";

			settContainer.append(controlPage);

			setTimeout(function(){
				makeFull(controlPage);
			},1);

		}
	},
	cheatFunc: function(cheatsToggle,bbb) {
		return function(){
			var ccc = cheatsToggle.checked;
			if(ccc === true){
				bbb.cheats = true;
			} else {
				bbb.cheats = false;
			}
			saveLS("bGAuser", bbb);
		}
	},
	loadWarnPage: function(settContainer){
		return function(){
			var warnPage = createEle("div"),
			    btnHolder = createEle("div"),
			    yes = createEle("button"),
			    no = createEle("button");

			yes.innerHTML = "YES";
			yes.onclick = settings.clearLS();

			no.innerHTML = "NO";
			no.onclick = settings.reloadApp();

			btnHolder.className = "btnHolder";
			btnHolder.append(yes,no);

			warnPage.className = "warnPage";
			warnPage.innerHTML = "<h2>YOU ARE ABOUT TO CLEAR ALL FILE STORAGE FOR THIS APP. PROCEED?</h2>";
			warnPage.append(btnHolder);

			settContainer.append(warnPage);
			
			setTimeout(function(){
				makeFull(warnPage);
			},0);
		}
	},
	reloadApp: function(){
		return function(){
			location.reload();
		}
	},
	clearLS: function(){
		return function(){
			removeLSitem("bGAuser");
			setTimeout(function(){
				location.reload();
			},1);
		}
	},
	soundFunc: function(rngs,i,bbb) {
		return function(){
			var pingName;
			if (i === 0) {
				pingName = ["appVolume"];
			}
			if (i === 1) {
				pingName = ["musicVolume"];
			}
			if (i === 2) {
				pingName = ["ambVolume"];
			}

			bbb[pingName[0]] = rngs.value;
			saveLS("bGAuser",bbb);
		}
	}
};