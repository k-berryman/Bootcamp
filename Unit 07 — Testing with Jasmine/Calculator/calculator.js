window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues () {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 30000;
  document.getElementById("loan-years").value = 6
  document.getElementById("loan-rate").value = 4;

  let amount = document.getElementById("loan-amount").value;
  let years = document.getElementById("loan-years").value;
  let rate = document.getElementById("loan-rate").value;

  calculateMonthlyPayment({amount: amount, years: years, rate: rate});
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let amount = getCurrentUIValues().amount;
  let years = getCurrentUIValues().years;
  let rate = getCurrentUIValues().rate;

  let updatedData = calculateMonthlyPayment({amount: amount, years: years, rate: rate});
  updateMonthly(updatedData);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let P = values.amount;
  let i = values.rate / 12;
  let n = values.years * 12;

  // monthly payment = (P * i) / (1 - (1 + i)^-n)
  let monthlyPayment = (P * i) / (1 - Math.pow(1 + i, -n));
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerHTML = "<h3>Monthly Payment</h3>";
  document.getElementById("monthly-payment").append(monthly);
}
