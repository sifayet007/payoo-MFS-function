document
  .getElementById("cash-out-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOut = getInputValueById("cash-out");
    const cashOutPin = getInputValueById("cash-out-pin");
    if (cashOutPin === 1234) {
      const accountBalance = getTextValueById("account-balance");
      const newBalance = accountBalance - cashOut;
      document.getElementById("account-balance").innerText = newBalance;
    }
  });
