function removezero(n){
    if(input.value=='0')
    input.value=n;
    else
    input.value+=n;
    userin.innerHTML+=n;
}
for(i=0;i<allclick.length;i++){
     let x=allclick[i].textContent;
    allclick[i].addEventListener("click",()=>{
         if(x>=0&&x<=9){
        removezero(x);
        console.log(x);}
        if(x=='+'){
            Operator(x);
            opr=1;
        }
        if(x=='-'){
            Operator(x);
            opr=2;
        }
        if(x=='*'){
            Operator(x);
            opr=3;
        }
        if(x=='/'){
            Operator(x);
            opr=4;
        }
        if(x=='%'){
            Operator(x);
            opr=5;
        }
        if(x=='Del'){
            if(input.value.trim().length !== 0){
                let bsk=input.value.length;
                if(bsk!=1){
                    input.value=input.value.slice(0,bsk-1);
                }
                else{
                    input.value=String(0);
                }
            }
         
            if(userin.textContent.trim().length !== 0){
                let bsk=userin.textContent.length;
                if(bsk!=1){
                    userin.textContent=userin.textContent.slice(0,bsk-1);
                }
                else{
                    userin.textContent=String();
                }
            }
        }
        if(x=='C'){
            userin.textContent=String();
            input.value='0';
        }
        if(x=='.'){
            if(input.value!='0'){
                if(!input.value.includes('.')){
                input.value+='.';
                userin.innerHTML+='.';}
            }
        }

        if(x=='='){
            if (typeof input.value === 'string' && input.value.trim().length === 0)
input.value="BADEXPRESSON";
else
SecondNo=Number(input.value);
            switch(opr){
        case 1:Result=firstNO+SecondNo;
        input.value=String(Result);
        userin.innerHTML=firstNO+"+"+SecondNo;
        break;
        case 2:Result=firstNO-SecondNo;
        input.value=String(Result);
        userin.innerHTML=firstNO+"-"+SecondNo;
        break;
        case 3:Result=firstNO*SecondNo;
        input.value=String(Result);
        userin.innerHTML=firstNO+"*"+SecondNo;
        break;
        case 4:Result=firstNO/SecondNo;
        input.value=String(Result);
        userin.innerHTML=firstNO+"/"+SecondNo;
        break;
        case 5:Result=firstNO%SecondNo;
        input.value=String(Result);
        userin.innerHTML=firstNO+"%"+SecondNo;
}
        }
    });
}

function Operator(str){
if (typeof input.value === 'string' && input.value.trim().length === 0)
input.value="BADEXPRESSON";
else
firstNO=Number(input.value);
input.value="";
userin.innerHTML+=str;
}