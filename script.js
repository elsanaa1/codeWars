
// """""""""""""""""""""""""""""Wharming Up"""""""""""""""""""""""""""""""""""
// problem:Vowel count:
//  Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// Solution:
function getCount(str) {
    
    let tabv =str.split("").filter(
        (c)=> c=='a' || c=='e' || c=='i' || c=='o' || c=='u')
        
   return tabv.length;
 
}



// problem: Even or odd:
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

// problem: Get the middle caracter:
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Solution:
function getMiddle(s) {
   let div=s.length/2;
    return (Number.isInteger(div)) ? (s[Math.trunc(div)-1]+s[Math.trunc(div)]) : s[Math.trunc(div)];
}


// problem: Opposite number:
// Very simple, given a number (integer / decimal / both depending on the language),
//  find its opposite (additive inverse).
// Solution:

function opposite(number) {
    let sign=Math.sign(Number(number))
    return (sign==0) ? (number) : ( (sign==1) ? (Number("-"+number)) : Math.abs(Number(number)) );
}

// problem: Mumbling:
//his time no story, no theory. The examples below show you how to write function accum:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    let tab=s.toLowerCase().split("")
    let t=tab.map((e,index)=> e.repeat(index+1)).map((e)=>e.replace(e[0],e[0].toUpperCase()))
    return t.join('-')
    }

//You're a square!:
// Given an integral number, determine if it's a square number:
function isSquare(num){
    return Number.isInteger(Math.sqrt(Number(num))) ;
    
   }


// Disemvowel Trolls:
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.
function disemvowel(str) {
    return str.replace(new RegExp("[aeiuoAOIUOE]",'g'),'');
    }
    


// problem: Highest and Lowest:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Output string must be two numbers separated by a single space, and highest number is first.
function highAndLow(numbers){
    let tab=numbers.split(" ").map((e)=>Number.parseInt(e))
    return Math.max(...tab)+" "+Math.min(...tab);
    }


