var game = {
	init: function(bbb,x,i){
		var myScreen = bySel(".myScreen");

		//makeFull(myScreen);
		console.log(myScreen);
		var bbb = parseLS("bGAuser");
		bbb.loopBool = true;
		bbb.activeFile = bbb.loadFiles[i].key;
		saveLS("bGAuser", bbb);
	}
}