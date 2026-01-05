document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const address = document.getElementById('address').value;

        const userInfo = {
            username,
            address
        };

        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(userInfo);

        localStorage.setItem('users', JSON.stringify(users));

        // redirect to users table page
        window.location.href = "user-details.html";
    });
});
