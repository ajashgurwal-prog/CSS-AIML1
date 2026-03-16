function calculateresult(){

    const n=document.getElementById("subject").Value;
    let i;
    let total=0;
    for(i=0;i<n;i++){

        let x=parseFloat(prompt("enter the sublect np."+(i+1)));
        total+= x;
     }
     let avg=total/n;
     let grade ="A+";
     if (avg>90){
        grade='A+';
     }
     
     else if (avg>70){
        grade='B+';
     }
     else if (avg>50){
        grade='C+';
     }
     else if (avg>40){
        grade='F';
     }
     let result=document.getElementById
     ("result").innerHTML="total marks"+total+"<br/>"+"grade"+grade
     
}