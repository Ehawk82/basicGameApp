var loader = {
	page: function(container,items){
		var loadContainer = createEle("div"), loadBox = createEle("p");

		loadBox.className = "loadBox";
		loadBox.innerHTML = "Load Box";

		loadContainer.className = "loadContainer";
		loadContainer.append(loadBox);

		items.append(loadContainer);
	}
};