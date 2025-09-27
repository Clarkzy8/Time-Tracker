let baseDate = new Date();
let date = new Date(baseDate); // make a copy so we can reset to original

function updateDateDisplay() {
  let fullDate = date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  document.getElementById("date").innerText = fullDate;
}

function resetDate() {
  date = new Date(baseDate); // reset to original
  updateDateDisplay();
}

function changeDay(amount) {
  date.setDate(date.getDate() + amount);
  updateDateDisplay();
}

function changeMonth(amount) {
  date.setMonth(date.getMonth() + amount);
  updateDateDisplay();
}

// initial render
updateDateDisplay();



const tabs = document.querySelectorAll('.tab');
const pages = document.querySelectorAll('.page');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Show correct page
    const target = tab.getAttribute('data-target');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(target).classList.add('active');
  });
});

// Set initial page active
document.querySelector('.page.active') || pages[0].classList.add('active');
