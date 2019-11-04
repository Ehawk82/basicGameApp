var charOptions = ["","SPECIES 1","SPECIES 2","SPECIES 3"];
var regOptions = ["","PLANET 1","PLANET 2","PLANET 3","PLANET 4","PLANET 5"];
var elemOptions = ["","GALAXY 1","GALAXY 2", "GALAXY 3"];
var newGameProgram = {
	page: function(container,items,bbb){
		var newGameContainer = createEle("div"),
			form = createEle("div"),
			nameIn = createEle("input"),
			charType = createEle("select"),
			regType = createEle("select"),
			elemType = createEle("select"),
			ngBtn = createEle("button");

		charType.className = "fItems";
		charType.name = "character_type";
		for (var i = 1; i < charOptions.length; i++) {
			var opt1 = createEle("option");

			opt1.innerHTML = charOptions[i];

			charType.appendChild(opt1);
		}

		regType.className = "fItems";
		regType.name = "region_type";
		for (var i = 1; i < regOptions.length; i++) {
			var opt2 = createEle("option");

			opt2.innerHTML = regOptions[i];

			regType.appendChild(opt2);
		}

		elemType.className = "fItems";
		elemType.name = "elemental_type";
		for (var i = 1; i < elemOptions.length; i++) {
			var opt3 = createEle("option");

			opt3.innerHTML = elemOptions[i];

			elemType.appendChild(opt3);
		}

		nameIn.type = "text";
		nameIn.className = "fItems";
		nameIn.placeholder = "NAME";
		nameIn.maxLength = 8;
		nameIn.onkeyup = newGameProgram.validateName(ngBtn,nameIn);
		nameIn.autofocus = true;

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
	validateName: function(ngBtn,nameIn){
		return function(){
			var x = nameIn.value,
				y = x.trim();
			
			if(y === ""){
				ngBtn.disabled = true;
			}else{
				ngBtn.disabled = false;
			}
		}
	},
	submitForm: function(nameIn,charType,regType,elemType,ngBtn){
		return function(){
			var bbb = parseLS("bGAuser"),gfObject, startBtns = bySelAll(".startBtns");
			var ctc = charType.value.split("SPECIES "),
				rtr = regType.value.split("PLANET "),
				ete = elemType.value.split("GALAXY ");

			var ts = currentTime();

			gfObject = {
				key: "gf" + bbb.fileLookup,
				name: nameIn.value,
				cType: ctc[1],
				rType: rtr[1],
				eType: ete[1],
				matter: 1,
				life: 0,
				timestamp: ts
			};

			bbb.loadFiles[bbb.fileLookup] = gfObject;
			bbb.fileLookup++;
			bbb.gBool = true;

			saveLS("bGAuser", bbb);

			startBtns[1].disabled = false;

			var title = bySel(".title");
			title.innerHTML = " ";
			
			items.remove();

			var i = +(bbb.fileLookup - 1);

			game.init(bbb,nameIn.value,i);
		}
	}
};