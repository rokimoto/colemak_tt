$(document).ready(function() {


	console.log("hi");
	var newLevelPage = document.getElementById('newLevelPage');
	console.log(newLevelPage);
	// if (newLevelPage) {
		console.log("hi");

		var formGroup = document.getElementById('formGroup');
		var newCatText = document.getElementById('newCatText');
		var selectBox = document.getElementById('level_category_id');
		var form = document.getElementById('new_level');
		var selectBoxName = document.getElementById('level_category_attributes_name');
		var chooseOne = document.createElement("option");
		chooseOne.value = "new";
		chooseOne.innerHTML = "Add a new category...";
		selectBox.appendChild(chooseOne);

		var newNameInput = document.createElement("input");
		newNameInput.type = "text";
		newNameInput.name = "level[category_attributes][name]";
		newNameInput.id = "level_category_attributes_name";

		var selectBoxCounter = 0;

		newCatText.style.display = "none";
		selectBoxName.style.display = "none";

		selectBox.onchange=function(){
			if (this.value != "new") {
				newCatText.style.display = "none";
				formGroup.removeChild(selectBoxName);
				selectBoxCounter++;
			}
			else if (this.value == "new" && selectBoxCounter > 0) {
				formGroup.appendChild(newNameInput);
				newCatText.style.display = "block";
			}
			else {
				newCatText.style.display = "block";
				selectBoxName.style.display = "block";
			}
		};

	// }

});
