
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
    
    
    
    e.preventDefault();
}
