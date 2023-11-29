'use strict';

class Book{
    constructor(title1,author1,publicationYear1,isAvailable1){
        this.title=title1;
        this.author=author1;
        this.publicationYear=publicationYear1;
        this.isAvailable=isAvailable1;
        return alert(`Added`);
        }

        displayDetails(){
            return `Title=${this.title},\nAuthor=${this.author},\nPublicationYear=${this.publicationYear},\nisAvailable=${this.isAvailable},\n`;
        }

        borrowBook(){
            if(this.isAvailable===true)
            {
                this.isAvailable=false;
                return alert(`Book given`);
            }
            else
                return alert(`Book not available`);
        }
        returnBook(){
            if(this.isAvailable===false)
                {
                    this.isAvailable=true;
                    return alert(`Book returned`);
                }
            else
                return alert(`Book is already returned`);
        }
        hasTitle(titl){
            if(this.title===titl)
                    return true;
                else
                    return false;
        }
        available(){
            return this.isAvailable;
        }
        
}


function displayLibrary(library){
    let x='';
    for(let i=0;i<c;i++){
      const a=library[i];
        x=x+`Book${i+1}:\n`+a.displayDetails()+`\n`;
    }
    alert(x);
}
function findAvailableBooks(){
    let x='';
    for(let i=0;i<c;i++){
      const a=library[i];
      if(a.available()){
        x=x+`Book${i+1}:\n`+a.displayDetails()+`\n`;
      }
    }
    alert(x);
}


let library=[];
let c=0;

while(1){
let choice=prompt(`1-Add new Book\n2-Borrow Book\n3-Return Book\n4-Display all Books\n5-Display Available Books\n0-Exit\n`);

if(choice==1){
    let t=prompt(`Title:`);
    let a=prompt(`Author:`);
    let y=parseInt(prompt(`Year:`));

    library[c]=new Book(t,a,y,true);
    c++;
}
else if(choice==2){
    let t=prompt(`Title:`);
    for(let i=0;i<c;i++){
        const a=library[i];
        if(a.hasTitle(t)){
            a.borrowBook();
            break;
        }
        else
            alert(`Book Not found`)
    }
}
else if(choice==3){
    let t=prompt(`Title:`);
    for(let i=0;i<c;i++){
        const a=library[i];
        if(a.hasTitle(t)){
            a.returnBook();
            break;
        }
        else
            alert(`Book Not found`)
    }
}
else if(choice==4){
    displayLibrary(library);
}
else if(choice==5){
    findAvailableBooks(library);
}
else if(choice==0){
    break;
}



}