var game = {
	init: function(bbb,x,i){
		var container = bySel(".container"),
			gFile = createEle("div");
		var bbb = parseLS("bGAuser");

		var progressBar = createEle("div"),
			progressPage = createEle("div"),
			myBar = createEle("div");



		myBar.className = "myBar";
		myBar.innerHTML = "&nbsp;";
		myBar.style.width = "0%";

		progressBar.className = "progressBar";
		progressBar.append(myBar);

		progressPage.className = "progressPage";
		progressPage.append(progressBar);

		bbb.loopBool = true;
		bbb.activeFile = bbb.loadFiles[i].key;
		saveLS("bGAuser", bbb);

		gFile.innerHTML = bbb.loadFiles[i].name;
		gFile.className = "gFile";
		gFile.append(progressPage);

		container.append(gFile);

		setTimeout(function(){
			makeFull(gFile);
			game.loader(progressPage,myBar,gFile);
		},100);
	},
	loader: function(progressPage,myBar,gFile) {
		setTimeout(function(){
			gFile.onload = game.counter(progressPage,myBar);
		},666);
	},
	counter: function(progressPage,myBar){
		var i = 0;

		if (i == 0) {
		    i = 1;
		    var width = 1;
		    var id = setInterval(frame, 50);
		    function frame() {
		      if (width >= 100) {
		        clearInterval(id);
		        i = 0;
		        progressPage.remove();
		      } else {
		        width++;
		        myBar.style.width = width + "%";
		      }
		    }
  		}
	}
}