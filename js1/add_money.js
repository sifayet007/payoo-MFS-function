document
  .getElementById("add-money-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputValueById("add-money");
    const addMoneyPin = getInputValueById("add-money-pin");
    if (addMoneyPin === 1234) {
      const availableBalance = getTextValueById("account-balance");
      const newBalance = availableBalance + addMoney;
      document.getElementById("account-balance").innerText = newBalance;
    }
  });
