
// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate resulrs
function calculateResults(e) {
    
    // console.log('Calculating');

    // UI Variables
    let amount = document.getElementById('amount');
    let interest = document.getElementById('interest');
    let years = document.getElementById('years');
    let monthlyPayment = document.getElementById('monthly-payment');
    let totalPayment = document.getElementById('total-payment');
    let totalInterest = document.getElementById('total-interest');

    let principal = parseFloat(amount.value);
    let calculatedInterest = parseFloat(interest.value) / 100 / 12;
    let calculatedPayments = parseFloat(years.value) * 12;
    

    // Monthly payments
    let x  = Math.pow(1 + calculatedInterest, calculatedPayments);
    // let monthly = ((principal * x * calculatedInterest) / (x - 1)).toFixed(2);
    let monthly = (principal * x * calculatedInterest) / (x - 1);

    

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2); 
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    } else {
        console.log('Please check your numbers');
    }
    e.preventDefault();

}