// problem: Exes and Ohs:
    // Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.
    //  The string can contain any char.
    //  Examples input/output: XO("ooxx") => true
         function XO(str) {
        let tab=str.split("");
        let countO=tab.filter((e)=>e=='o' || e == 'O').length
        let countX=tab.filter((e)=>e=='x' || e == 'X').length
         return (countX==countO)
         }
        
 //Problem: Square Every Digit:
        function squareDigits(num){
            return  Number(String(num).split('').map((e)=>Number(e)*Number(e)).join(""));
           }

           
        // Shortest Word  :
        // Simple, given a string of words, return the length of the shortest word(s).
        function findShort(s){
            let tabLengths= s.split(" ").map((e)=>e.length)
            return Math.min(...tabLengths)
            }
 //Problem:  Complementary DNA:
        // Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the
        // "instructions" for the development and functioning of living organisms."ATTGC" --> "TAACG"
        function dnaStrand(dna){
            let complW=""
            for (let i=0;i<=dna.length;i++){
                if(dna[i]=='A'){complW+='T'}
                else if(dna[i]=='T'){complW+='A'}
                else if(dna[i]=='C'){complW+='G'}
                else if(dna[i]=='G'){complW+='C'}
            }
            return complW;
                 }

        //Problem: Descending Order:
        // Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
        // Essentially, rearrange the digits to create the highest possible number.
        function descendingOrder(n){
            return  Number(n.toString().split("").sort(function(a,b){return b-a }).join(""));
            }

        // Sum of positive :
        // You get an array of numbers, return the sum of all of the positives ones.
        function positiveSum(arr) {
            return arr.filter((e)=>Math.sign(e)==1).reduce((acc,init)=>acc+init,0);
       }
        //Isograms :

 //Problem:  An isogram is a word that has no repeating letters, consecutive or non-consecutive.
        // Implement a function that determines whether a string that contains only letters is an isogram.
        // Assume the empty string is an isogram. Ignore letter case.
         function isIsogram(str){
            let sortedtab= str.split('').map((e)=>e.toLowerCase()).sort()
             for(let i=0;i<=sortedtab.length-1;i++){
                  if(sortedtab[i]==sortedtab[i-1] ||sortedtab[i]==sortedtab[i+1]){
                         return false
                     }
             }
             return true
         
 }

 //Problem: List Filtering:
        // In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
        function filter_list(l) {
            return l.filter((e)=>Number.isInteger(e))
          }

        //Find the smallest integer in the array
        function findSmallestInt(arr) {
            return Math.min(...arr);
           }
        // Sum of two lowest positive integers
        // Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
        //  No floats or non-positive integers will be passed.
        function sumTwoSmallestNumbers(numbers) {  
            let min=Math.min(...numbers)
              numbers.splice(numbers.indexOf(min),1)
             return min+Math.min(...numbers)
  }
   //Problem:  Growth of a Population:
        // p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
        // the function nb_year should return n number of entire years needed to get a population greater or equal to p.
        // aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
        // Examples:
        // nb_year(1500, 5, 100, 5000) -> 15

        function nbYear(p0, percent, aug, p) {
            let nbr_p=p0;
            percent=percent/100;
            let nb_y=0
            while(nbr_p<p){
                nbr_p=Math.floor(nbr_p+ nbr_p *percent+ aug);
                nb_y++;
            }
            return nb_y;

        }
        // String repeat,
        // Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
        function repeatStr (n, s) {
            return  s.repeat(n);
          }

          
        // """"""""""""""""""""""Algorithms""""""""""""""""""""""""""""""""
        // Is this a triangle?
       function isTriangle(a,b,c)
            {
        return (a+b>c && b+c>a && a+c>b)      
            }

        // Find the next perfect square!
        function findNextSquare(sq) {
            if (Number.isInteger(Math.sqrt(sq))){
                   let next= Math.sqrt(sq) + 1
                   return next * next;
            }
            else  return -1;
            
}


            // Credit Card Mask:

            function maskify(cc) {
                let tab=cc.split("")
                let len=tab.length
                return tab.map((e,i,array)=>{
                        return (i==len-1 || i==len-2 ||i==len-3 || i==len-4)? e:"#" }).join("")       
             }



                // Sum of odd numbers
                function rowSumOddNumbers(n) {
                    let firstN=n*(n-1)+1
                    return firstN+new Array(n-1).fill(null).map((e)=>{
                        firstN=firstN+2
                        return firstN}).reduce((acc,init)=>acc+init,0)     
                      }



                // Find the divisors!
              function divisors(n) {
                let tabRes=new Array(n-2).fill(null).map((e,i)=>(i+2)).filter((e,i)=>( n % (i+2) == 0) )                
                return (tabRes.length==0)? n+" is prime":tabRes.sort((a, b) => a - b);
                }
    //    """"""""""""""""""""""""" Data types """"""""""""""""""""""
 //Problem:  Return Negative:
    function makeNegative(num) {
        return (num==0)? num:(Math.sign(num)==-1)? num: -num
        
      }
 //Problem:  Remove First and Last Character:
    function removFirstLast(s){
        let tabS=str.split("")
        tabS.splice(tabS.length-1,1)
        tabS.splice(0,1)
         return tabS.join("");
         // return str.slice(1, -1);
       
    }
 //Problem:  Remove String Spaces
    // Write a function that removes the spaces from the string, then return the resultant string.
    function removWhiteSpace(s){
        return  s.split(' ').join('')
     }

  //Problem:  Convert boolean values to strings 'Yes' or 'No'.
    function boolToWord( bool ){
        return (bool)? "Yes":"No"
       }
   

 //Problem:  Convert a Number to a String!
    function numberToString(num) {
             return num.toString()
        }

    // """""""""""""""""""""""""""""""""NUmbers"""""""""""""""""""""
 //Problem:  Basic Mathematical Operations
    function basicOp(operation, value1, value2){
    return operation=='+'? value1+value2 :
        operation=='-'? value1-value2 :
        operation=='*'? value1*value2 : 
        operation == '/' ? value1 / value2 : 'Wrong Operation';
    }



 //Problem:  Sum of the first nth term of Series
       function SeriesSum(n) {
           return new Array(n).fill(n).map((e,i)=> 1/((3*i)+1)).reduce((acc,init)=>acc+init,0).toFixed(2).toString()
        }

 //Problem:  Keep Hydrated!
        function litres(time) {
            return Math.floor(Math.floor(time)*0.5);
         }

      //Problem: Century From Year

        function century(year) {
            //divide by 100 to get century
            let y= Math.floor(year / 100)
            return (year%100==0)? y:y+1
          
}

      //Problem:    Beginner - Lost Without a Map
        function maps(x){
             return x.map((e)=>2*e)
}
        //  """""""""""""""""""""""""""""Strings"""""""""""""""""""""""""""""""""""""
       //Problem:  Reversed Strings
        function solution(str){
            return str.split("").reverse().join("") 
         }

       //Problem:  String ends with?
        function solution(str, ending){
            return str.includes(ending,str.length-ending.length)       
            }


       //Problem: Do I get a bonus?
        function bonusTime(salary, bonus) {         
            return (bonus)? "£"+salary*10 : "£"+salary
            }
       //Problem:  Abbreviate a Two Word Name
        function abbrevName(name){
            let tab=name.split(" ")
            return tab[0][0].toUpperCase()+"."+tab[1][0].toUpperCase()
            }
    

       //Problem:  DNA to RNA Conversion
        function dnaTorna(dna){
            return dna.replace(/T/g,"U");
         }
        // """""""""""""""""""""""""" Arrays""""""""""""""""""""""""""
        //Problem: Counting sheep...
        function countSheeps(sheep) {  
            return sheep.filter((e)=>e==true).reduce((acc,init)=>acc+init,0)
        }



        //Problem: Ones and Zeros
        const binaryArrayToNumber = arr => {
            return parseInt(arr.join(""), 2)
          
   };
  //Problem:    A Needle in the Haystack
    function findNeedle(haystack) {
        let pos=haystack.findIndex((e)=>e=='needle');
         return (pos!=-1)? ("found the needle at position "+pos) :"not found"
         }
      
  //Problem: Remove the minimum

    function removeSmallest(numbers) {
        let newarr=numbers.map((e)=>e)
        newarr.splice(numbers.indexOf(Math.min(...numbers)),1)
         return newarr
   }

  //Problem:  Convert number to reversed array of digits
    function digitize(n) {
        
        return Array.from(String(n), Number).reverse()
    }
        // """"""""""""""""""""""""""""""""Objects"""""""""""""""""""""""""""""""""
 // problem: Make a function that does arithmetic!
    function mathOper(a,b,op){
        if(op== "add" ){return a+b}
        else if(op=="subtract"){return a-b}
        else if(op=="multiply"){return a*b}
        else if(op=="divide" ){return a/b}
        }



     // problem: Regular Ball Super Ball:

        var Ball = function(ballType) {
            this.ballType=ballType || 'regular'
           
            };

       // problem: Make them bark!
        var Dog= function(name, breed, sex, age){
            this.name  = name;
            this.breed = breed;
            this.sex   = sex;
            this.age   = age;
        }
        Dog.prototype.bark=function(){   return 'Woof!'}
        
 
     



        // problem:Add property to every object in array
        function addProp(arr){
                for(let e of arr){
                    e.usersAnswer=null
                }
                return arr
                }




        // problem: FIXME: Get Full Name

        class Dinglemouse{

            constructor( firstName, lastName ){
              this.firstName=firstName;
              this.lastName=lastName;
            }
            
            getFullName(){
              return this.firstName+" "+this.lastName
            }
            
          }

      //"""""""""""""""""""""" Basic Language Features"""""""""""""""""
   // problem: Grasshopper - Summation

   var summation = function (num) {
    return  new Array(num).fill(num).map( (e,i) => i+1 ).reduce((acc,init)=>acc+init,0);
}
   // problem: Jenny's secret message
   function greeting(name){
    let gre="Hello "+name
    return gre
}

    // problem: Function 1 - hello world
        function greet(){
            let greet="hello World"
            return greet
        }
       // problem: Count the Monkeys!
       function monkeyCount(n) {

        return new Array(n).fill(n).map((e,i)=> i+1)
    }

       // problem: Are You Playing Banjo?
       function areYouPlayingBanjo(name) {
        return (name[0].toLowerCase()=='r')? name + " plays banjo": name + " does not play banjo"
               
          
           }
   
   

        // """""""""""""""""""""Control Flow""""""""""""""""""""""""""
       // problem: Find the capitals

        function isUpper(word){
            var capitals = function (word) {
        //filter elements then remove whitespaces , be careful ""==0
        return word.split('').map((e,i,arr)=> {return (arr[i]==arr[i].toUpperCase())? i:''} ) .filter((e)=>(String(e)!=''))    
    }
        }

     // problem: Plural
        function plural(n){
            function plural(n) {
                return (n!=1)
                        
            }
        }
  // problem: Drink about
  function peopleWithAgeDrink(old) {
 
    let dr="drink ";
return (old<14)? dr+"toddy" :(old<18)? dr+"coke":(old<21)?dr+"beer":(old>=21)? dr+"whisky":'';
     
};
   // problem: Leonardo Dicaprio and Oscars
   function leo(oscar){
    return (oscar==88)? "Leo finally won the oscar! Leo is happy":(oscar==86)? "Not even for Wolf of wallstreet?!":(oscar<88)?"When will you give Leo an Oscar?":(oscar>88)? "Leo got one already!":'';
  
  }

