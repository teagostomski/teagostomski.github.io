const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.addEventListener('change', () => {
  const choice = select.value;

  if (
    choice == "February"
  ) {
    days == 28;
  }
  else if (
    choice == "April" || 
    choice == "September"|| 
    choice == "June"|| 
    choice == "November"
  ) {
    days == 30;
  } else {
    days == 31;
}


  createCalendar(days, choice);
});

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31, 'January');
