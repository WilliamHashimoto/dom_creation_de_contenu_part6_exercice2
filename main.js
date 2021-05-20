//1
let btn1 = document.querySelector('input');
let ul1 = document.querySelector('ul');

btn1.addEventListener("click", () => {
    ul1.removeChild(ul1.firstElementChild);
})

//2
let btn2 = document.querySelectorAll('input')[1];

btn2.addEventListener("click", () => {
    ul1.removeChild(ul1.lastElementChild);
})

//3
let btn3 = document.querySelectorAll('input')[2]

let ulArr;
let random;

btn3.addEventListener('click', () => {
    ulArr = Array.from(ul1.children)
    random = Math.round(Math.random()*(ulArr.length-1));
    ul1.removeChild(ul1.children[random])
})

//4
let newLi =document.createElement('li');
newLi.innerText = "Remplaçant";
let btn4 = document.querySelectorAll('input')[3];
let ul2 = document.querySelectorAll('ul')[1]

console.log(ul2.children);

btn4.addEventListener("click", ()=>{
    ul2.replaceChild(newLi, ul2.children[1])
})

//5
let input = document.querySelectorAll('input')[4];
let btn5 = document.querySelectorAll('input')[5];

let liGang = document.createElement('li');

btn5.addEventListener("click", ()=>{
    liGang.innerText = input.value
    ul2.replaceChild(liGang, ul2.children[2])
})


