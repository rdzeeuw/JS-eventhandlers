//Opdracht 1
const btn = document.getElementById('mybutton');
const sendAlert = function(e){
    alert('button clicked!');
}

btn.addEventListener('click', sendAlert);

//Opdracht 2 / 3
const btn2 = document.getElementById('button2');
const toggleColor = function(e){
    const body = document.querySelector('body');
    body.classList.toggle('red-background');
}

btn2.addEventListener('click', toggleColor);

