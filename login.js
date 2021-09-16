$(document).ready(function() {
    // var loggedInUserStorageItem = localStorage.getItem("loggedInUser");
    // if (loggedInUserStorageItem === null) {
    //     return;
    // }
    // var loggedInUserElement = document.getElementById("loggedInUserName");
    // var loggedInUserFullName = loggedInUserStorageItem.split("::")[0];
    // var loggedInUserFullNameValue = loggedInUserFullName.split("=")[1];
    // loggedInUserElement.textContent = loggedInUserFullNameValue;
    
    $("#successSpan").hide();
    $("#loginForm").show();
    
    $("#submitBtn").on('click', function(event) {
        event.preventDefault();
        var loginEmail = $("#emailAddressInput").val();
        var password = $("#passwordInput").val();
        
        var emailError = document.getElementById("emailError")
        var passwordError = document.getElementById("passwordError");
        emailError.textContent = "";
        passwordError.textContent = "";

        var exists = localStorage.getItem(loginEmail);
        if (exists === null) {            
            emailError.textContent = "Invalid user";
            emailError.style.color = "red";
            return;
        } else {
            var storageItems = exists.split("::");
            var passwordItem = storageItems[2];
            var passwordValue = passwordItem.split("=")[1];
            
            if (passwordValue !== password) {
                passwordError.textContent = "Invalid password, please try again";
                passwordError.style.color = "red";                
                return;
            }
        }

        localStorage.setItem("loggedInUser", exists);

        $("#loginForm").hide();
        $("#successSpan").show();
        var seconds = 3;
        setInterval(function() {
            --seconds;
            window.location = "index.html";
        });
    });
});