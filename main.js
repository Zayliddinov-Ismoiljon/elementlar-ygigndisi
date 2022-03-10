//Masala
// n soni berilgan va A va B sonalr berilgan a[0]=A a[1]=B boshqa lementlari esa ozidan oldingi barcha elementlar yigindisiga teng bolgan massivni hosil qiling


let n =10;
let A=3;
let B=4;
let a =[A,B];
 
for(let i=2; i<n; i++){
  let sum = 0;
  for(let j=0; j<i; j++){
    sum += a[j];
  }
  a[i] = sum;
}

console.log(a);