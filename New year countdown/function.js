const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minuts = document.querySelector(".minutes");
const second = document.querySelector(".seconds");

function update() {
    const currentYear = new Date().getFullYear();
    const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);
    const currentData = new Date();
    const diff = newYear - currentData;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);
    days.innerHTML = d < 10 ? "0" + d : d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minuts.innerHTML = m < 10 ? "0" + m : m;
    second.innerHTML = s < 10 ? "0" + s : s;
}
setInterval(update, 1000);