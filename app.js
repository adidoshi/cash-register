const billAmount = document.querySelector('#billAmount');
const nextBtn = document.querySelector('#nextBtn');
const cashGivenInput = document.querySelector('.cashGivenInput')
const cashGiven = document.querySelector('#cashGiven');
const checkBtn = document.querySelector('#checkBtn');
const changeCashReturn = document.querySelector('.changeCashReturn')
const incorrectAmount = document.querySelector('.incorrectAmountMsg');
const noOfNotes = document.querySelectorAll('.noOfNotes');

const arrNotes = [2000, 500, 100, 20, 10, 5, 1];

nextBtn.addEventListener('click', nextClickHandler);

checkBtn.addEventListener('click', checkClickHandler);

function nextClickHandler() {
    hideErr();
    if (+(billAmount.value) > 0) {
        nextBtn.style.display = 'none';
        cashGivenInput.style.display = 'block';
    } else {
        showErr('Enter a valid bill amount');
    }
};

function showErr(text) {
    incorrectAmount.style.display = 'block';
    incorrectAmount.innerText = text;
    changeCashReturn.style.display = 'none';
};

function hideErr() {
    incorrectAmount.style.display = 'none';
};

function checkClickHandler() {
    hideErr();
    let billAmountInp = +(billAmount.value);
    let cashGivenInp = +(cashGiven.value);

    if (billAmountInp > 0 && cashGivenInp > 0) {

        if (!Number.isInteger(cashGivenInp)) {
            showErr('Enter valid amount in cash given feild');
            return;
        }
        if (billAmountInp > cashGivenInp) {
            showErr('Cash is less than bill amount, please enter correct amount');
            return;
        }
        countNotes(billAmountInp, cashGivenInp)
    } else {
        showErr('Enter valid bill amount & cash given to proceed')
    }
};

function countNotes(billAmt, cashAmt) {
    let returnAmount = cashAmt - billAmt;

    if (returnAmount < 1) {
        showErr('No amount to be returned');
        return;
    }
    changeCashReturn.style.display = 'block';
    minNoOfNotes(returnAmount);
}

function minNoOfNotes(returnAmount){
    for (i=0; i<arrNotes.length; i++){
    let notes = Math.trunc(returnAmount / arrNotes[i]);
    returnAmount %= arrNotes[i];
    noOfNotes[i].innerText = notes;
     }                          
  }

