'use strict';


function makeArrayFromRangeGiven(s,e){
    let arr=[];
    let c=0
    for(let i=s;i<=e;i++){
        arr[c]=i;
        c++;
    }
    return arr;
}


function checkPrime(numArray){
    let arr=[];
    let c=0;
    for(let i=0;i<numArray.length;i++){
        let flag=0;

        if((numArray[i]===1)||(numArray[i])===0){
            flag=1;
            }
        else
        {
            for(let j=2;j<numArray[i];j++){
                if((numArray[i]%j)===0)
                    flag=1;
            }
        }

        if(flag!==1){
            console.log(`${numArray[i]} is prime`);
            arr[c]=numArray[i];
            c++;
        }
       // else
           // console.log(`${numArray[i]} is not prime`);       
    }

    return arr;

}


function checkOdd(numArray){
    let arr=[];
    let c=0;
    for(let i=0;i<numArray.length;i++){

        if(numArray[i]%2!==0){
            console.log(`${numArray[i]} is Odd`);
            arr[c]=numArray[i];
            c++;
        }          
    }
    return arr;

}

function checkEven(numArray){
    let arr=[];
    let c=0;
    for(let i=0;i<numArray.length;i++){

        if(numArray[i]%2===0){
            console.log(`${numArray[i]} is Even`);
            arr[c]=numArray[i];
            c++;
        }          
    }
    return arr;

}

var starting_index;   
var ending_index;   
let arrayOfNumbers

const repl = require('node:repl');
const r = repl.start({ prompt: 'starting index,ending index ', eval: myEval, writer: myWriter });
function myEval(cmd, context, filename, callback) {
    console.log(`cmd=${cmd}`);
    [starting_index,ending_index]=String(cmd).split(',');
    console.log(`starting_index=${starting_index},ending_index=${ending_index}`);
    arrayOfNumbers=makeArrayFromRangeGiven(starting_index,ending_index);
    console.log(`arrayOfNumbers=${arrayOfNumbers}`);   
    callback(null, cmd);
                    }
function myWriter(output) {
let primeArray=checkPrime(arrayOfNumbers);
let oddArray=checkOdd(arrayOfNumbers);
let evenArray=checkEven(arrayOfNumbers);
                //  console.log(`${primeArray}`);
                //  console.log(`${oddArray}`);
                //  console.log(`${evenArray}`);
    return ;//output;//.toUpperCase();
                    } 

        






