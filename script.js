const logoutBtn = document.querySelector('.logout-btn');
const greeting = document.querySelector('.greeting');
const userArea = document.querySelector('.user-area');
const friendsArea = document.querySelector('.friends-area')
let users = [
    {
        id: 1,
        name: "Cavid",
        username: "cavid123",
        password: "1234"
    },
    {
        id: 2,
        name: "Nicat",
        username: "nicat123",
        password: "1234"
    },
    {
        id: 3,
        name: "Anar",
        username: "anar123",
        password: "1234"
    }
]

logoutBtn.addEventListener('click', function () {
    localStorage.removeItem('id');
    localStorage.removeItem('friends');
    localStorage.removeItem('users');
    window.location.href = 'login.html';
})


function DisplayGreeting() {
    let user = users.find(m => m.id == localStorage.getItem('id'));
    greeting.textContent = `Hello ${user.username}`;
}


function DisplayUsers() {
    let dbUsers = JSON.parse(localStorage.getItem('users'));
    let dbFriends = JSON.parse(localStorage.getItem("friends"))
    dbUsers.forEach(user => {
        let html = `
        <div class="col-2 me-2">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${user.username}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${user.name}</h6>
                    <button data-id="${user.id}" class="btn btn-outline-success send-btn">Send Request</button>            
                </div>
            </div>
        </div>
        `
        userArea.insertAdjacentHTML('beforeend',html);

    });

    const sendBtns=document.querySelectorAll('.send-btn');

    sendBtns.forEach(button => {
        button.addEventListener('click',function (e) {
            
            let friend=dbUsers.find(m=>m.id==e.target.dataset.id);
            dbFriends.push(friend);
            localStorage.setItem('friends',JSON.stringify(dbFriends));
            button.parentElement.parentElement.parentElement.classList.add('d-none');
        })
    });
}



function DisplayFriends() {
    let dbFriends = JSON.parse(localStorage.getItem("friends"));
    dbFriends.forEach(user => {
        let html = `
        <div class="col-2 me-2">
        <div class="card" ">
                <div class="card-body">
                    <h5 class="card-title">${user.username}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${user.name}</h6>                       
                </div>
            </div>
        </div>
        `
        friendsArea.insertAdjacentHTML('beforeend',html);
    
    });
}

if (friendsArea) {
    DisplayFriends();
}

DisplayUsers();
DisplayGreeting()











