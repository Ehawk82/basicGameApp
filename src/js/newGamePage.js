var charOptions = ["type 1","type 2","type 3"];
var newGameProgram = {
	page: function(container,items){
		var newGameContainer = createEle("div"),
			form = createEle("form"),
			nameIn = createEle("input"),
			charType = createEle("select"),
			ngBtn = createEle("button");

		charType.className = "fItems";
		charType.name = "character_type";
		for (var i = 0; i < charOptions.length; i++) {
			var options = createEle("option");

			options.innerHTML = charOptions[i];

			charType.appendChild(options);
		}

		nameIn.type = "text";
		nameIn.className = "fItems";
		nameIn.placeholder = "NAME";

		ngBtn.className = "ngBtn";
		ngBtn.innerHTML = "✔";
		ngBtn.disabled = true;

		form.className = "form";
		form.append(nameIn,charType,ngBtn);

		newGameContainer.className = "newGameContainer";
		newGameContainer.append(form);

		items.append(newGameContainer);
	}
};