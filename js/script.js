let status = {
  connected: false,
};
const modal = document.querySelector(".modal");
const toggleSwitch = document.querySelector(".toggle");
const connectBtn = document.querySelector(".connect-btn");
const userList = document.querySelector(".users-list");
const unlockWallet = document.querySelector(".unlock-wallet");
const connectText = document.querySelector(".connect-text");
// Reference of Elements for Resetting
const balAmount = document.querySelector(".bal-amount");
const poolBalAmount = document.querySelector(".pool-bal-amount");
const poolCons = document.querySelector(".pool-cons");
const totalEarn = document.querySelector(".total-earn");

resestTexts();

connectBtn.addEventListener("click", () => {
  toggleSwitch.classList.toggle("on");

  if (toggleSwitch.classList.contains("on")) {
    status.connected = true;
    connectBtn.innerHTML = "disconnect";
    connectBtn.classList.add("disconnect");
    balAmount.classList.add("bal-amount-animate");
  } else {
    connectBtn.innerHTML = "connect";
    connectBtn.classList.remove("disconnect");
    balAmount.classList.remove("bal-amount-animate");
    status.connected = false;
  }
  if (status.connected) {
    unlockWallet.style.display = "none";
    userList.style.display = "block";
    connectText.innerHTML = `<h6 class='connect-text text-success'>connected<span class='ml-2'><i class="fas fa-lock-open"></i></span></h6>`;
    successText();
  } else {
    userList.style.display = "none";
    unlockWallet.style.display = "flex";
    connectText.innerHTML = `<h6 class='connect-text text-danger'>not connected<span class='ml-2'><i class="fas fa-lock"></i></span></h6>`;
    resestTexts();
  }
});

// Reset Fields if connection failed
function resestTexts() {
  balAmount.innerHTML = `0.0000`;
  poolBalAmount.innerHTML = `0.000`;
  poolCons.innerHTML = `0%`;
  totalEarn.innerHTML = `0.000`;
}
// Show Fields/Amount if connection successful
function successText() {
  balAmount.innerHTML = `1377.687`;
  poolBalAmount.innerHTML = `9.883.813`;
  poolCons.innerHTML = `65%`;
  totalEarn.innerHTML = `424.55`;
}
