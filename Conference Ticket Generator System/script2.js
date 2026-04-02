const fileInput = document.getElementById('fileInput');
const nameInput = document.querySelector('input[placeholder="Enter your full name"]');
const emailInput = document.querySelector('input[type="email"]');
const githubInput = document.querySelector('input[placeholder="Enter your GitHub username"]');
const generateBtn = document.querySelector('.btn');

generateBtn.addEventListener('click', function() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const github = githubInput.value.trim();
    const file = fileInput.files[0];

    if(!file || !name || !email || !github) {
        alert("All fields are required!");
        return;
    }

    if(!email.includes('@')) {
        alert("Enter a valid email");
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
        const imageBase64 = e.target.result;
        const userData = {
            name,
            email,
            github,
            image: imageBase64
        };

        localStorage.setItem("ticketData", JSON.stringify(userData));

        window.location.href = "ticket.html";
    };

    reader.readAsDataURL(file);
});