const quotes = [
    {
        quote: "계획대로 안 되는 게 인생이다.",
        author: "짱구아빠",
    },
    {
        quote: "꿈은 도망가지 않아. 도망가는 것은 언제나 자신이야.",
        author: "신짱구",
    },
    {
        quote: "이 미래는 오직 너만의 거야! 네가 원하는 대로 살아!!",
        author: "신짱구",
    },
    {
        quote: "똑똑히 들어 어른들 생활은 리얼한 소꿉놀이보다 훨씬 비참해! 내 말 절대 잊으면 안 돼!",
        author: "유리",
    },
    {
        quote: "내 인생은 결코 하찮은 인생이 아니다. 가족이 주는 행복이 얼마나 큰지 알려주고 싶을 정도라고!",
        author: "짱구아빠",
    },
    {
        quote: "자기 혼자 컸다고 생각하는 사람은 크게 될 자격이 없어!",
        author: "신짱구",
    },
    {
        quote: "포기하고 싶지 않아요. 제가 포기하지 않으면 인연은 계속 이어져요.",
        author: "신짱구",
    },
    {
        quote: "살다보면 좋은 일도 있고 슬픈 일도 있어. 그게 인생이야!",
        author: "신짱구",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// Math.floor 소수점 버림
// Math.ceil 소수점 올림
// Math.round 소수점 반올림

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
