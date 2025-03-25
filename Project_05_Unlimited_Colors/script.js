const h=document.querySelector("h1");
const h1=document.querySelector("h2");

const randomColor=function()
{
    const hexadecimal='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++)
    {
        color += hexadecimal[Math.floor(Math.random()*16)];
    }
    return color;
}
let stop1;
const start=function()
{
    stop1=setInterval(changeColor,1000);
    function changeColor()
    {
        const c=document.body.style.background=randomColor();
        h.style.color=`${c}`;
        h1.innerText=`Color Code - (${c})`;

    }
}
const stop=function()
{
    clearInterval(stop1);
    document.body.style.background="white";
    h1.innerText=`Color Code - (#ffffff)`;
    stop1=null;
}
document.getElementById("start").addEventListener('click',start);
document.getElementById("stop").addEventListener('click',stop);