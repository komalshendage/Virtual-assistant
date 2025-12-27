document.getElementById("reviewBtn").addEventListener("click", reviewCode);

function reviewCode() {
    const code = document.getElementById("codeInput").value;
    const output = document.getElementById("output");

    output.innerHTML = "";

    if (!code.trim()) {
        output.innerHTML = "<span class='error'>Please enter some code.</span>";
        return;
    }

    const lines = code.split("\n");
    let messages = [];

    // Rule 1: Line length
    lines.forEach((line, index) => {
        if (line.length > 80) {
            messages.push(`Line ${index + 1}: Line exceeds 80 characters.`);
        }
    });

    // Rule 2: Comments
    if (!code.includes("//") && !code.includes("#")) {
        messages.push("No comments detected. Add comments to explain your code.");
    }

    // Rule 3: Variable naming
    lines.forEach((line, index) => {
        if (line.includes("=")) {
            const name = line.split("=")[0].trim();
            if (name.length === 1) {
                messages.push(`Line ${index + 1}: Avoid single-letter variable names.`);
            }
        }
    });

    // Rule 4: Code length
    if (lines.length > 50) {
        messages.push("Code is long. Consider breaking it into smaller functions.");
    }

    // Display result
    if (messages.length === 0) {
        output.innerHTML = "<span class='success'>✔ Code looks clean and well-structured.</span>";
    } else {
        messages.forEach(msg => {
            output.innerHTML += `<div class='error'>✖ ${msg}</div>`;
        });
    }
}
