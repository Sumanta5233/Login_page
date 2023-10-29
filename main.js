function validate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username.trim() && password.trim()) {
        if (username.trim() === 'admin' && password.trim() === 'password') {
            alert('Successful login');
        } else {
            alert('Invalid password try again!');
        }
    } else {
        alert('Fill the form first');
    }
}