 const form = document.getElementById("signupForm");
 form,addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Form Submitted!")
 })
    const message = document.getElementById("message");
    const nextBtn = document.getElementById("nextBtn");

    // 🔹 Load saved user info if exists
    window.onload = function() {
      const savedUser = localStorage.getItem("adultAgilityUser");
      if (savedUser) {
        const user = JSON.parse(savedUser);
        checkAge(user.name, user.age);
      }
    };

    // 🔹 Form submit event
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // stop reload

      const name = document.getElementById("name").value.trim();
      const age = parseInt(document.getElementById("age").value);

      // Save in localStorage
      const user = { name, age };
      localStorage.setItem("adultAgilityUser", JSON.stringify(user));

      // Check age and show message
      checkAge(name, age);

      form.reset();
    });

    // 🔹 Age check function
    function checkAge(name, age) {
      if (age >= 18) {
        message.innerHTML = `Hi ${name}, welcome to Adult Agility — let's get grinding 💪🔥`;
        message.style.color = "#FFB300";
        nextBtn.style.display = "inline-block";
      } else if (age < 18) {
        message.innerHTML = "Sorry, you are not of legal age to consume our content.";
        message.style.color = "red";
        nextBtn.style.display = "none";
      } else {
        message.innerHTML = "Please enter a valid age.";
        message.style.color = "white";
        nextBtn.style.display = "none";
      }
    }