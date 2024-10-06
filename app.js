const form = document.querySelector(".form");
const input = document.querySelector(".form input");
const msgContainer = document.querySelector(".msg__container");
const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector(".hamburger");
const openButton = document.querySelector(".navbar__logo .open"); // "Open" ikonkasi
const moonEL = document.querySelector(".moon")
const darkMode = document.querySelector(".darkMode")
const navbar = document.querySelector(".navbar")
const send = document.querySelector(".send")
const closeSearch = document.querySelector(".close__search")
const search = document.querySelector(".search")
const openSearch = document.querySelector(".open__search")
const searchINput = document.querySelector(".search input")

console.log(searchINput);



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
    "Qanday yangiliklar bor",
    "Oyin oynashga vaqtiz bormi?",
    "Qachon oyin oynaymiz?",
    "😊😊😊",
    "yaxshi",
    "yaxshimisiz",
    "Sizga bir yangilik bor!",
    "hop",
    "otiribman",
    "Assalomu alaikum 🙂",
]

function formatTime(date) {
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const value = input.value;
    if (value === "") {
        return
    }

    const now = new Date();
    const formattedTime = formatTime(now);

    const userMsg = document.createElement("div");
    userMsg.classList.add("msg", "me");
    userMsg.innerHTML = `<p>${value}</p><span>${formattedTime}</span>`;
    msgContainer.appendChild(userMsg);
    input.value = ""
    botMsg()
})

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

let sidebarOpen = false;

openButton.addEventListener("click", () => {
    sidebar.style.transform = "translateX(0%)";
    sidebarOpen = true
});

hamburger.addEventListener("click", () => {
    sidebar.style.transform = "translateX(-100%)";
    sidebarOpen = false;
});

openSearch.addEventListener("click", () => {
    search.style.top = "0";
});

closeSearch.addEventListener("click", () => {
    search.style.top = "-50px";
});


moonEL.addEventListener("click", () => {
    sidebar.classList.toggle("dark");
    navbar.classList.toggle("nav");
    search.classList.toggle("searchmode");
    form.classList.toggle("nav");
    hamburger.classList.toggle("color");
    darkMode.classList.toggle("color");
    closeSearch.classList.toggle("searchmode");
    searchINput.classList.toggle("searchmode");
    input.style.color = "white"
    send.style.color = "white"
});
