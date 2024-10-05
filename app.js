const form = document.querySelector(".form");
const input = document.querySelector(".form input");
const msgContainer = document.querySelector(".msg__container");

const TEXT = [
    "salom",
    "qales",
    "nma qivos",
    "hm",
    "yoq",
    "bilmadm",
    "ha",
    "ok",
    "chunarli",
    "qattas",
    "km bilan siz",
    "ozizchi",
    "❤️❤️❤️",
    "😊😊😊",
    "yaxshi",
    "yaxshimisiz",
    "korisheli",
    "hop",
    "otiribman",
    "Assalomu alaikum",
];

function formatTime(date) {
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = input.value;
    if (value === "") {
        return null;
    }

    const now = new Date();
    const formattedTime = formatTime(now);

    const userMsg = document.createElement("div");
    userMsg.classList.add("msg", "me");
    userMsg.innerHTML = `<p>${value}</p>
        <span>${formattedTime}</span>`

    msgContainer.appendChild(userMsg);
    input.value = "";

    botMsg();
});

function botMsg() {
    setTimeout(() => {
        let index = Math.floor(Math.random() * TEXT.length);
        const now = new Date()
        const formattedTime = formatTime(now)
        const botMsg = document.createElement("div");
        botMsg.classList.add("msg", "bot");
        botMsg.innerHTML = `<p>${TEXT[index]}</p>
        <span>${formattedTime}</span>`
        msgContainer.appendChild(botMsg);
    }, 2500);
}
