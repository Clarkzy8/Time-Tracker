function showDatePicker() {
  document.getElementById('datePicker').click();
}

function handleDateChange(date) {
  console.log("You selected:", date);
  // You can show the date somewhere, e.g.:
  alert("Selected date: " + date);
}
