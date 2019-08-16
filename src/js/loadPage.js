var loader = {
	page: function(container,items){
		var loadContainer = createEle("div"), loadBox = createEle("p");

		var bbb = parseLS("bGAuser");

		var loadObjects = [bbb.loadFiles].forEach(function(element) {
			for (var i = 0; i < element.length; i++) {
				loadBox.innerHTML += element[i].name;
			}
		});

		loadBox.className = "loadBox";


		loadContainer.className = "loadContainer";
		loadContainer.append(loadBox);

		items.append(loadContainer);
	}
};