// """"""""""""""""""""""""""""Loops"""""""""""""""""""""""""""""""""""

    // problem: Sentence Smash

    function smash (words) {
        return words.join(" ")
    }

      // problem: If you can't sleep, just count sheep!!

      var countSheep = function (num){
        let counts=""
        for(let i=1;i<=num;i++){
            counts+=i+" sheep..."
        }
    return counts
    }



     // problem: Double Char:
     function doubleChar(str) {
        let tab=str.split('')
        tab.forEach((e,i)=> tab[i]=tab[i].repeat(2) )
        return tab.join('');
        }
                


    //    """""""""""""""""""""""""""""""""""""""" #Changing Gears""""""""""""""""""""""""""""""""""""""""""""
      // problem: Multiples of 3 or 5

        function sumMultip(n){
            let mult3=0
        let mult5=0
        let sum=0
        let i=1
        while(mult3<n){
            
            mult3=3*i;
            sum+=mult3
             i++
        }
        i=1
        while(mult5<n){
            mult5=5*i;
            sum+=mult5
             i++
        }
        //when loop ends last element should be substracted because it's >10
        return sum=sum-mult3-mult5
        }
        


      //problem: Sum of Digits / Digital Root,Digital root is the recursive sum of all the digits in a number.
        function recSumdigits(num){
            
            while(num.toString().length>1){
                num=sumdig(num)
            }
            return num
                
                function sumdig(num){
                        let sum = 0;
                    while (num) {
                        sum += num % 10;
                        num = Math.floor(num / 10);
                    }
                    return sum
                    }
        }

    
      //problem: Who likes it?
      
      function likes(arr) {
        if(arr.length==0){
            return "no one likes this"
        }
    else if(arr.length==1){return arr[0]+" likes this" }
    else if(arr.length==2){return arr[0]+ " and "+ arr[1] +" like this"}
    else if(arr.length==3){
             return  arr[0]+ ", "+ arr[1]+" and " +arr[2]+ " like this"}
    else{
        let arrname=[]
        for(let i=0;i<arr.length-2;i++)
        {
            arrname.push(arr[i])
        }
        return arrname[0]+ ", "+ arrname[1]+' and '+(arr.length-2)+' others like this';
    }

    }
    



   //problem: Find The Parity Outlier:
            // even array : exist o1 elemnt even between 2 odd elements , it can be in first or end or middle of array
            // odd =1; even=0
            function parityarr(arr){
                let len=arr.length

            for(let i=0;i<len;i++){
                let a,a1,a2,a_1,a_2
                a=typ(arr[i])
                a1=typ(arr[i+1])
                a2=typ(arr[i+2])
                a_1=typ(arr[i-1])
                a_2=typ(arr[i-2])
                if( (a==1 && a1==0 && a2==0)||(a_1==0 && a==1 && a1==0)||( a_2==0 &&  a_1==0 && a==1 )){
                return arr[i]+" the only odd number" 
                    }

                else if((a==0 && a1==1 && a2==1)||(a_1==1 && a==0 && a1==1)||( a_2==1 &&  a_1==1 && a==0 )){
                    return arr[i]+" the only even number" 
                }
            }

            function typ(num){
                if(num!=null){
                    if(num%2==0){
                    return 0
                    }
                    else {
                        return 1
                    }
                }
                else num
                
            }
            }


         //problem:Stop gninnipS My sdroW!

            function stopgninnip(s){
                let tab=s.split(" ")
                let newtab=[]
                for(e of tab){
                     if(e.length>4){
                          newtab.push(inversWord(e))   
                     }
                     else{
                         newtab.push(e)
                     }
                     
                }
                
                     //problem:  Reverse Strings
                     function spinWords(s){
                        let tab=s.split(" ")
                        let newtab=[]
                        for(e of tab){
                             if(e.length>4) newtab.push(inversWord(e))               
                             else newtab.push(e)}
                        //  Reverse Strings
                                function inversWord(w){
                                    return w.split("").reverse().join("")
                                 }
                        return newtab.join(" ")
                        }
            
                    }


      // """"""""""""""""""""""""""""""""""""""Fire At Will """""""""""""""""""""""""""
                // Problem1: Find out whether the shape is a cube:https://www.codewars.com/kata/58d248c7012397a81800005c
                // To find the volume (centimeters cubed) of a cuboid you use the formula:
                // volume = Length * Width * Height
                // But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
                // It's up to you to find out whether the cuboid has equal sides (= is a cube).       
                // Return true if the cuboid could have equal sides, return false otherwise.
                // Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
                // Note: side will be an integer   

                function isCuboid(volume,length){
                    // check if invalid entries
                    if(volume<=0 || length<=0){
                        return false 
                    }
                    // check if cuboid could have equal sides
                    else if(Math.pow(length,3)==volume){
                         return true 
                    }else{
                         return false 
                    }
                }


         //  Problem 2: Numbers with The Highest Amount of Divisors::https://www.codewars.com/kata/55ef57064cb8418a3f000061
        // An array of different positive integers is given. We should create a code that gives us the number 
        // (or the numbers) that has (or have) the highest number of divisors among other data.

        function proc_arrInt(arr){

            let len=arr.length;
            let returnArray=[len]
            
            let listRetuHighest=[];
            let totalPrim=0;
        let highestDivArr=[]
        //calcul of number divisors of array elements  
        for(let i=0;i<arr.length;i++){
                highestDivArr.push(nmbrdivisors(arr[i]))
                if(isPrime(arr[i]) ==true){
                    totalPrim++
                }
        }
        // insert total of prime numbers 
        returnArray.push(totalPrim)
        //get highest amount of divisors that a certain number 
        let maxtotalDiv=Math.max(...highestDivArr);
        listRetuHighest.push(maxtotalDiv);
        // get elements in array that has maxtotalDiv 
        let arrMaxdiv=[]
            for(let i=0;i<highestDivArr.length;i++){
                if(highestDivArr[i]==maxtotalDiv) {arrMaxdiv.push(arr[i])}
            }
              //sort list 
        arrMaxdiv.sort(function(a,b){return a-b})
        listRetuHighest.push(arrMaxdiv);

        //insert list to return variable
        returnArray.push(listRetuHighest)
        return returnArray;
        
        //function to get number of divisors 
            function nmbrdivisors(n){
            let countDiv=0
            for(let i=1;i<=n;i++){
                if(n%i==0){
                    countDiv++
                }
            }
            return countDiv
                }
        //function to check prime number
            function isPrime(n){
                for(let i=2;i<n;i++){
                    if(n % i === 0) return false;
                }
                return true
            }
        }
    

