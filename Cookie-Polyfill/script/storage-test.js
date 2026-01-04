function save() {
    const value = document.getElementById("data").value;
    localStorage.setItem("myData", value);
}

function load() {
    document.getElementById("result").innerText =
        localStorage.getItem("myData");
}

function remove() {
    localStorage.removeItem("myData");
}
