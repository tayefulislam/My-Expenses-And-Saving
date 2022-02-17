//Common funtions

// sum calculte
function sum(num1, num2) {
    let remain = num1 - num2;
    return remain;
}

//getitem: input value
function getItem(item) {
    let itemValue = document.getElementById(item).value;
    return Number(itemValue);
}

// set innetTex
function setInnerText(item, value) {
    let itemText = document.getElementById(item);
    itemText.innerText = parseFloat(value).toFixed(2);
}

// check error funtion
function errorCheck(eName, valuee) {
    document.getElementById(eName).style.display = valuee;

}

// calculate function
function calculate() {

    let income = getItem('income');
    let food = getItem('food');
    let rent = getItem('rent');
    let cloths = getItem('cloths');

    let totalEx = food + rent + cloths;
    let balance = sum(income, totalEx);

    // check error
    if (isNaN(income) || isNaN(totalEx) || income < 0 || food < 0 || cloths < 0 || rent < 0) {

        // error hide and show
        errorCheck('valid-number', 'block')
        errorCheck('small-number', 'none')
        // set inner text
        setInnerText('total-ex', 0);
        setInnerText('balance', 0)
        return;
    }

    else {

        if (income < totalEx) {
            // error hide and show
            errorCheck('small-number', 'block')
            errorCheck('valid-number', 'none')
            // set inner text
            setInnerText('total-ex', 0);
            setInnerText('balance', 0)
            return;
        }

        else {
            // error hide and show
            errorCheck('small-number', 'none')
            errorCheck('valid-number', 'none')

            // set inner text
            setInnerText('total-ex', totalEx);
            setInnerText('balance', balance)
        }

    }
}


// saving calculate by eventlisner

document.getElementById('save-btn').addEventListener('click', function () {

    let saveInput = getItem('save-input');
    let income = getItem('income');
    let save = income * saveInput / 100;
    let balance = parseInt(document.getElementById('balance').innerText);
    let remain = sum(balance, save);

    // error check
    if (isNaN(income) || isNaN(saveInput) || income < 0 || save < 0) {
        // error hide and show
        errorCheck('valid-percent', 'block')
        errorCheck('small-percent', 'none')

        // setInnerText
        setInnerText('saving', 0);
        setInnerText('remaining', 0);
        return;
    }


    else if (balance < save) {
        // error hide and show
        errorCheck('valid-percent', 'none')
        errorCheck('small-percent', 'block')
        // setInnerText
        setInnerText('saving', 0);
        setInnerText('remaining', 0);
        return;

    }

    else {
        // error hide and show
        errorCheck('valid-percent', 'none')
        errorCheck('small-percent', 'none')
        // setInnerText
        setInnerText('saving', save);
        setInnerText('remaining', remain);

    }

})