function validation(evt) {
    let form = document.getElementById("form");
    let email = document.getElementById("email").value;
    let text = document.getElementById("result");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your email is valid.";
        text.style.color = "#00ff00";
    }
  /*  else if (email.value == "" || email.value == null) {

        ext.innerText = "Whoops! It looks like you forgot to add your email";
        text.style.color = "#ff0000";
    }
    */
    else {

        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please provide a valid email address";
        text.style.color = "#ff0000";
    }




    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}
