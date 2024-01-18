
const input=document.getElementById("text-input");
const buttonStatus=document.getElementById("check-btn");
const result=document.getElementById("result");

//function to check if it is a palindrome
function isPalindrome(str){
   const cleanStr=str.replace(/[\W_]/g,'').toLowerCase();
    return cleanStr === cleanStr.split("").reverse("").join("");
}

//fucntion to update the result

function resultUpate(inputText,isPali){
  const resultText=isPali? `${inputText} is palindrome`:`${inputText} is not palindrome`;
  result.innerText=resultText;
}

//button
buttonStatus.addEventListener("click",function(){
  if(!input.value){
    alert('please input a value');
  }else{
    const isPali = isPalindrome(input.value);
    resultUpate(input.value,isPali);
  }
});
