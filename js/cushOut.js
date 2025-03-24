document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cushOutMoney = getInputfieldValueById("input-cash-out-money");
    const cushOutPin = getInputfieldValueById("input-cash-out-pin");
    if (cushOutPin === 1234) {
      const accountBalance = getTextFieldValueById("account-balance");
      const newBalance = accountBalance - cushOutMoney;
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("failed to cash out please tyr again ");
    }
  });
