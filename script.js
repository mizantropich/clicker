let count = parseInt(localStorage.getItem("clickCount")) || 0;
let autoClicker = null;
let recordCount = parseInt(localStorage.getItem("recordCount")) || 0;
let upgradeCost = parseInt(localStorage.getItem("upgradeCost")) || 10;
let autoClickerPower = parseInt(localStorage.getItem("autoClickerPower")) || 1;

const autoButton = document.getElementById("autoButton");
const clickerButton = document.getElementById("clickerButton");
const resetButton = document.getElementById("resetButton");
const clickCount = document.getElementById("clickCount");
const record = document.getElementById("record");
const upgradeButton = document.getElementById("upgradeButton");
const autoClickerPowerDisplay = document.getElementById("autoClickerPower");
const upgradeCostDisplay = document.getElementById("upgradeCost");

document.addEventListener("DOMContentLoaded", function () {
  clickCount.textContent = count;
  record.textContent = recordCount;
  autoClickerPowerDisplay.textContent = autoClickerPower;
  upgradeCostDisplay.textContent = upgradeCost;
});

clickerButton.addEventListener("click", function () {
  count += 1;
  clickCount.textContent = count;
  localStorage.setItem("clickCount", count);
  if (count > recordCount) {
    recordCount = count;
    record.textContent = recordCount;
    localStorage.setItem("recordCount", recordCount);
  }
});

resetButton.addEventListener("click", function () {
  count = 0;
  clickCount.textContent = count;
  localStorage.removeItem("clickCount");
  autoClickerPower = 1;
  autoClickerPowerDisplay.textContent = autoClickerPower;
  localStorage.removeItem("autoClickerPower");
  upgradeCost = 10;
  upgradeCostDisplay.textContent = upgradeCost;
  localStorage.removeItem("upgradeCost");
  clearInterval(autoClicker);
  autoClicker = null;
  autoButton.classList.remove("active");
});

autoButton.addEventListener("click", function () {
  autoButton.classList.toggle("active");

  if (autoButton.classList.contains("active")) {
    autoClicker = setInterval(function () {
      count += autoClickerPower;
      clickCount.textContent = count;
      localStorage.setItem("clickCount", count);
      if (count > recordCount) {
        recordCount = count;
        record.textContent = recordCount;
        localStorage.setItem("recordCount", recordCount);
      }
    }, 1000);
  } else {
    clearInterval(autoClicker);
    autoClicker = null;
  }
});

upgradeButton.addEventListener("click", function () {
  if (count >= upgradeCost) {
    count -= upgradeCost;
    autoClickerPower += 1;
    upgradeCost *= 2;
    clickCount.textContent = count;
    autoClickerPowerDisplay.textContent = autoClickerPower;
    upgradeCostDisplay.textContent = upgradeCost;
    localStorage.setItem("clickCount", count);
    localStorage.setItem("autoClickerPower", autoClickerPower);
    localStorage.setItem("upgradeCost", upgradeCost);
  }
});
