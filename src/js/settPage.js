var labelNames = ["MAIN","MUSIC","AMBIENT"];
var settings = {
	page: function(container,items,bbb){
		var settContainer = createEle("div"),
			sLabel = createEle("p"),
			sStuff = createEle("div"),
			lsLabel = createEle("p"),
			lsStuff = createEle("div"),
			lsClr = createEle("button");

		lsLabel.innerHTML = "DATA";
		lsLabel.className = "lsLabel";

		lsStuff.className = "lsStuff";
		lsStuff.append(lsClr);

		lsClr.innerHTML = "CLEAR DATA";
		lsClr.className = "lsClr";
		lsClr.onclick = settings.clearLS();

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
			rngs.step = .1;
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