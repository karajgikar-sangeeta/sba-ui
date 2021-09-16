$(document).ready(function() {
    $("#successSpan").hide();
    $("#registerForm").show();

    // var loggedInUserStorageItem = localStorage.getItem("loggedInUser");
    // if (loggedInUserStorageItem === null) {
    //     return;
    // }
    // var loggedInUserElement = document.getElementById("loggedInUserName");
    // var loggedInUserFullName = loggedInUserStorageItem.split("::")[0];
    // var loggedInUserFullNameValue = loggedInUserFullName.split("=")[1];
    // loggedInUserElement.textContent = loggedInUserFullNameValue;
    

    $("#submitBtn").on('click', function(event) {
        event.preventDefault();

        var fullName = $("#fullNameInput").val();
        var emailAddress = $("#emailAddressInput").val();
        var passwordValue = $("#passwordInput").val();
        var genderValue = $("#gender").val();

        var error = document.getElementById("error")
        var passwordError = document.getElementById("passwordError")
        
        var regexValue = new RegExp($("#passwordInput").attr("pattern"));
        if (!regexValue.test(passwordValue)) {
            passwordError.textContent = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters";
            passwordError.style.color = "red";
            return;
        } else {
            passwordError.textContent = "";
        }

        var exists = localStorage.getItem(emailAddress);
        if (exists !== null) {
            error.textContent = "User with this email already exists"
            error.style.color = "red"
            return;
        } else {
            error.textContent = ""
        }

        localStorage.setItem(emailAddress, `fullname=${fullName}::email=${emailAddress}::password=${passwordValue}::gender=${genderValue}`);
        $("#registerForm").hide();
        $("#successSpan").show();
        var seconds = 3;
        setInterval(function() {
            --seconds;
            window.location = "login.html";
        });
    });
});

