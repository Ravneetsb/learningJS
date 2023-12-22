let button = document.querySelector("button");
let header = document.getElementById("switch");

if (!localStorage.getItem("name")) {
    setUsername();
} else {
    const storedName = localStorage.getItem("name");
    header.textContent = `Hi, ${storedName}`;
}

function setUsername() {
    const name = prompt("please enter your name:");
    if (!name) {
        setUsername();
    }
    localStorage.setItem("name", name);
    header.textContent = `Hi, ${name}`;
}

button.onclick = setUsername;