// sum calculte
function sum(num1, num2) {
    let remain = num1 - num2;
    return remain;
}

//getitem 
function getItem(item) {
    let itemValue = parseInt(document.getElementById(item).value);
    return itemValue;
}

// set innetTex
function setInnerText(item, value) {

    let itemText = document.getElementById(item);
    itemText.innerText = value;
}

// calculate function
function calculate() {

    let income = getItem('income');
    let food = getItem('food');
    let rent = getItem('rent');
    let cloths = getItem('cloths');
    let totalEx = food + rent + cloths;
    let balance = sum(income, totalEx);

    // set inner text
    setInnerText('total-ex', totalEx);
    setInnerText('balance', balance)

}


// save calculate by eventlisner

document.getElementById('save-btn').addEventListener('click', function () {

    let saveInput = getItem('save-input') / 100;
    let income = getItem('income');
    let save = income * saveInput;
    let balance = parseInt(document.getElementById('balance').innerText);
    let remain = sum(balance, save);

    //set inner text
    setInnerText('saving', save);
    setInnerText('remaining', remain);
})