//        //  Problem 3: Last digit of a huge number:https://www.codewars.com/kata/5518a860a73e708c0a000027
// //   For a given list [x1, x2, x3, ..., xn] compute the last (decimal) digit of x1 ^ (x2 ^ (x3 ^ (... ^ xn))).
// // E. g., with the input [3, 4, 2], your code should return 1 because 3 ^ (4 ^ 2) = 3 ^ 16 = 43046721.
// // Beware: powers grow incredibly fast. For example, 9 ^ (9 ^ 9) has more than 369 millions of digits. lastDigit has to deal with such numbers efficiently.
// // Corner cases: we assume that 0 ^ 0 = 1 and that lastDigit of an empty list equals to 1.
// function lastdigit(arrNum) {
//     let len=arrNum.length
//     let resul=1// in case of empty list return 1(0pow(0)=1)
//     //start from array's end to calculate the power 
//     for(let i=len-1;i>=0;i--){
//         resul=Math.pow(arrNum[i],resul)
//     }
//     let s=resul.toString();
//     let lastdigit=s[s.length-1];
//     return lastdigit
// }



//     // Problem 4: The soul of wit: reverse an array:https://www.codewars.com/kata/59b81886460387d8fc000043
// // No time for stories. Reverse an array, return the result. Do whatever you want with the original array.
// // Don't use Array.prototype.reverse.
// function reversArr(arr){    
//     let len=arr.length
//     let revArr=[]
//     for(let i=len-1;i>=0;i--){
//           revArr.push(arr[i])
//        }
//     return revArr
   
