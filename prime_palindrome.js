// prime Number

num=15;
count=0;
    for(let i=1;i<=num;i++){
        if(num%i===0){
            count++;
        }}
    if(count==2){
            console.log("prime number");
        }
         else{
            console.log("Not prime number");
}

// check palindrome

str="naman";
let bag="";
  for(let i=N-1; i>=0;i--){
      bag=bag+str[i];
    
}if(str==bag){
  
    console.log("palindrome");
}else{
    console.log("Not palindrome");
}