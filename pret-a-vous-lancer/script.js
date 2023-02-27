function isDateInPast(dateStr) {
    // Split the date string into day, month, and year components
    const [day, month, year] = dateStr.split('-');
    
    // Create a new Date object using the year, month, and day components (note that month is 0-indexed)
    const date = new Date(year, month - 1, day);
    
    // Get the current date
    const today = new Date();
    
    // Compare the date to the current date and return true if it's in the past, false otherwise
    return date < today;
  }
  
// Parse all the li elements
var liElements = document.querySelectorAll('li');
// for each li element
for (var i = 0; i < liElements.length; i++) {
    // get the data attribute
    var data = liElements[i].getAttribute('data');
    console.log(data);
    // data attribute is formatted as dd/mm/yyyy (french format)
    // toggle the class 'hidden' if the date is in the past
    if (isDateInPast(data)) {
        liElements[i].classList.toggle('hidden');
    }
}