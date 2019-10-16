var loader = {
	page: function(container,items){
		var loadContainer = createEle("div"), loadBox = createEle("div"),nameIn;

		var bbb = parseLS("bGAuser");

		var loadObjects = [bbb.loadFiles].forEach(function(element) {
			for (var i = 0; i < element.length; i++) {
				loadBox.innerHTML += "<div class='gTabs'><span>" + element[i].name + "</span></div>";
				nameIn = element[i].name;
			}	
		});

		loadBox.className = "loadBox";

		loadContainer.className = "loadContainer";
		loadContainer.append(loadBox);
		items.append(loadContainer);

		setTimeout(function(){
			var gTabs = bySelAll(".gTabs");
			for(var i = 0; i < gTabs.length; i++) {
				gTabs[i].addEventListener("click", loader.gTabClicked(bbb,nameIn,i), false);
			}
		},100);
	},
	gTabClicked: function(bbb,nameIn,i){
		return function(){
			var title = bySel(".title");
			title.innerHTML = " ";
			items.remove();

			game.init(bbb,nameIn,i);
		}
	}
};