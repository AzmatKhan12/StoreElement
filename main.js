
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

