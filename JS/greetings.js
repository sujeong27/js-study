const mainPage = document.querySelector("#mainpage");
const loginForm = mainPage.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const subPage = document.getElementById("subpage");
const greeting = subPage.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    mainPage.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `안녕, ${username}! 오늘 우리 뭐할까?`;
    subPage.classList.remove(HIDDEN_CLASSNAME);
    mainPage.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    mainPage.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
