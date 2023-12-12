const clock = document.querySelector("span#clock");
// document.querySelector에 h2와 id를 함께 사용하는 방법도 있고
// id만 사용할 수 있고,
// getElementById("clock")을 사용하는 방법도 있음

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
// Date object는 호출하는 당시의 현재 날짜와 시간을 알려줌
// date.getHousrs()는 숫자이므로 padStart를 쓸 수 없음. string으로 바꿔줘야 함

getClock();
setInterval(getClock, 1000);
// setInterval은 2개의 argument를 받음.
// 첫번째 argument는 내가 실행하고자 하는 function을 쓰고,
// 두번째 argument는 호출되는 function 간격을 몇 ms로 할지 쓰면 됨
