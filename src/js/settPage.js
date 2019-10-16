var labelNames = ["MAIN","MUSIC","AMBIENT"];
var settings = {
	page: function(container,items,bbb){
		var settContainer = createEle("div"),
			sLabel = createEle("p"),
			sStuff = createEle("div"),
			lsLabel = createEle("p"),
			lsStuff = createEle("div"),
			lsClr = createEle("button"),
			fsToggle = createEle("button"),
			chtLabel = createEle("span"),
			controlsLabel = createEle("div"),
			cheatsToggle = createEle("input");

		lsLabel.innerHTML = "APPLICATION";
		lsLabel.className = "lsLabel";

		lsClr.innerHTML = "CLEAR DATA";
		lsClr.className = "lsClr";
		lsClr.onclick = settings.clearLS();

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
		lsStuff.append(lsClr,fsToggle,chtLabel,controlsLabel);

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