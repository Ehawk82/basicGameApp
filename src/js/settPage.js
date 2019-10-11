var labelNames = ["ALL SOUND","MAIN","MUSIC","AMBIENT"];
var settings = {
	page: function(container,items,bbb){
		var settContainer = createEle("div"),
			sLabel = createEle("p"),
			sStuff = createEle("div");

		for (var i = 0; i < 3; i++) {
			var rngs = createEle("input"),
			    lbls = createEle("label");

			lbls.innerHTML = labelNames[i];
			lbls.className = "labels";

			rngs.className = "ranges";
			rngs.type = "range";
			rngs.max = 1;
			rngs.min = 0;
			rngs.step = .1;
			rngs.value = .5;
			rngs.onchange = settings.soundFunc(rngs,i,bbb);

			sStuff.append(lbls,rngs);
		}
	
		sLabel.innerHTML = "SOUND SETTINGS";

		sStuff.className = "cStuff";

		settContainer.className = "settContainer";
		settContainer.append(sLabel,sStuff);

		items.append(settContainer);
	},
	soundFunc: function(rngs,i,bbb) {
		return function(){
			console.log(i);
		}
	}
};