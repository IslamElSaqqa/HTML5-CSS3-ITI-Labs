const tableBody = document.getElementById('userTableBody');
let users = JSON.parse(localStorage.getItem('users')) || [];

function renderTable() {
    tableBody.innerHTML = "";

    users.forEach((user, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.address}</td>
            <td>
                <button onclick="deleteUser(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

function deleteUser(index) {
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    renderTable();
}

renderTable();
