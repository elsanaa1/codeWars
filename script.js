// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// Solution:
let word=prompt("type a string:")
let tab=word.split("")
let count=0
for( let c of tab){
  if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u')
    { count++;}
}
console.log(tab)