//    } 
    

//    // problem 5:Weird prime generator:https://www.codewars.com/kata/562b384167350ac93b00010c
// //    Write functions:
// // 1: an(n) with parameter n: returns the first n terms of the series of a(n) (not tested)
// // 2: gn(n) with parameter n: returns the first n terms of the series of g(n) (not tested)
// // 3: countOnes(n) with parameter n: returns the number of 1 in the series gn(n) 
// //     (don't forget to add a `1` at the head) # (tested)
// // 4:  p(n) with parameter n: returns an array filled with the n first distinct primes in the same order they are found in the sequence gn (not tested)
// // 5: maxPn(n) with parameter n: returns the biggest prime number of the above p(n) # (tested)
// // 6: anOver(n) with parameter n: returns an array (n terms) of the a(i)/i for every i such g(i) != 1 (not tested but interesting result)
// // 7: anOverAverage(n) with parameter n: returns as an *integer* the average of anOver(n) # (tested)
// // Solution:
// function an(n){
//     let an=[7]
//     for(let i=1;i<n;i++){
//         // a(n) = a(n-1) + gcd(n, a(n-1)) for "n >= 2"
//         let e=an[i-1]+gcd(i+1,an[i-1])
//         an.push(e)
//     }
//     return an
//     //calcul gcd
//     function gcd(a, b) {
//       if (!b) {
//         return a;
//       }
//       return gcd(b, a % b);
//     }
// }
// // gn function
// function gn(n){
//     let anArr=[]
//     anArr=an(n);
//     let gn=[1];// first element is 1
//     for(let i=0;i<n-1;i++){
//         let e=anArr[i+1]-anArr[i]
//         gn.push(e)
//     }
//     return gn;
// }

// function  countOnes(n){
//     let count=0
//     let gArr=gn(n)
//      for(let i=0;i<n;i++){
//         if(gArr[i]==1){
//             count++
//         }
//      }
//     return count;
// }

// function  p(n){
//     let retArr=[]
//     let gnArr=gn(n)
//     for(let i=0;i<n;i++){
//         if(gnArr[i]!=1){
//             retArr.push(gnArr[i])
//         }
//      }
//     return retArr;
// }



// function maxPn(n){
//     let pnArr=p(n)
//     return Math.max(...pnArr)
// }

// function anOver(n){
//     let aArr=an(n)
//     let retArr=[]
//     for(let i=0;i<n;i++){
//          let e=Math.floor(aArr[i]/(i+1))
//          retArr.push(e)
//     }
//     return retArr
// }

// function anOverAverage(n){
//     let sum=0
//     let arr=anOver(n)
//     let len =arr.length
//      for(let i=0;i<n;i++){
//          sum+=arr[i]
//     }
//     return Math.floor(sum/len)
    
// }
