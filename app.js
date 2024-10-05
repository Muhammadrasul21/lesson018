const form = document.querySelector(".form");
const input = document.querySelector(".form input");
const msgContainer = document.querySelector(".msg__container");
const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector(".hamburger");
const openButton = document.querySelector(".navbar__logo .open"); // "Open" ikonkasi

const TEXT = [
    "salom",
    "qales 😁",
    "nma qivos",
    "hm",
    "yoq",
    "Darsdaman😅",
    "bilmadm",
    "Kino koryabman",
    "ha",
    "ok",
    "Yana yozaman xali o'ylab olechi",
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
    "Assalomu alaikum 🙂",
];

// Vaqtni formatlash
function formatTime(date) {
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Foydalanuvchi xabarini yuborish
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = input.value;
    if (value === "") {
        return; // Bo'sh xabar yubormaslik
    }

    const now = new Date();
    const formattedTime = formatTime(now);

    const userMsg = document.createElement("div");
    userMsg.classList.add("msg", "me");
    userMsg.innerHTML = `<p>${value}</p><span>${formattedTime}</span>`;
    msgContainer.appendChild(userMsg);
    input.value = ""; // Xabar yuborilgandan so'ng inputni tozalash

    botMsg(); // Botning javobini yuborish
});

// Botning xabarini yuborish
function botMsg() {
    setTimeout(() => {
        let index = Math.floor(Math.random() * TEXT.length);
        const now = new Date();
        const formattedTime = formatTime(now);
        const botMsg = document.createElement("div");
        botMsg.classList.add("msg", "bot");
        botMsg.innerHTML = `<p>${TEXT[index]}</p><span>${formattedTime}</span>`;
        msgContainer.appendChild(botMsg);
    }, 2500);
}

// Sidebar holatini saqlash uchun o'zgaruvchi
let sidebarOpen = false;

// Open tugmasini bosganda sidebarni ochish
openButton.addEventListener("click", () => {
    sidebar.style.transform = "translateX(0%)"; // Sidebarni ochish
    sidebarOpen = true; // Sidebar holatini yangilash
});

// Hamburger tugmasini bosganda sidebarni yopish
hamburger.addEventListener("click", () => {
    sidebar.style.transform = "translateX(-100%)"; // Sidebarni yopish
    sidebarOpen = false; // Sidebar holatini yangilash
});
