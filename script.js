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


// Disemvowel Trolls:
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.
function trollF(word){
let regex=new RegExp("[aeiuoAOIUO]",'g')
let res=word.replace(regex,'')
return res;
}


// Highest and Lowest:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Output string must be two numbers separated by a single space, and highest number is first.

function highLow(w){
    let tab=w.split(" ")
    for(let i=0;i<tab.length;i++){
        tab[i]=Number.parseInt(tab[i]);
    }
    let max= Math.max(...tab)
    let min= Math.min(...tab)
    return max+" "+min;
    }


    // Exes and Ohs:
    // Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.
    //  The string can contain any char.
    //  Examples input/output: XO("ooxx") => true
    function exesOhs(w){
        let countX=0;
        let countO=0;
        for ( let i=0;i<=w.length-1;i++){

            if(w[i]=='o' || w[i] == 'O') {countO++}
            if( w[i]=='x' ||w[i]=='X') {countX++}
        }
        if(countX == countO ){ return true}
        else{ return false }
        }

        // Square Every Digit:
        function squarDigits(word){
            let tab=word.split("")
            let tabRes=[]
            for(let e of tab){
                tabRes.push(Number(e)*Number(e));
            }
            let resWord=tabRes.join("")
            return resWord
        }

        // Shortest Word  :
        // Simple, given a string of words, return the length of the shortest word(s).
        function shortestW(s){
            let tabWords=s.split(" ")
            let tabLengths=[]
            for(e of tabWords ){
                tabLengths.push(e.length);
            }
            let  minLenght=Math.min(...tabLengths)
            return minLenght
        }

        // Complementary DNA:
        // Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the
        // "instructions" for the development and functioning of living organisms."ATTGC" --> "TAACG"
        function compDNA(w){
            let complW=""
            for (let i=0;i<=w.length;i++){
                if(w[i]=='A'){complW+='T'}
                else if(w[i]=='T'){complW+='A'}
                else if(w[i]=='C'){complW+='G'}
                else if(w[i]=='G'){complW+='C'}
            }
            return complW;
        }
        // Descending Order:
        // Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
        // Essentially, rearrange the digits to create the highest possible number.
        function descendOrder(w){
            let tab = w.toString().split("")
            tab.sort(function(a,b){return b-a })
            let res=tab.join("")
            return res;
                    }

        // Sum of positive :
        // You get an array of numbers, return the sum of all of the positives ones.
        function sumPosit(arrNum){
           let sum=0
                 for(e of arrNum){
                            if (Math.sign(e)==1){
                                sum+=e;
                            }
                 }
             return sum;
        }
        //Isograms :

        // An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
        // Implement a function that determines whether a string that contains only letters is an isogram. 
        // Assume the empty string is an isogram. Ignore letter case.
        function isogrF(w){
            let sortedtab=w.split('')
            for(let i=0;i<=sortedtab.length-1;i++){
            sortedtab[i]=sortedtab[i].toLowerCase()
            }
        sortedtab.sort()
            console.log(sortedtab)
            for(let i=0;i<=sortedtab.length-1;i++){
            if(sortedtab[i]==sortedtab[i-1] ||sortedtab[i]==sortedtab[i+1]){
                    return false
                }
            }
            return true
        }

        // List Filtering:
        // In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
        function listFilter(lis){
            let intList=[]
            for(e of lis){
                if(Number.isInteger(e)){
                    intList.push(e)
                }
            }
            return intList
        }

        //Find the smallest integer in the array
        function smallestInt(lis){
            let min=Math.min(...lis)
            return min;
        }
