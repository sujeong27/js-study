const yearMonthDay = document.querySelector("#date");
const week = ["일", "월", "화", "수", "목", "금", "토"];

function getCalendar() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = week[today.getDay()];
    yearMonthDay.innerText = `오늘은 ${year}년 ${month}월 ${date}일 ${day}요일!`;
}

getCalendar();
