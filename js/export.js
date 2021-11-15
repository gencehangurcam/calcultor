export const actions = {
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