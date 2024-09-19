function calcInterest() {
  const principle = parseFloat(document.getElementById("principle").value);
  let rate = parseFloat(document.getElementById("rate").value);
  const time = parseFloat(document.getElementById("time").value);
  rate = rate / 100;
  console.log("principle: ", principle);
  console.log("interest rate: ", rate);
  console.log("time: ", time);
  const total = principle * (1 + rate * time);
  const interest = total - principle;
  document.getElementById(
    "result"
  ).innerHTML = `With a beginning principal of $${principle.toFixed(
    2
  )} and with a groth rate of ${(rate * 100).toFixed(
    2
  )}% for ${time} years, your total interest will be $${interest.toFixed(
    2
  )} with a grand total of $${total.toFixed(2)}.`;
}
