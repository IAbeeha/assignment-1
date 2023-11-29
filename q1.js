'use strict';

function getArray(){
 
let arr=prompt(`Enter array like 1,2,3 and press enter: `).split(',').map(m=>{
    return parseInt(m);
});
console.log(`You entered: ${[...arr]}`);
return arr;
}


function findOccurances(arrParam){
for (let i in arrParam){
    let iCount=0;
    for (let j in arrParam){
        if(arrParam[i]==arrParam[j]){
            iCount=iCount+1;
        }
   } 
   console.log(`Occurance of ${arrParam[i]} = ${iCount}`);
   iCount=0;
    }
}

function findLargest(arrParam){
    let max=0;
    for (let i in arrParam){
        if(arrParam[i]>max)
            {
                max=arrParam[i];
               // console.log(`max= ${max} and arr= ${arrParam[i]}`)
            }
    };
    return max;
}

function checkPrime(num){
    if((num===1)||(num)===0)
       return 'Number is not prime';
    else
    {
        for(let i=2;i<num;i++){
            if((num%i)===0)
                return 'Number is not prime'; 
        }
    }
    
    return 'Number is Prime';
}


let a= getArray();
findOccurances(a);
console.log(`Largest number = ${findLargest(a)}`);
console.log(checkPrime(findLargest(a)));