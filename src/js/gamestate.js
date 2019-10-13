var game = {
	init: function(bbb,x,i){
		bbb.loopBool = true;
		bbb.activeFile = bbb.loadFiles[i].key;
		saveLS("bGAuser", bbb);
		//console.log(bbb.loadFiles[i].key);
	}
}