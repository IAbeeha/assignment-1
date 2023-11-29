'use strict';

const intern={
    'skill1':false,
    'skill2':false,
    
}


let s=prompt(`Enter the name of a skill: `);

let keys=Object.keys(intern);
    for(let i=0;i<keys.length;i++)
        {
            if(s===keys[i]){
                console.log(`intern possesses the entered skil`);
                break;
            }
            else if((i===(keys.length-1))&&(s!==keys[i])){
                console.log(`intern doesn't possesses the entered skil`);
            }
            
        }