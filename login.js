const usernameInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const loginForm = document.querySelector('.login-form');

let users = [
    {
        id:1,
        name:"Cavid",
        username:"cavid123",
        password:"1234",
        friends:[]
    },
    {
        id:2,
        name:"Nicat",
        username:"nicat123",
        password:"1234",
        friends:[]
    },
    {
        id:3,
        name:"Anar",
        username:"anar123",
        password:"1234",
        friends:[]
    }
]

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let user = users.find(m => m.username === usernameInput.value && m.password === passwordInput.value);
    if (user) {
        localStorage.setItem('id', user.id);
        localStorage.setItem('friends',JSON.stringify(user.friends));
        let initialUsers=users.filter(m=>m.id!==user.id);
        localStorage.setItem('users',JSON.stringify(initialUsers));
        window.location.href = "index.html";
    }
    else {
        console.log("User not found");
    }
})
