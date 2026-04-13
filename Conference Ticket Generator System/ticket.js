const name = localStorage.getItem("name");
const email = localStorage.getItem("email");
const github = localStorage.getItem("github");
const image = localStorage.getItem("image");

if (!name || !email || !image) {
    alert("Invalid access! Please generate a ticket first.");
    window.location.href = "index.html";
}

function generateTicketId() {
    const random = Math.random().toString(36).substring(2, 7).toUpperCase();
    return `CONF-2026-${random}`;
}

const ticketId = generateTicketId();

document.getElementById("userName").textContent = name;
document.getElementById("userEmail").textContent = email;
document.getElementById("userGithub").textContent = "@" + github;
document.getElementById("userImage").src = image;
document.getElementById("ticketId").textContent = ticketId;

function goBack() {
  window.location.href = "index.html";
}