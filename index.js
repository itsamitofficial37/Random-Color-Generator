const body = document.body;
const mainButton = document.querySelector("button");
const heading = document.querySelector("h1 span");


function randomColorGenerator(){
    const red = Math.floor(Math.random()* 256);
    const green = Math.floor(Math.random()* 256);
    const blue = Math.floor(Math.random()* 256);

    const randomColor = `rgb(${red},${green},${blue})`;
    return randomColor;
}

mainButton.addEventListener("click",(e)=> {
    const randomColor = randomColorGenerator();
    heading.textContent = randomColor;
    body.style.backgroundColor = randomColor;

})