// window.onstorage = () => {
//     alert("OnStorage changed event");
//     var loggedInUser = localStorage.getItem("loggedInUser");
//     if (loggedInUser === null) {
//         return;
//     }

//     console.log(loggedInUser);

//     var loggedInUserElement = document.getElementById("loggedInUserName");
//     var loggedInUserFullName = loggedInUser.split("::")[0];
//     var loggedInUserFullNameValue = loggedInUserFullName.split("=")[1];
//     loggedInUserElement.textContent = "Testing";
// }

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x,x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return e instanceof DOMException && (// everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

$(document).ready(function() {
    
    if (storageAvailable('localStorage')) {
        console.log("we can use local storage");
    } else {
        console.log("Too bad!! cannot use local storage");
    }
    
    var loggedInUserStorageItem = localStorage.getItem("loggedInUser");
    if (loggedInUserStorageItem === null) {
        return;
    }
    var loggedInUserElement = document.getElementById("loggedInUserName");
    var loggedInUserFullName = loggedInUserStorageItem.split("::")[0];
    var loggedInUserFullNameValue = loggedInUserFullName.split("=")[1];
    loggedInUserElement.textContent = loggedInUserFullNameValue;
});
