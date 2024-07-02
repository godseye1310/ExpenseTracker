let expense = document.getElementById("expense");
let description = document.getElementById("description");
let category = document.getElementById("category");

let expenseList = document.getElementById("expenseList");

//Expense Data Form Submit
function myexpense(event) {
	event.preventDefault();
	let myexpense = {
		expense: expense.value,
		description: description.value,
		category: category.value,
	};

	//Storing data to local storage
	localStorage.setItem(myexpense.description, JSON.stringify(myexpense));
	expense.value = "";
	description.value = "";
	category.value = "";

	createExpenseList(myexpense);
}

//Create & Display Expense List
function createExpenseList(expenseObj) {
	let myList = document.createElement("li");
	myList.className = "lists";
	myList.innerHTML = `${expenseObj.expense}$  <strong>${expenseObj.description}</strong>  ${expenseObj.category}`;
	expenseList.appendChild(myList);

	let listDiv = document.createElement("div");
	myList.appendChild(listDiv);

	let dltbtn = document.createElement("button");
	dltbtn.className = "mybtn";
	dltbtn.innerText = "Delete Expense";
	listDiv.appendChild(dltbtn);

	dltbtn.onclick = () => {
		expenseList.removeChild(myList);
		localStorage.removeItem(expenseObj.description);
	};

	let editbtn = document.createElement("button");
	editbtn.className = "mybtn";
	editbtn.innerText = "Edit Expense";
	listDiv.appendChild(editbtn);

	editbtn.onclick = () => {
		expenseList.removeChild(myList);
		localStorage.removeItem(expenseObj.description);
		expense.value = expenseObj.expense;
		description.value = expenseObj.description;
		category.value = expenseObj.category;
	};
}

//Show data even on Page Refresh
for (let i = 0; i < localStorage.length; i++) {
	createExpenseList(JSON.parse(localStorage.getItem(localStorage.key(i))));
}

// git remote add origin git@github.com:godseye1310/ExpenseTracker.git
// git branch -M main
// git push -u origin main
