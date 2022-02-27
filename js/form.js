const fullName = document.querySelector("#name");
const subject = document.querySelector("#subject");
const eMail = document.querySelector("#email");
const address = document.querySelector("#address");
const form = document.querySelector("form");
const message = document.querySelector("#formMessage");

function formSetup(event) {
    event.preventDefault();

    if (lenghtForm(fullName.value, 1) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (lenghtForm(subject.value, 10) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (confirmEmail(eMail.value) === true) {
        eMailError.style.display = "none";
    } else {
        eMailError.style.display = "block";
    }

    if (lenghtForm(address.value, 25) === true) {
        adressError.style.display = "none";
    } else {
        adressError.style.display = "block";
    }

    if (lenghtForm(fullName.value, 1) && lenghtForm(subject.value, 10) && lenghtForm(address.value, 25) && confirmEmail(eMail.value)) {
        message.innerHTML = `<div class="message">You passed all the the requirements</div>`;
        form.reset();
    } else {
        message.innerHTML = "";
    }
};

form.addEventListener("submit", formSetup);

function lenghtForm(value, theLen) {
    if(value.trim().length >= theLen) {
        return true;
    } else {
        return false;
    }
};

function confirmEmail(email) {
    const regExEmail = /\S+@\S+\.\S+/;
    const confirmingMatches = regExEmail.test(email);
    return confirmingMatches;
}