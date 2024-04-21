const adviceQoute = document.getElementById('advice-qoute');
const adviceBtn = document.getElementById('advice-generator-btn');
const adviceNum = document.getElementById('advice-number');


async function fetchData(){
    try{
        const response = await fetch('https://api.adviceslip.com/advice');
        if (!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const advices = await response.json();
        adviceQoute.textContent = advices.slip.advice;
        adviceNum.textContent = "#" + advices.slip.id;
    }
    catch(error){
        console.log('Failed to fetch advice:', error);
    }
    
}
//initial advice rendering
fetchData();
adviceBtn.addEventListener('click',fetchData)



