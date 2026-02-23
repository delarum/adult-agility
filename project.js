document.addEventListener("DOMContentLoaded", function () {

    const quote = "~ TAKE CARE OF YOUR BODY, IT'S YOUR HOME ~";
    const container = document.getElementById("quoteContainer");

    for (let i = 0; i < 5; i++) {
        const p = document.createElement("p");
        p.textContent = quote;
        container.appendChild(p);
    }

});