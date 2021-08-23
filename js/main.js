// входные данные

    
// вывод резултата
const resultProp_M = document.getElementById('result_m');
const resultProp_W = document.getElementById('result_w');
const resultProp_T1 = document.getElementById('result_t1');
const resultProp_T2 = document.getElementById('result_t2'); 

function notNumber(n) {
    return (isNaN(parseFloat(n)) && isFinite(n)) || isNaN(n);
}

function calculate(enterData) {
        console.log("оба"+enterData);
}

const resultBTN = document.querySelector('.main-btn');


resultBTN.addEventListener('click',function(params) {
    let inputs= document.querySelectorAll('.main-input');
   
   

    let enterData=[];
    for (let i = 0; i < inputs.length; i++) {
        if (notNumber( inputs[i].value)|| inputs[i].value===" ") {
                alert('Данные введены не верно!\n Проверте:\n1.')

                break;
        } else {
            enterData.push(inputs[i].value.trim())
           
        }
    }
  
    calculate(enterData);
    inputs.forEach(function (item) {
        item.value = "";
      });
});
