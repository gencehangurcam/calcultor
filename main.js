const buttonList = document.querySelectorAll('[data-button]');
const screen = document.querySelector('[data-screen]');
let calculString = "";

const actions = {
    add : function (a, b) {
        return Number(a) + Number(b);
    },
    subtract : (a, b) => {
        return a - b;
    },
    multiply : (a, b) => {
        return a * b;
    },
    divide : (a, b) => {
        return a / b;
    }
}

function getAction (calcString) {
    const add = calcString.split("+");
    const subtract = calcString.split("-");
    const multiply = calcString.split("*");
    const divide = calcString.split("/");

    if (add.length >= 2) {
        return {
            action: "add",
            a: add[0],
            b: add[1]
        };
    }else if (subtract.length >= 2) {
        return {
            action: "subtract",
            a: subtract[0],
            b: subtract[1]
        };
    }else if (multiply.length >= 2) {
        return {
            action: "multiply",
            a: multiply[0],
            b: multiply[1]
        };
    }else if (divide.length >= 2) {
        return {
            action: "divide",
            a: divide[0],
            b: divide[1]
        };
    }

    return null;
}

function calculate (calculString) {
    if (calculString != "" || calculString != "0") {
        const action = getAction(calculString);
        let response = null;
        if (action != null) {
            response = actions[action.action](action.a, action.b);
        }
        return response;
    }
    return null;
}

addEventListener('click', (e) => {
    const btn = e.target;
    const data_btn = btn.dataset.button;

    if (data_btn) {
        if (data_btn === "c") {
            calculString = "0";
        } else if (data_btn === "=") {
            calculString = calculate(calculString);
        } else {
            if (calculString === "0") {
                calculString = "";
            }
            calculString += data_btn;
        }
        screen.innerHTML = calculString;
    }
});

addEventListener('keydown', (e) => {
    const key = e.key;
    if ((Number(key) >= 0 && Number(key) <= 9) || key === "-" || key === "+" || key === "/" || key === "*") {
        calculString += key;
    } else if(key === "Enter") {
        calculString = calculate(calculString);
    }
    screen.innerHTML = calculString;
});

