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

    if (isNaN(income) || isNaN(totalEx)) {
        document.getElementById('valid-number').style.display = 'block';
        setInnerText('total-ex', 0);
        setInnerText('balance', 0)
    }
    else if (income < 0 || food < 0 || cloths < 0 || rent < 0) {
        document.getElementById('valid-number').style.display = 'block';
        setInnerText('total-ex', 0);
        setInnerText('balance', 0)
    }

    else {

        if (income < totalEx) {
            document.getElementById('small-number').style.display = 'block';
            document.getElementById('valid-number').style.display = 'none';
            setInnerText('total-ex', 0);
            setInnerText('balance', 0)
        }

        else {
            document.getElementById('small-number').style.display = 'none';
            document.getElementById('valid-number').style.display = 'none';

            // set inner text
            setInnerText('total-ex', totalEx);
            setInnerText('balance', balance)
        }
    }
}


// save calculate by eventlisner

document.getElementById('save-btn').addEventListener('click', function () {

    let saveInput = getItem('save-input');
    let income = getItem('income');
    let save = income * saveInput / 100;
    let balance = parseInt(document.getElementById('balance').innerText);
    let remain = sum(balance, save);


    if (isNaN(income) || isNaN(saveInput)) {

        document.getElementById('valid-percent').style.display = 'block';
        document.getElementById('small-percent').style.display = 'none';
        setInnerText('saving', 0);
        setInnerText('remaining', 0);
        return;

    }

    else if (income < 0 || save < 0) {

        document.getElementById('valid-percent').style.display = 'block';
        document.getElementById('small-percent').style.display = 'none';
        setInnerText('saving', 0);
        setInnerText('remaining', 0);

        return

    }

    else if (remain < 0) {
        document.getElementById('valid-percent').style.display = 'none';

        document.getElementById('small-percent').style.display = 'block';
        setInnerText('saving', 0);
        setInnerText('remaining', 0);
        return;


    }



    else {

        document.getElementById('valid-percent').style.display = 'none';
        document.getElementById('small-percent').style.display = 'none';

        //set inner text
        setInnerText('saving', save);
        setInnerText('remaining', remain);

    }

})