document.addEventListener('DOMContentLoaded', function() {
   
    const taxCalculatorForm = document.getElementById('taxCalculatorForm');
    const taxCalculatorResult = document.getElementById('taxCalculatorResult');

    taxCalculatorForm.addEventListener('submit', function(event) {
    
        event.preventDefault();
        
        const income = parseFloat(document.getElementById('income').value) || 0;
        const deductions = parseFloat(document.getElementById('deductions').value) || 0;
        const credits = parseFloat(document.getElementById('credits').value) || 0;
        
        const taxableIncome = income - deductions;
        
        let estimatedTax = 0;
        
        if (taxableIncome <= 11000) {
            estimatedTax = taxableIncome * 0.10;
        } else if (taxableIncome <= 44725) {
            estimatedTax = 1100 + (taxableIncome - 11000) * 0.12;
        } else if (taxableIncome <= 95375) {
            estimatedTax = 5147 + (taxableIncome - 44725) * 0.22;
        } else if (taxableIncome <= 182100) {
            estimatedTax = 16290 + (taxableIncome - 95375) * 0.24;
        } else if (taxableIncome <= 231250) {
            estimatedTax = 37104 + (taxableIncome - 182100) * 0.32;
        } else if (taxableIncome <= 578125) {
            estimatedTax = 52832 + (taxableIncome - 231250) * 0.35;
        } else {
            estimatedTax = 174238 + (taxableIncome - 578125) * 0.37;
        }
        
        estimatedTax = Math.max(0, estimatedTax - credits);
        
        const approximateWithholding = income * 0.18; 
        
        const refundOrOwed = approximateWithholding - estimatedTax;
        
        let resultHTML = '<h4>Tax Estimate Results</h4>';
        resultHTML += '<p>Taxable Income: $' + taxableIncome.toLocaleString('en-US', {maximumFractionDigits: 2}) + '</p>';
        resultHTML += '<p>Estimated Tax: $' + estimatedTax.toLocaleString('en-US', {maximumFractionDigits: 2}) + '</p>';
        
        if (refundOrOwed >= 0) {
            resultHTML += '<p><strong>Estimated Refund: <span style="color: #4CAF50;">$' + 
                refundOrOwed.toLocaleString('en-US', {maximumFractionDigits: 2}) + '</span></strong></p>';
        } else {
            resultHTML += '<p><strong>Estimated Amount Owed: <span style="color: #f44336;">$' + 
                Math.abs(refundOrOwed).toLocaleString('en-US', {maximumFractionDigits: 2}) + '</span></strong></p>';
        }
        
        resultHTML += '<p class="mt-3 small">Note: This is a simplified estimate. For accurate tax calculations, please schedule a consultation.</p>';

        taxCalculatorResult.innerHTML = resultHTML;
        taxCalculatorResult.style.display = 'block';
    });
});
        
       