// COUNTDOWN TIMER FUNCTIONALITY
function startCountdown(endDate) {
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance <= 0) {
      clearInterval(timer);
      document.getElementById("days").innerText = 0;
      document.getElementById("hours").innerText = 0;
      document.getElementById("minutes").innerText = 0;
      document.getElementById("seconds").innerText = 0;
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }, 1000);
}

// Set your countdown date here (YYYY-MM-DD)
const targetDate = new Date("2025-05-30T23:59:59");
startCountdown(targetDate);

// LIVE ORDER POPUPS FOR SOCIAL PROOF
const orders = [
  "Shola from Abuja just ordered 3 Bottles!",
  "Emeka from Lagos ordered 2 Bottles!",
  "Yakubu from Kaduna got the 4-Bottle Pack!",
  "Tunde from Ibadan just completed his order!",
  "Mr. Okoro from Owerri grabbed the promo deal!"
];

let popupIndex = 0;

function showLiveOrder() {
  const popup = document.createElement("div");
  popup.innerText = orders[popupIndex];
  popup.className = "live-order-popup";
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 5000);

  popupIndex = (popupIndex + 1) % orders.length;
}

// Show popup every 15 seconds
setInterval(showLiveOrder, 15000);
