
    // Simple Tax Calculator Script
    document.getElementById('taxCalculatorForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const income = parseFloat(document.getElementById('income').value) || 0;
        const deductions = parseFloat(document.getElementById('deductions').value) || 0;
        const credits = parseFloat(document.getElementById('credits').value) || 0;
        
        // Simple tax calculation (this is just an estimate)
        const taxableIncome = Math.max(0, income - deductions);
        let estimatedTax = 0;
        
        // Very simplified tax brackets (for demonstration only)
        if (taxableIncome <= 10000) {
            estimatedTax = taxableIncome * 0.10;
        } else if (taxableIncome <= 40000) {
            estimatedTax = 1000 + (taxableIncome - 10000) * 0.12;
        } else if (taxableIncome <= 85000) {
            estimatedTax = 4600 + (taxableIncome - 40000) * 0.22;
        } else if (taxableIncome <= 165000) {
            estimatedTax = 14500 + (taxableIncome - 85000) * 0.24;
        } else if (taxableIncome <= 210000) {
            estimatedTax = 33700 + (taxableIncome - 165000) * 0.32;
        } else if (taxableIncome <= 520000) {
            estimatedTax = 47700 + (taxableIncome - 210000) * 0.35;
        } else {
            estimatedTax = 157500 + (taxableIncome - 520000) * 0.37;
        }
        
        // Apply tax credits
        const finalTax = Math.max(0, estimatedTax - credits);
        const refund = Math.max(0, credits - estimatedTax);
        
        const resultElement = document.getElementById('taxCalculatorResult');
        resultElement.style.display = 'block';
        
        if (refund > 0) {
            resultElement.innerHTML = `<h4>Estimated Result</h4>
                                     <p>Based on the information provided:</p>
                                     <p>Taxable Income: $${taxableIncome.toFixed(2)}</p>
                                     <p>You may receive a <strong>refund of $${refund.toFixed(2)}</strong></p>
                                     <p><small>This is only an estimate. Contact us for a detailed assessment.</small></p>`;
        } else {
            resultElement.innerHTML = `<h4>Estimated Result</h4>
                                     <p>Based on the information provided:</p>
                                     <p>Taxable Income: $${taxableIncome.toFixed(2)}</p>
                                     <p>Estimated Tax Due: <strong>$${finalTax.toFixed(2)}</strong></p>
                                     <p><small>This is only an estimate. Contact us for a detailed assessment.</small></p>`;
        }
    });
    
    
 
