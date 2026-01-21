        alert("Welcome to my calculator.");
        alert("Made by Mudasser kleem.");
        
        const output = document.querySelector("#result output");
        const buttons = document.querySelectorAll("button");
        
        let expression = "";
        let lastAnswer = 0;
        
        // factorial helper
        function factorial(n) {
            if (n < 0) return NaN;
            if (n === 0) return 1;
            let res = 1;
            for (let i = 1; i <= n; i++) res *= i;
            return res;
        }
        
        // nCr helper
        function nCr(n, r) {
            return factorial(n) / (factorial(r) * factorial(n - r));
        }
        
        buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                const val = btn.innerText;
                
                // Clear
                if (val === "AC") {
                    expression = "";
                    output.textContent = "";
                    return;
                }
                
                // Clear
                if (val === "ON") {
                    expression = "";
                    output.textContent = "";
                    return;
                }
                // Delete
                if (val === "DEL") {
                    expression = expression.slice(0, -1);
                    output.textContent = expression;
                    return;
                }
                
                // Answer
                if (val === "Ans") {
                    expression += lastAnswer;
                    output.textContent = expression;
                    return;
                }
                
                // Ignore unused buttons
                if (["SHIFT", "ALPHA", "MODE", "RCL", "ENG", "M+", "Replay"].includes(val)) {
                    return;
                }
                
                // Scientific functions
                if (val === "sin") expression += "Math.sin(";
                else if (val === "cos") expression += "Math.cos(";
                else if (val === "tan") expression += "Math.tan(";
                else if (val === "hyp") expression += "Math.hypot(";
                else if (val === "log") expression += "Math.log10(";
                else if (val === "In") expression += "Math.log(";
                else if (val === "√") expression += "Math.sqrt(";
                else if (val === "x²") expression += "**2";
                else if (val === "x³") expression += "**3";
                else if (val === "x–¹") expression += "**-1";
                else if (val === "^") expression += "**";
                else if (val === "(-)") expression += "-";
                else if (val === "×") expression += "*";
                else if (val === "÷") expression += "/";
                else if (val === "EXP") expression += "e";
                else if (val === ",") expression += ",";
                else if (val === "nCr") expression += "nCr(";
                
                // Equal
                else if (val === "=") {
                    try {
                        
                        const result = eval(expression);
                        output.textContent = result;
                        lastAnswer = result;
                        expression = result.toString();
                    } catch {
                        output.textContent = "Error";
                        expression = "";
                    }
                    return;
                }
                
                // Default (numbers & symbols)
                else {
                    expression += val;
                }
                
                output.textContent = expression;
            });
        });