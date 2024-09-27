let input =document.getElementById("input")
let btn = document.getElementById("btn")
let result =document.getElementById("result")
/*A+ (90-100)
A (80-89)
B+ (70-79)
B (60-69)
C+ (50-59)
C (40-49)
D+ (30-39)
D (20-29)
E (Below 20)*/




function gradeEval(){
    
    let val = input.value;
  if(input.value==='' || input.value >100 || !input.value.match(/^\d+/) ) {
    result.textContent="Please enter a valid mark between 0 and 100."
    return;
  }
    

if(val>=90 && val<=100){
    result.textContent="PASSED , GRADE= A+"
}
else if (val>=80 && val<=89) {
    result.textContent="PASSED , GRADE= A"
}
 
else if (val>=70 && val<=79) {
result.textContent="PASSED , GRADE= B+"
} 
else if (val>=60 && val<=69) {
result.textContent="PASSED , GRADE= B"
} 
else if (val>=50 && val<=59) {
result.textContent="PASSED , GRADE= C+"
} 
else if (val>=40 && val<=49) {
result.textContent="PASSED , GRADE= C"
} 
else if (val>=30 && val<=39) {
result.textContent="PASSED , GRADE= D+"
} 
else{
    result.textContent=" Minimum passing grade: D+ (30 39)"
 
}

input.value='';

}

console.log(result)



btn.addEventListener("click",gradeEval);


