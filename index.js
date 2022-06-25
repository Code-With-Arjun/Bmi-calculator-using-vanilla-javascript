
let heightInput=document.getElementById('height-input');
let weightInput=document.getElementById('weight-input');

// heightInput/100
let submitBtn=document.querySelector('.submit-btn');
submitBtn.addEventListener('click',submitfun)
// submitBtn.preventDefault();
let resultBtn=document.querySelector(".result-btn");
function submitfun(){
    if(!heightInput.value||!weightInput.value){
        alert('fill up the value');
    }
    else{
        const w=weightInput.value
        const h=Math.pow(heightInput.value/100,2)
        const bmi=Math.floor(w/h);
        resultBtn.innerHTML=bmi;
    }

}