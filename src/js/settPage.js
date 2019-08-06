var settings = {
	page: function(container,items){
		var settContainer = createEle("div"),
			sLabel = createEle("p"),
			sStuff = createEle("div"),
			rng1 = createEle("input");

		rng1.className = "ranges";
		rng1.type = "range";
		rng1.max = 1;
		rng1.min = 0;
		rng1.step = .1;
		rng1.value = .5;

		sLabel.innerHTML = "SOUND SETTINGS";

		sStuff.className = "cStuff";
		sStuff.append(rng1);

		settContainer.className = "settContainer";
		settContainer.append(sLabel,sStuff);

		items.append(settContainer);
	}
};