class BaseConverter {
            constructor() {
                // Get references to all necessary HTML elements
                this.inputNumberEl = document.getElementById('inputNumber');
                this.fromBaseEl = document.getElementById('fromBase');
                this.toBaseEl = document.getElementById('toBase');
                this.convertBtn = document.getElementById('convertBtn');
                this.resultContainer = document.getElementById('resultContainer');
                this.resultTextEl = document.getElementById('resultText');
                this.errorMessageEl = document.getElementById('errorMessage');

                // Bind the 'convert' method to the class instance to maintain 'this' context
                this.convert = this.convert.bind(this);
                
                // Initialize event listeners
                this.init();
            }

            init() {
                this.convertBtn.addEventListener('click', this.convert);
            }

            clearMessages() {
                this.resultContainer.classList.add('hidden');
                this.resultTextEl.textContent = '';
                this.errorMessageEl.textContent = '';
            }

            displayResult(result) {
                this.resultTextEl.textContent = result.toUpperCase();
                this.resultContainer.classList.remove('hidden');
            }

            displayError(message) {
                this.errorMessageEl.textContent = message;
                this.resultContainer.classList.remove('hidden');
            }

            convert() {
                this.clearMessages();

                const inputNumber = this.inputNumberEl.value;
                const fromBase = parseInt(this.fromBaseEl.value, 10);
                const toBase = parseInt(this.toBaseEl.value, 10);

                // Input validation
                if (!inputNumber) {
                    this.displayError('Please enter a number to convert.');
                    return;
                }
                
                if (isNaN(fromBase) || fromBase < 2 || fromBase > 36) {
                    this.displayError('Please enter a valid "From Base" between 2 and 36.');
                    return;
                }
                
                if (isNaN(toBase) || toBase < 2 || toBase > 36) {
                    this.displayError('Please enter a valid "To Base" between 2 and 36.');
                    return;
                }

                // Perform conversion
                try {
                    const decimalNumber = parseInt(inputNumber, fromBase);

                    // const errorCheck = 0;
                    // for (let i = 0; i < fromBase; i++) {
                    //     if (!("" + inputNumber).includes(i)) {
                    //         errorCheck++;
                    //     }
                    // }

                    // if (errorCheck > 0) {
                    //     this.displayError('Invalid number for the specified "From Base".');
                    //     return;
                    // }


                    if (isNaN(decimalNumber)) {
                        this.displayError('Invalid number for the specified "From Base".');
                        return;
                    }

                    const convertedNumber = decimalNumber.toString(toBase);
                    this.displayResult(convertedNumber);

                } catch (e) {
                    this.displayError('An unexpected error occurred. Please check your inputs.');
                }
            }
        }

        // Create a new instance of the converter when the window loads
        window.onload = function() {
            new BaseConverter();
        };