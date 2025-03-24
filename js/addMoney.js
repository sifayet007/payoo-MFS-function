document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputfieldValueById("input-add-money");
    const pinNumber = getInputfieldValueById("add-pin-number");
    if (pinNumber === 1234) {
      const accountBalance = getTextFieldValueById("account-balance");
      const newBalance = addMoney + accountBalance;
      document.getElementById("account-balance").innerText = newBalance;
      const p = document.createElement("p");
      p.innerText = `Added: ${addMoney} TK. New Balance ${newBalance}`;
    } else {
      alert("Failed to add money please try again");
    }
  });
