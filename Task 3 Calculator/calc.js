const userin=document.querySelector(".user_input span");
    
const input =document.querySelector(".outputscreen input");
const btn=document.getElementById("allbtns");
let btnId=['one','two','three','plus','four','five','six','mul','seven','eight','nine','minus','decimal','zero','equal','div','c','Del','mod'];
let allbtn=[1,2,3,'+',4,5,6,`*`,7,8,9,'-','.',0,'=','/','C','Del','%'];
for(i=0;i<allbtn.length;i++){
    btn.innerHTML+=`<button id="${btnId[i]}" class="btn">${allbtn[i]}</button>`;
}
let firstNO,SecondNo,Result,opr;
const aaa=document.querySelector(".btn");
const allclick=document.querySelectorAll(".btn");
// allclick[0].addEventListener("click",()=>{
//     removezero(1);
// });
let screenstring='';
for (item of allclick){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        if(buttonText=='*'){
            screenstring += buttonText;
            input.value=screenstring;
        }
        else if(buttonText=='C'){
           input.value='';
           screenstring='';
        }
        else if(buttonText=='='){
            input.value=eval(screenstring);
            screenstring='';
        }
        else if(buttonText=='Del'){
            if(input.value.trim().length !== 0){
                let bsk=input.value.length;
                if(bsk!=1){
                    input.value=input.value.slice(0,bsk-1);
                    screenstring=screenstring.slice(0,bsk-1);
                }
                else{
                    input.value=String('');
                    screenstring=String('');
                }
            }
       
        }
        else{
            screenstring+=buttonText;
            input.value=screenstring;
        }

    })

}