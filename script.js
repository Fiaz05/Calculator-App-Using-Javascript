document.addEventListener("DOMContentLoaded", function () {
    const inputResult = document.getElementById("result");
    const numberButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operator");
    const calculate = document.getElementById("calculate");
    const clearInput = document.getElementById("clear");

    let currentInput = "";

    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentInput += button.textContent;
            inputResult.value = currentInput;
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentInput += `${button.textContent}`;
            inputResult.value = currentInput;
        });
    });

    calculate.addEventListener("click", () => {
        try {
            currentInput = eval(currentInput).toString();
            inputResult.value = currentInput;

        } catch (error) {
            inputResult.value = "Error";
        }
    });

    clearInput.addEventListener("click", () => {
        currentInput = "";
        inputResult.value = "";
    });

    // Event listener for keyboard input
    document.addEventListener("keydown", event => {
        const keyPressed = event.key;

        if (/^[0-9]$/.test(keyPressed)) {
            currentInput += keyPressed;
            inputResult.value = currentInput;
        }
        else if (/^[\+\-\*\/]$/.test(keyPressed)) {
            currentInput += keyPressed;
            inputResult.value = currentInput;
        }
        else if (keyPressed === "Enter") {
            try {
                currentInput = eval(currentInput).toString();
                inputResult.value = currentInput;

            } catch (error) {
                inputResult.value = "Error";
            }
        }
        else if (keyPressed === 'Escape') {
            currentInput = "";
            inputResult.value = "";
        }
    });

});
