$(document).ready(function() {
    var loggedInUserStorageItem = localStorage.getItem("loggedInUser");
    if (loggedInUserStorageItem === null) {
        return;
    }
    var loggedInUserElement = document.getElementById("loggedInUserName");
    var loggedInUserFullName = loggedInUserStorageItem.split("::")[0];
    var loggedInUserFullNameValue = loggedInUserFullName.split("=")[1];
    loggedInUserElement.textContent = loggedInUserFullNameValue;
});


