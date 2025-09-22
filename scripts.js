// Get browser information
let browser = "Unknown Browser";
if (navigator.userAgent.indexOf("Firefox") > -1) {
    browser = "Mozilla Firefox";
} else if (navigator.userAgent.indexOf("Chrome") > -1) {
    browser = "Google Chrome";
} else if (navigator.userAgent.indexOf("Safari") > -1) {
    browser = "Safari";
} else if (navigator.userAgent.indexOf("Edge") > -1) {
    browser = "Microsoft Edge";
} else if (navigator.userAgent.indexOf("MSIE") > -1 || navigator.userAgent.indexOf("Trident") > -1) {
    browser = "Internet Explorer";
}

// Get OS information
let os = "Unknown OS";
if (navigator.userAgent.indexOf("Win") > -1) {
    os = "Windows";
} else if (navigator.userAgent.indexOf("Mac") > -1) {
    os = "Mac OS";
} else if (navigator.userAgent.indexOf("Linux") > -1) {
    os = "Linux";
} else if (navigator.userAgent.indexOf("Android") > -1) {
    os = "Android";
} else if (navigator.userAgent.indexOf("iPhone") > -1) {
    os = "iOS";
}

// Display the detected information
const browserElem = document.getElementById("browser");
if (browserElem) browserElem.textContent = browser;
const osElem = document.getElementById("os");
if (osElem) osElem.textContent = os;

// app.js or script.js

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  });
}
