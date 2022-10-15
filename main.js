/*
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
        list.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.append(list);

        nameInput.value = '';
        emailInput.value = '';

    }

}*/



const item = document.querySelector('.items')
item.remove();
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);

    // store object in local Storage.

    let userDetails = {

        name: name,
        email: email
    };

    axios.post('https://crudcrud.com/api/bbe7eb57fd714312b1c297a7c7990e63/appointmentData', userDetails)
        .then((response) => {
            showOnScreen(response.data);
        })
        .catch((err) => {
            console.error(err);
        })
    // localStorage.setItem(userDetails.email, JSON.stringify(userDetails));// to make key value unique, we make email id as a unique key.

    // //Retrieve an item from the local Storage
    // let user = JSON.parse(localStorage.getItem('Details'));

    // console.log(user);
    // showOnScreen(userDetails);

}

// Object.keys(localStorage).forEach((key) => {
//     stringifiedDetailsOfPeople = localStorage.getItem(key);
//     detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
//     addNewLineElement(detailsOfPeople);

// });


window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys = Object.keys(localStorageObj)

    for (var i = 0; i < localstoragekeys.length; i++) {
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showOnScreen(userDetailsObj)
    }
})

function showOnScreen(user) {

    const parentNode = userList;
    const childHTML = `<li>${user.name} : ${user.email}
    <button onclick=deleteUser('${user.email}')> Delete  </button>
    <button onclick=editUserDetails('${user.email}','${user.name}')>Edit </button>
    </li>`;

    parentNode.innerHTML = parentNode.innerHTML + childHTML;

    if (localStorage.getItem(user.email) !== null) {
        remove(user.email)
    }
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';


}

// if email already exist the remove frome the screen
function remove(emailId) {
    const parentNode = document.getElementById('Users');
    const childNodeToBeDeleted = document.getElementById(emailId);
    if (childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }


}

//Edit User
function editUserDetails(emailId, Username) {

    document.getElementById('email').value = emailId;
    document.getElementById('name').value = Username;

    deleteUser(emailId);
}

// deleteUser('abc@gmail.com')
function deleteUser(emailId) {
    console.log(emailId)
    localStorage.removeItem(emailId);
    remove(emailId);
}