document.addEventListener("DOMContentLoaded", () => {
    const formElement = document.querySelector(".login-form");

    if (formElement) {
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const emailElement = formElement.elements.email;
            const passwordElement = formElement.elements.password;

            if (!emailElement || !passwordElement) {
                alert("Email or password field missing in the form");
                return;
            }

            const email = emailElement.value.trim();
            const password = passwordElement.value.trim();

            if (!email || !password) {
                alert("All form fields must be filled in");
                return;
            }

            const dataToSend = { email, password };

            console.log(dataToSend);

            formElement.reset();
        });
    }
    else {
        document.body.innerHTML += "<p style=\"color: red;\">Failed to find the form element</p>";
        console.warn("Failed to find the form elements");
    }
});
