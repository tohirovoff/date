const messages = [
    "Aniqmi?",
    "Annnnnniqmi??",
    "Iltimooooos 😭",
    "Birga ramen yesekchi 😂?",
    "Fast food yemimanu, lekin birga yeyishim mumkin agar... 🥹",
    "Iltimoosss",
    "Men o'lib qolaman",
    "Ha men o'ldim",
    "ok siz Shoxruxni arvohi bilan gaplashyapsiz",
    "Iltimosssss"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}