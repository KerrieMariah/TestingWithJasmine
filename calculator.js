window.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("calc-form");
    if (form) {
      setupInitialValues();
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        update();
      });
    }
  });
  
  function getCurrentUIValues() {
    return {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
  }
  
  function setupInitialValues() {
    let values = { amount: 41445, years: 6, rate: 7.1 };
    document.getElementById("loan-amount").value = values.amount;
    document.getElementById("loan-years").value = values.years;
    document.getElementById("loan-rate").value = values.rate;
    update();
  }
  
  function update() {
    let currValues = getCurrentUIValues();
    let monthlyPayment = calculateMonthlyPayment(currValues);
    updateMonthly(monthlyPayment);
  }
  
  function calculateMonthlyPayment(values) {
    let P = values.amount;
    let i = values.rate / 12;
    let n = values.years * 12;
  
    let monthlyPayment = ((P * i) / (1 - Math.pow((1 + i), -n))).toFixed(2);
    return monthlyPayment;
  }
  
  function updateMonthly(monthly) {
    let monthlyPayment = document.getElementById("monthly-payment");
    monthlyPayment.innerText = monthly;
  }