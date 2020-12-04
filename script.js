//Storing our user input
const goal= 1000;
let entries=[];
const entriesWrapper = document.querySelector("#entries");
document.querySelector("#target").innerText= goal;

//progress bar
function calcGoal(){
    const totalValue=entries.reduce(reducer).toFixed(1);
    const completedPercent= totalValue/(goal/100);
    const progressCircle= document.querySelector("#progressCircle");
    if(completedPercent >100) completedPercent ===100;
    progressCircle.style.background = `conic-gradient(#70db70 ${completedPercent}%, #2d3740 ${completedPercent}% 100%)`;
}

function addNewEntry(newEntry){
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    const listItem= document.createElement("li");
    const listValue= document.createTextNode(newEntry);
    listItem.appendChild(listValue);
    entriesWrapper.appendChild(listItem);
}

//Calculating total
function reducer(total, currentValue){
    return total + currentValue;
}

function calTotal(entries){
    const totalValue=entries.reduce(reducer).toFixed(1);
    document.getElementById('total').innerText= totalValue;
    document.getElementById('progressTotal').innerText= totalValue;
}

//Average distance
function calcAverage(){
    const average = (entries.reduce(reducer)/entries.length).toFixed(1);
    document.getElementById("average").innerText= average;
}

//weekly high
function weeklyHigh(){
    const high= Math.max(...entries);
    document.getElementById("high").innerText= high;
}


//Submit function
function handleSubmit(event){
    event.preventDefault()
    const entry= Number(document.querySelector("#entry").value);
    if(!entry) return;
    document.querySelector("form").reset();
    entries.push(entry);
    addNewEntry(entry);
    calTotal(entries);
    calcAverage();
    weeklyHigh();
    calcGoal();
}



//Listening to the form
const form = document
.querySelector("form").addEventListener('submit', handleSubmit);