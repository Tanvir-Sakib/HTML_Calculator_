var display = document.querySelector(".display");
var buttons = document.querySelectorAll("button");
var specialChars = ["*", "/", "-", "+", "="];
let output = "";

var calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=" && output !== "") {
        output = eval(output.replace("%", "/100"));
    }
    else if (btnValue === "AC") {
        output = "";
    }
    else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

buttons.forEach((button) => {

    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});