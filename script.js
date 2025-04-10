document.addEventListener('DOMContentLoaded', () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const TotalAmount = document.getElementById("total-amount");

  let expenses = [];
  let totalAmount = calculateTotal();

  expenseForm.addEventListener('submit', (e) =>{
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value.trim());

    if(name !== "" && isNaN(amount) && amount > 0){
      const newExpense = {
        id: Date.new(),
        name: name,
        amount: amount
      }
      expenses.push(newExpense);
      saveExpenseTolocal();
    }
    console.log(typeof expenseAmountInput.value.trim())
  });

  function calculateTotal(){

  }
  function saveExpenseTolocal(){
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

});