// Ticket Form Input
const fileInput = document.getElementById('fileInput');
const nameInput = document.querySelector('input[placeholder="Enter your full name"]');
const emailInput = document.querySelector('input[type="email"]');
const githubInput = document.querySelector('input[placeholder="Enter your GitHub username"]');
const generateBtn = document.querySelector('.btn-primary');

let selectedAvatar = null;
let uploadedImage = null;

const avatars = document.querySelectorAll('.avatar');

avatars.forEach((avatar) => {
    avatar.addEventListener('click', () => {
        // Remove old selection
        avatars.forEach(a => a.classList.remove('selected'));

        // Add the latest avatar
        avatar.classList.add('selected');

        // Updating the latest avatar
        selectedAvatar = avatar.src;
        uploadedImage = null;

        console.log("Selected Avatar:", selectedAvatar);
    })
})

const previewImage = document.getElementById('previewImage');

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = () => {
        uploadedImage = reader.result;
        selectedAvatar = null;

        avatars.forEach(a => a.classList.remove('selected'));

        previewImage.src = reader.result;
        previewImage.style.display = 'block';

        console.log("Uploaded Image Stored");
    }

    reader.readAsDataURL(file);
})

const uploadBtn = document.getElementById("uploadBtn");
uploadBtn.addEventListener('click', () => {
    fileInput.click();
})

generateBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const github = githubInput.value.trim();

    if (!name || !email || !github) {
        alert("Name, Email and Github are required!");
        return;
    }

    if (!selectedAvatar && !uploadedImage) {
        alert("Please select or upload an image!");
        return;
    }

    let finalImage = uploadedImage ? uploadedImage : selectedAvatar;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("github", github);
    localStorage.setItem("image", finalImage);

    window.location.href = "ticket.html";
})