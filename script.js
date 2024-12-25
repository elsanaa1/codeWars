// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// Solution:
function countv(word){
    let tab=word.split("")
    let count=0
    for( let c of tab){
      if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u')
        { count++;}
    }
   return count;
    
}



// Create a function that takes 
// an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// Solution:
function ev_odd(num){
  
if(num%2==0){
    return "Even"
}else{
    return "odd"
}

}

// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Solution:
function middchar(word){
    let len=word.length;
    let div=len/2; 
    if(Number.isInteger(div)){
        let midd=word[Math.trunc(div)-1]
        let midd2=word[Math.trunc(div)]
        return midd+","+midd2
    }else{
            let midd=word[Math.trunc(div)]
             return midd
    }
}


// Opposite number:
// Very simple, given a number (integer / decimal / both depending on the language),
//  find its opposite (additive inverse).
// Solution:

function opposNum(num){
    let sign=Math.sign(Number(num))
    if(sign==0)
    {
         return num;
    }else if(sign==1){
        return "-"+num;
    }
    else{
        return Math.abs(Number(num));
    }
}

// This time no story, no theory. The examples below show you how to write function accum:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(word){
    let newWord="";
    let resultTab=[];//table of mumbling words
   for(let i=1;i<=word.length;i++){
        // repeat i times every caracter
        for(let j=1;j<=i;j++){
            if(j==1)
             {
	     //	newtab.push(word[i-1].toUpperCase())
                newWord+=word[i-1].toUpperCase()
             }else{
	     //	newtab.push(word[i-1])
              newWord+=word[i-1]
              }
       }
       resultTab.push(newWord)
       newWord=""

    }
    
     let resultWord=resultTab.join("-")
     return resultWord
 
}

//You're a square!:
// Given an integral number, determine if it's a square number:
function isSquare(num){

let sq=Math.sqrt(Number(num));
if(Number.isInteger(sq)){
    return true
 }else{
     return false
 }
}


// Disemvowel Trolls
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.
function trollF(word){
let regex=new RegExp("[aeiuoAOIUO]",'g')
let res=word.replace(regex,'')
return res;
}
