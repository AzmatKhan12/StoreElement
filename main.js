
const item = document.querySelector('.items')
item.remove();
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const userList = document.querySelector('#users');
const msg = document.querySelector('.msg');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList = 'error';
        msg.innerHTML = 'please fill the all fields';
        setTimeout(() => msg.remove(), 3000);
    }
    else {
        const list = document.createElement('li');
        list.appendChild(document.createTextNode(`${nameInput.value} :${emailInput.value}`));

        userList.append(list);

        nameInput.value = '';
        emailInput.value = '';

    }

}


/*// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    } else {
        // Create new list item with user
        const li = document.createElement('li');

        // Add text node with input values
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        // Add HTML
        // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

        // Append to ul
        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}*/