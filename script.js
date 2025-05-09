document.addEventListener('DOMContentLoaded', function() {

    const taxCalculatorForm = document.getElementById('taxCalculatorForm');
    const taxCalculatorResult = document.getElementById('taxCalculatorResult');
    
    taxCalculatorForm.addEventListener('submit', function(event) {
        event.preventDefault();
      
        const income = parseFloat(document.getElementById('income').value) || 0;
        const deductions = parseFloat(document.getElementById(''))