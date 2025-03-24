const form=document.querySelector("form");
form.addEventListener("submit",function(e)
{
    e.preventDefault();
    const height=(document.querySelector("#height").value);
    const weight=(document.querySelector("#weight").value);
    const result=document.querySelector("#result");
    if(height===''||height<=0||isNaN(height))
    {
        result.innerText=`Please Give A Valid Height (${height})`;
    }
    else if(weight===''||weight<=0||isNaN(weight))
    {
        result.innerText=`Please Give A Valid Weight (${weight})`;
    }
    else
    {
        const bmiCalculate=(weight/((height*height)/10000)).toFixed(2);
        result.innerText=`${bmiCalculate}`;
    }
})