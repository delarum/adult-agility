const form = document.getElementById("signupForm");
const savedDataDiv = document.getElementById("savedData");

window.onload=function(){
    const savedUser = this.localStorage.getItem("adultAfilityUser");

    if (savedUser) {
const user = JSON.parse(savedUser);
savedDataDuv.innerHTML = "Welcome Back, <strong>" + username + "</strong> ("+user.age+"yrs)";
    }
}

form.addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;

    const age = document.getElementById("age").value;

    const user = {
        name: name,
        age: age
    };

    localStorage.setItem("adultAgilityUser",
        JSON.stringify(user)
    );

    savedDataDiv.innerHTML = "Saved! Welcome, <strong>" + name + "</strong>(" + age + "yrs";

    form.reset();
});