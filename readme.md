# User Management System

Maintains the user sessions.

Provides options to:
- Register
- Login

Also has an 'about' page to display the content of the website.

## register.html
- Uses a bitmap (jpg) file as a background for the register section
- Input fields are
    - Full name of the user <br />
      Accepts the first name and the last name of the user.
    - Email of the user <br />
      Accepts the email of the user. 
    - Password of the user <br />
      Applies a regex pattern to validate the password. <br />
      Regex used is (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,} - Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters
    - Gender of the user <br />
    - Provides an option to Login, if the user is already registered.
- After successful registration, adds the user to local storage, shows a success message, waits for 3 seconds, and redirects to Login page.

## login.html
- Uses a bitmap (jpg) file as a background for the login section
- Input fields are
    - Email of the user <br />
      Accepts the email of the user. 
    - Password of the user <br />
      Checks for the existence of the user and compares the password and validates it.
    - Provides an option to register if the user is already not registerd.
- After successful login, shows a success message, waits for 3 seconds and redirects to Home Page.

## index.html
- Provides options to login, register
- If the user is logged in, displays the Full Name of the user.
