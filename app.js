// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e) {
    // Hide results
    document.getElementById('results').style.display = 'none';
    // Show loader
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

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
    let x = Math.pow(1 + calculatedInterest, calculatedPayments);
    // let monthly = ((principal * x * calculatedInterest) / (x - 1)).toFixed(2);
    let monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        // Show Results
        document.getElementById('results').style.display = 'block';
        // Hide loader
        document.getElementById('loading').style.display = 'none';
    } else {
        showError('Please check your numbers');
    }

    // e.preventDefault();

}

function showError(error) {
    // create Element
    let errorDiv = document.createElement('div');
    // Hide Results
    document.getElementById('results').style.display = 'none';
    // Hide loader
    document.getElementById('loading').style.display = 'none';

    // add class
    errorDiv.className = 'alert alert-danger';

    // create Text and appent to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert into DOM
    let card = document.querySelector('.card');
    let heading = document.querySelector('.heading');

    // Inser error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error msg
    setTimeout(clearError, 3000);
}

function clearError(params) {
    document.querySelector('.alert').remove();

}