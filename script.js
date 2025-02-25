document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".inp1").addEventListener("input", calculate);
    document.querySelector(".inp2").addEventListener("input", calculate);
    document.querySelector(".op").addEventListener("change", calculate);
    document.querySelector(".inp").addEventListener("input", calculate2);
});

let calculate = () => {
    let text1 = document.querySelector(".inp1").value;
    let text2 = document.querySelector(".inp2").value;
    let op = document.querySelector(".op").selectedOptions[0].innerHTML;
    let data = document.querySelector(".output");

    text1 = parseFloat(text1);
    text2 = parseFloat(text2);

    if (!isNaN(text1) && !isNaN(text2)) {
        let result;
        if (op === '+') {
            result = text1 + text2;
        } else if (op === '-') {
            result = text1 - text2;
        } else if (op === '*') {
            result = text1 * text2;
        } else if (op === '/') {
            result = text2 !== 0 ? text1 / text2 : "Cannot divide by zero";
        }
        data.innerText = 'Output : ' + result;
    } else {
        data.innerText = 'Output : ';
    }
};

let calculate2 = () => {
    let text = document.querySelector(".inp").value;
    let data1 = document.querySelector(".output2");

    try {
        let result = eval(text);
        data1.innerText = 'Output : ' + result;
    } catch (error) {
        data1.innerText = 'Output : Invalid Expression';
    }
};