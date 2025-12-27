function reviewCode() {
    const code = document.getElementById("codeInput").value;
    const output = document.getElementById("output");
    output.innerHTML = "";

    if (code.trim() === "") {
        output.innerHTML = "⚠️ Please enter some code.";
        return;
    }

    const lines = code.split("\n");
    let feedback = [];

    // Rule 1: Long lines
    lines.forEach((line, index) => {
        if (line.length > 80) {
            feedback.push(`Line ${index + 1}: Line is too long.`);
        }
    });

    // Rule 2: No comments
    if (!code.includes("//") && !code.includes("#")) {
        feedback.push("No comments found. Consider adding comments.");
    }

    // Rule 3: Short variable names
    lines.forEach((line, index) => {
        if (line.includes("=")) {
            let variable = line.split("=")[0].trim();
            if (variable.length === 1) {
                feedback.push(`Line ${index + 1}: Variable name is too short.`);
            }
        }
    });

    // Rule 4: Too many lines
    if (lines.length > 50) {
        feedback.push("Code is too long. Consider splitting into functions.");
    }

    // Display result
    if (feedback.length === 0) {
        output.innerHTML = "✅ Code looks clean and well written!";
    } else {
        feedback.forEach(item => {
            output.innerHTML += "❌ " + item + "<br>";
        });
    }
}
