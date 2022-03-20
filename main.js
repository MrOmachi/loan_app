let accountBalance = 50000;
let customerPoints = 0;
let regBtn = document.getElementById('regBtn');
let lastCredited = document.getElementById('lastCredited');
let lastDeposit = document.getElementById('lastDeposit');
let lastLoanCollected = document.getElementById('lastLoanCollected');
let loanRepayment = document.getElementById('loanRepayment');
let accountType = document.getElementById('accountType');
let amountError = document.getElementById('amountError');

regBtn.addEventListener('click', function () {
  lastTimeCredited();
});

function lastTimeCredited() {
  if (lastCredited.value == 'withingSixMonth') {
    customerPoints = customerPoints + 10;
    console.log('you got 10 point');
  } else if (lastCredited.value == 'aboveSevenMonth') {
    customerPoints = customerPoints + 0;
    console.log('you got no point here');
  }
  lastTimedeposited();
}

function lastTimedeposited() {
  if (lastDeposit.value == 'sixMonthDeposit') {
    customerPoints = customerPoints + 5;
    console.log('you got 5 points');
  } else if (lastDeposit.value == 'sevenMonthDeposit') {
    customerPoints == customerPoints + 0;
    console.log('you got no point here');
  }
  lastLoanTaken();
}

function lastLoanTaken() {
  if (lastLoanCollected.value == 'sixMonthLoan') {
    customerPoints = customerPoints + 0;
    console.log('you got no point');
  } else if (lastLoanCollected.value == 'sevenMonthLoan') {
    customerPoints = customerPoints + 10;
    console.log('you got 10 points');
  }
  loanPay();
}

function loanPay() {
  if (loanRepayment.value == 'repaySixMonth') {
    customerPoints = customerPoints + 5;
    console.log('you got 5 points');
  } else if (loanRepayment.value == 'repayAboveMonth') {
    customerPoints = customerPoints + 0;
    console.log('you got no points');
  }
  customerAccountType();
}

function customerAccountType() {
  if (accountType.value == 'current') {
    customerPoints = customerPoints + 10;
    console.log('you got 10 points');
  } else if (accountType.value == 'savings') {
    customerPoints = customerPoints + 5;
    console.log('you got 5 points');
  }
  amountOfLoan();
}

function amountOfLoan() {
  if (loanAmount.value == '') {
    amountError.innerHTML = 'Loan amount is required!';
    customerPoints = customerPoints + 0;

    console.log('you got no points');
  } else if (loanAmount.value > accountBalance) {
    amountError.innerHTML = '';
    customerPoints = customerPoints - 10;
    console.log('you got -10 points');
  } else if (loanAmount.value <= accountBalance) {
    amountError.innerHTML = '';
    customerPoints = customerPoints + 10;
    console.log('you got 10 points');
  }
  requiementChech();
}

function requiementChech() {
  if (customerPoints >= 30) {
    alert(
      'Viola!!! you are eligible for this loan and your application is successful'
    );
  } else if (customerPoints < 30) {
    alert('Sorry, you do not meet up with the requirement to access this loan');
    console.log(
      'Sorry, you do not meet up with the requirement to access this loan'
    );
  }
  validatePoints();
}

function validatePoints() {
  console.log('Customer cummulative points is ' + customerPoints);
}
