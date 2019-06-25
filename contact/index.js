const firstname = prompt(Hi there! What's first your name?);
const lastname = prompt(Hi there! What's your last name?);
const output = document.querySelector(#greeting);

if (firstname && lastname) {
    output.innerHTML = "<p>Thanks for visiting, " + firstname + " + lastname + " .</p>";  
} else {
    output.innerHTML = "<p>Please tell us your firsst and last names!</p> " + firstname + " + lastname + " .</p>";
}

