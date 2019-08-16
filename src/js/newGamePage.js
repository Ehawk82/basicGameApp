var charOptions = ["CHARACTER","TYPE 1","TYPE 2","TYPE 3"];
var regOptions = ["REGION","AREA 1","AREA 2","AREA 3","AREA 4","AREA 5"];
var elemOptions = ["ELEMENT","ELEM 2","ELEM 3", "ELEM 4"];
var newGameProgram = {
	page: function(container,items){
		var newGameContainer = createEle("div"),
			form = createEle("div"),
			nameIn = createEle("input"),
			charType = createEle("select"),
			regType = createEle("select"),
			elemType = createEle("select"),
			ngBtn = createEle("button");

		charType.className = "fItems";
		charType.name = "character_type";
		for (var i = 0; i < charOptions.length; i++) {
			var opt1 = createEle("option");

			opt1.innerHTML = charOptions[i];

			charType.appendChild(opt1);
		}

		regType.className = "fItems";
		regType.name = "region_type";
		for (var i = 0; i < regOptions.length; i++) {
			var opt2 = createEle("option");

			opt2.innerHTML = regOptions[i];

			regType.appendChild(opt2);
		}

		elemType.className = "fItems";
		elemType.name = "elemental_type";
		for (var i = 0; i < elemOptions.length; i++) {
			var opt3 = createEle("option");

			opt3.innerHTML = elemOptions[i];

			elemType.appendChild(opt3);
		}

		nameIn.type = "text";
		nameIn.className = "fItems";
		nameIn.placeholder = "NAME";
		nameIn.onkeyup = newGameProgram.validateName(ngBtn);

		ngBtn.className = "ngBtn";
		ngBtn.innerHTML = "✔";
		ngBtn.disabled = true;
		ngBtn.onclick = newGameProgram.submitForm(nameIn,charType,regType,elemType,ngBtn);

		form.className = "form";
		form.append(nameIn,charType,regType,elemType,ngBtn);

		newGameContainer.className = "newGameContainer";
		newGameContainer.append(form);

		items.append(newGameContainer);
	},
	validateName: function(ngBtn){
		return function(){
			ngBtn.disabled = false;
		}
	},
	submitForm: function(nameIn,charType,regType,elemType,ngBtn){
		return function(){
			var bbb = parseLS("bGAuser"),gfObject, startBtns = bySelAll(".startBtns");



			gfObject = {
				key: "gf" + bbb.fileLookup,
				name: nameIn.value
			};

			bbb.loadFiles[bbb.fileLookup] = gfObject;
			bbb.fileLookup++;
			bbb.gBool = true;

			saveLS("bGAuser", bbb);

			startBtns[1].disabled = false;
			items.remove();

		}
	}
};