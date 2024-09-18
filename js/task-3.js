document.getElementById('name-input').addEventListener('input', updateGreeting);

function updateGreeting() {
    let nameInput = document.getElementById('name-input').value.trim();
    if (nameInput === "") {
        nameInput = "Anonymous";
    }
    document.getElementById('name-output').textContent = nameInput;
}