class Calculator {
    constructor(previousOperation, currentOperation) {
        this.previousOperation = previousOperation;
        this.currentOperation = currentOperation;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    addNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) {
            return;
        }
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.calculate()
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    updateOutput() {
        this.currentOperation.innerText = this.currentOperand;
        this.previousOperation.innerText = this.previousOperand;
    }

    calculate(){
        let result;

        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if(isNaN(prev) || isNaN(current)) return;


        switch(this.operation){
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;      
            default:
                return         
        }

        this.currentOperand = result;
        this.operation = undefined
        this.previousOperand = '';
    }
}


const operationButtons = document.querySelectorAll('[data-operation]')
const numberButtons = document.querySelectorAll('[data-number]')
const equalsButton = document.querySelector('[data-equals]')

const previousOperation = document.querySelector('[data-previous]')
const currentOperation = document.querySelector('[data-current]')

const calculator = new Calculator(previousOperation, currentOperation);

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateOutput();

    })
})

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNumber(button.innerText);
        calculator.updateOutput();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.calculate()
    calculator.updateOutput() 
  })