const trafficLight = document.getElementById("trafficLight");

let currentIndex = 0;

const colors = [
    "🔴 Красный",
    "🟡 Жёлтый",
    "🟢 Зелёный"
];

const interval = setInterval(() => {
    currentIndex++;

    if (currentIndex > 2) {
        currentIndex = 0;
    }

    trafficLight.textContent = colors[currentIndex];
}, 2000);

setTimeout(() => {
    clearInterval(interval);
    trafficLight.textContent = "Светофор сломался 🔧";
}, 10000);
