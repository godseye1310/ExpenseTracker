let expense = document.getElementById("expense");
let description = document.getElementById("description");
let category = document.getElementById("category");

let expenseList = document.getElementById("expenseList");

function myexpense(event) {
  event.preventDefault();
  let myexpense = {
    expense: expense.value,
    description: description.value,
    category: category.value,
  };

  localStorage.setItem(myexpense.description, JSON.stringify(myexpense));
  expense.value = "";
  description.value = "";
  category.value = "";

  createExpenseList(myexpense);
}

function createExpenseList(expenseObj) {
  let myList = document.createElement("li");
  myList.className = "lists";
  myList.innerText = `${expenseObj.expense} - ${expenseObj.description} - ${expenseObj.category}`;
  expenseList.appendChild(myList);

  let dltbtn = document.createElement("button");
  dltbtn.className = "mybtn";
  dltbtn.innerText = "Delete Expense";
  myList.appendChild(dltbtn);

  dltbtn.onclick = () => {
    expenseList.removeChild(myList);
    localStorage.removeItem(expenseObj.description);
  };

  let editbtn = document.createElement("button");
  editbtn.className = "mybtn";
  editbtn.innerText = "Edit Expense";
  myList.appendChild(editbtn);

  editbtn.onclick = () => {
    expenseList.removeChild(myList);
    localStorage.removeItem(expenseObj.description);
    expense.value = expenseObj.expense;
    description.value = expenseObj.description;
    category.value = expenseObj.category;
  };
}

for (let i = 0; i < localStorage.length; i++) {
  createExpenseList(JSON.parse(localStorage.getItem(localStorage.key(i))));
}
