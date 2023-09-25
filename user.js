
class user {
    //Variables
    String role;
    String firstName;
    String lastName;
    String address;
    const dob = new date;
    String username;
    String password;
    String email;

    //Constructor Method
    user(String firstName, String lastName, String address, date dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.dob = dob;
    }

    //Set role
    setRole(String role) {
        this.role = role;
    }

    //Login Info
    setLoginInformation(String username, String password) {
        this.username = username;
        this.password = password;
    }

    //Forgot password
    resetPassword(String email, String username) {
        this.email = email;

    }
}